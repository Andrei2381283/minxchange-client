import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.color};
    font-family: 'Gilroy';
  }

  * {
    box-sizing: border-box;
  }

  
  @media (max-width: 1300px) {
    body {
      font-size: 1.23vw;
    }
  }
`


