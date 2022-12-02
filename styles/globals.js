import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body, html {
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.color};
    font-family: 'Gilroy';
    animation: none !important;
  }
  body > * {
    transition: 0.5s;
  }
`


