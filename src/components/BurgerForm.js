import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledBurgerForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 10px 10px 20px;
  .AddBurgerWrapper {
    position: relative;
    margin-bottom: 10px;
    padding: 0 15px 15px 15px;
  }
  input {
    font-size: 18px;
    font-weight: 300;
    font-family: 'Londrina Solid', 'Open Sans', sans-serif;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 300px;
    border: none;
    border-bottom: 1px solid #757575;
  }
  input:focus {
    outline: none;
  }
  .BurgerButtonWrapper {
    min-width: 120px;
  }
  .BurgerButton {
    outline: none;
    cursor: pointer;
    position: relative;
    z-index: 3;
    background: transparent;
    color: #ea2733;
    border-color: #ea2733;
    border-style: solid;
    border-width: 2px;
    border-radius: 22px;
    padding: 10px 20px;
    transition: all 0.2s linear;
    font-family: 'Londrina Solid', 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 300;
    color: #ea2733;
    max-height: 45px;
    a {
      text-decoration: none;
    }
  }
  .BurgerButton:hover {
    color: #f4e022;
    background: #ea2733;
    border-color: #ea2733;
    transition: all 0.2s linear;
  }
  .BurgerButton:active {
    border-radius: 22px;
  }
  @media (max-width: 525px) {
    input {
      width: 200px;
    }
  }
`;

export const BurgerForm = ({ onSubmit }) => {
  const [burgerName, setBurgerName] = useState('');
  useEffect(() => {}, [burgerName]);
  const handleOnChange = (e) => {
    setBurgerName(e.target.value);
  };
  const handleSubmitClick = () => {
    onSubmit(burgerName);
    setBurgerName('');
  };
  return (
    <StyledBurgerForm>
      <div className="AddBurgerWrapper">
        <input
          type="text"
          id="burger"
          onChange={handleOnChange}
          value={burgerName}
          placeholder="ADD A BURGER..."
        />
      </div>
      <div className="BurgerButtonWrapper">
        <button
          className="BurgerButton"
          type="submit"
          onClick={handleSubmitClick}
        >
          Add Burger
        </button>
      </div>
    </StyledBurgerForm>
  );
};
