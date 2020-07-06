import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

//components
import { BurgerForm } from '../components/BurgerForm';
import { EditBurgerForm } from '../components/EditBurgerForm';
import { BurgerSelect } from '../components/BurgerSelect';

const StyledBurger = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .BurgerListWrapper {
    background-color: rgba(255, 255, 255, 0.8);
    margin: 10px;
    padding: 10px;
    border-radius: 8px;
    -webkit-box-shadow: -9px 9px 3px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -9px 9px 3px -5px rgba(0, 0, 0, 0.75);
    box-shadow: -9px 9px 3px -5px rgba(0, 0, 0, 0.75);
  }
  .BurgerList {
    display: flex;
    justify-content: space-between;
    margin: 15px;
  }
  .Burger {
    margin: 5px;
    font-size: 18px;
    font-weight: 300;
  }
  .FormButtonWrapper {
    min-width: 120px;
  }
  .FormButton {
    outline: none;
    cursor: pointer;
    position: relative;
    z-index: 3;
    margin: 5px;
    background: transparent;
    color: #ea2733;
    border-color: #0859bd;
    border-style: solid;
    border-width: 1px;
    border-radius: 22px;
    padding: 5px 10px;
    transition: all 0.2s linear;
    font-family: 'Londrina Solid', 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: #0859bd;
    max-height: 45px;
    a {
      text-decoration: none;
    }
  }
  .FormButton:hover {
    color: #ea2733;
    background: white;
    border-color: #ea2733;
    transition: all 0.2s linear;
  }
  .FormButton:active {
    border-radius: 22px;
  }
  .BurgerSelectWrapper {
    background-color: rgba(255, 255, 255, 0.8);
    max-height: 420px;
    margin: 10px;
    padding: 10px;
    border-radius: 8px;
    -webkit-box-shadow: -9px 9px 3px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -9px 9px 3px -5px rgba(0, 0, 0, 0.75);
    box-shadow: -9px 9px 3px -5px rgba(0, 0, 0, 0.75);
  }
  .Icons {
    margin-left: 10px;
    font-size: 50px;
  }
  @media (max-width: 1540px) {
    flex-wrap: wrap-reverse;
  }
`;

export const Burger = () => {
  const [burgersList, setBurgersList] = useState([]);
  const [editBurger, setEditBurger] = useState(null);
  const fetchBurgers = () => {
    const burgerEndpoint = 'http://localhost:3001/burgers';
    axios.get(burgerEndpoint).then((response) => {
      const data = response.data;

      setBurgersList(data);
    });
  };
  useEffect(() => {
    fetchBurgers();
  }, []);
  const handleFormSubmit = (value) => {
    const burgerEndpoint = 'http://localhost:3001/burgers';
    axios
      .post(burgerEndpoint, {
        name: value,
      })
      .then(fetchBurgers);
  };
  const deleteBurger = (burgerId) => {
    const burgerEndpoint = `http://localhost:3001/burgers/${burgerId}`;
    axios.delete(burgerEndpoint).then(fetchBurgers);
  };
  const showEditBurgerForm = (burgerName, burgerId) => {
    setEditBurger({ name: burgerName, id: burgerId });
  };
  const handleEditFormSubmit = (value, burgerId) => {
    const burgerEndpoint = `http://localhost:3001/burgers/${burgerId}`;
    axios
      .put(burgerEndpoint, {
        name: value,
      })
      .then(() => {
        setEditBurger(null);
        fetchBurgers();
      });
  };
  const handleEditFormCancel = () => {
    setEditBurger(null);
  };
  return (
    <StyledBurger>
      <div className="BurgerListWrapper">
        <span className="Icons" aria-label="BurgerNotes" role="img">
          📝
        </span>
        <BurgerForm onSubmit={handleFormSubmit} />
        {editBurger && (
          <EditBurgerForm
            onCancel={handleEditFormCancel}
            onSubmit={handleEditFormSubmit}
            editName={editBurger.name}
            editId={editBurger.id}
          />
        )}
        {burgersList.map((burger) => (
          <div key={`${burger.name}`}>
            <div className="BurgerList">
              <div className="BurgerNameWrapper">
                <span className="Burger">{burger.name}</span>
              </div>
              <div className="FormButtonWrapper">
                <button
                  className="FormButton"
                  type="button"
                  onClick={() => showEditBurgerForm(burger.name, burger.id)}
                >
                  Edit
                </button>
                <button
                  className="FormButton"
                  type="button"
                  onClick={() => deleteBurger(burger.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="BurgerSelectWrapper">
        <span className="Icons" aria-label="BurgerSchedule" role="img">
          📅
        </span>
        <BurgerSelect />
      </div>
    </StyledBurger>
  );
};
