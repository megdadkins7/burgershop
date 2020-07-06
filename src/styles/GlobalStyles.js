import { createGlobalStyle } from 'styled-components';
import restaurant from '../assets/restaurant.png';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  html, body {
    width: 100%;
    height: 100vh;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Londrina Solid', 'Open Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    background: url(${restaurant}) white no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    -webkit-font-smoothing: antialiased; /* trick for smoother fonts */
    -moz-osx-font-smoothing: grayscale; /* trick for smoother fonts */
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
