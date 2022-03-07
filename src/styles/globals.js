import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    display: grid;
    grid-template-columns: 80vw;
    justify-content: center;
    align-content: center;

    height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  

`
