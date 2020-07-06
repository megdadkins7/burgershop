import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

//components
import { BurgerNameSelect } from './BurgerNameSelect';

const StyledBurgerSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 5px;
  span {
    margin-right: 10px;
    font-size: 18px;
    font-weight: 300;
  }
`;

export const BurgerSelect = () => {
  const [botd, setBotd] = useState([]);
  const [burgers, setBurgers] = useState([]);
  const fetchBurgers = () => {
    const burgerEndpoint = 'http://localhost:3001/burgers';
    axios.get(burgerEndpoint).then((response) => {
      const data = response.data;

      setBurgers(data);
    });
  };
  useEffect(() => {
    const fetchBotd = () => {
      const botdEndpoint = 'http://localhost:3001/botd';
      axios.get(botdEndpoint).then((response) => {
        const data = response.data;

        setBotd(data);
      });
    };
    fetchBotd();
  }, []);

  useEffect(() => {
    fetchBurgers();
  }, []);
  const handleSelect = (id, day, burgerId) => {
    const botdEndpoint = `http://localhost:3001/botd/${id}`;
    axios
      .put(botdEndpoint, {
        day,
        burgerId,
      })
      .then(fetchBurgers);
  };
  return (
    <div>
      {botd.map((data) => (
        <StyledBurgerSelect key={`${data.day}`}>
          <span>{data.day.toUpperCase()}</span>
          <BurgerNameSelect
            burgerList={burgers}
            onSubmit={(nextBurgerId) => {
              handleSelect(data.id, data.day, nextBurgerId);
            }}
          />
        </StyledBurgerSelect>
      ))}
    </div>
  );
};
