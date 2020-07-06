import React, { useState } from 'react';
import styled from 'styled-components';

const StyledEditBurgerForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 10px 10px 20px;
  .EditBurgerWrapper {
    position: relative;
    margin-bottom: 10px;
    padding: 15px;
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
    min-width: 195px;
  }
  .BurgerButton {
    margin: 10px 5px 5px 5px;
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

export const EditBurgerForm = ({ editName, editId, onSubmit, onCancel }) => {
  const [burgerName, setBurgerName] = useState(editName);
  const handleOnChange = (value) => {
    setBurgerName(value);
  };
  const handleSubmitClick = () => {
    onSubmit(burgerName, editId);
    setBurgerName('');
  };
  return (
    <StyledEditBurgerForm>
      <div className="EditBurgerWrapper">
        <input
          type="text"
          onChange={(e) => handleOnChange(e.target.value)}
          value={burgerName}
        />
      </div>
      <div className="BurgerButtonWrapper">
        <button
          className="BurgerButton"
          type="submit"
          onClick={handleSubmitClick}
        >
          <span>Save</span>
        </button>
        <button className="BurgerButton" onClick={onCancel}>
          <span>Cancel</span>
        </button>
      </div>
    </StyledEditBurgerForm>
  );
};
