import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  body{
    background:#343434;
    -webkit-font-smoothing: antialiased;
    font-size: 16;
  }

  body, input, button {
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: #9f9f9f;
  }
`;

export default GlobalStyle;
