import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  html, body {
    width: 100vw;
    height: 100vh;
  }

  body, #__next {
    height: 100vh;

    font-family: 'Ubuntu', sans-serif;
  }

  *, input, button {
    font-family: 'Ubuntu', sans-serif;
  }

  button {
    border: 0;
    outline: 0;
    cursor: pointer;
  }
`

export default GlobalStyles
