import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

//components
import { Dashboard } from './screens/Dashboard';
import { Burger } from './screens/Burger';

//styles
import GlobalStyles from './styles/GlobalStyles';

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 10px 10px 12px 10px;
  width: 100%;
  background-color: rgba(222, 241, 242, 0.9);
  .Nav {
    margin: 0 5px;
    padding-right: 10px;
    color: black;
    background-color: transparent;
    font-weight: 500;
    font-size: 22px;
    border-right: 1px solid black;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }
  .Nav:visited {
    color: #ea2733;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }
  .Nav:hover {
    color: #f4e022;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }
  .Nav:active {
    color: #f4e022;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }
`;

const StyledH1 = styled.div`
  .Container {
    display: flex;
    flex-direction: column;
  }
  .RedBox {
    background-color: #ea2733;
    height: 100px;
    max-width: 390px;
    margin: 10px;
    border: 2px solid black;
    -webkit-box-shadow: -9px 9px 3px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -9px 9px 3px -5px rgba(0, 0, 0, 0.75);
    box-shadow: -9px 9px 3px -5px rgba(0, 0, 0, 0.75);
  }
  .YellowBox {
    background-color: #f4e022;
    height: 80px;
    max-width: 370px;
    border: 2px solid black;
    margin-top: 8px;
    margin-left: 7px;
  }
  h1 {
    margin-top: 5px;
    text-align: center;
    font-size: 60px;
    color: #ea2733;
    text-shadow: -4px 2px #000000;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }
  @media (max-width: 375px) {
    .RedBox {
      height: 80px;
      max-width: 370px;
    }
    .YellowBox {
      height: 60px;
      max-width: 305px;
    }
    h1 {
      font-size: 40px;
    }
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <div>
        <StyledNav>
          <nav>
            <Link className="Nav" to="/">
              Home
            </Link>
            <Link className="Nav" to="/burgers">
              Burgers
            </Link>
          </nav>
        </StyledNav>
        <StyledH1>
          <div className="Container">
            <div className="RedBox">
              <div className="YellowBox">
                <h1>BOB'S BURGERS</h1>
              </div>
            </div>
          </div>
        </StyledH1>
        <Switch>
          <Route path="/burgers" children={<Burger />} />
          <Route path="/" children={<Dashboard />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
