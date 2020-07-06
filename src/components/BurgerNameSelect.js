import React from 'react';
import styled from 'styled-components';

const StyledBurgerNameSelect = styled.div`
  select {
    height: 30px;
    width: 600px;
    padding: 5px 5px 5px 10px;
    font-size: 16px;
    border: 1px solid #0859bd;
  }
  select:focus {
    outline: none !important;
  }
  @media (max-width: 700px) {
    select {
      width: 550px;
    }
  }
  @media (max-width: 650px) {
    select {
      width: 450px;
    }
  }
  @media (max-width: 550px) {
    select {
      width: 350px;
    }
  }
`;

export const BurgerNameSelect = ({ burgerList, onSubmit }) => {
  const handleBotdSelect = (burgerId) => {
    onSubmit(parseInt(burgerId));
  };
  return (
    <StyledBurgerNameSelect>
      <select onChange={(e) => handleBotdSelect(e.target.value)}>
        {burgerList.map((obj) => (
          <option key={`${obj.id}`} value={obj.id}>
            {obj.name}
          </option>
        ))}
      </select>
    </StyledBurgerNameSelect>
  );
};
