import { createGlobalStyle, css } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background 400ms;
  }

  html, body {
    width: 100%;
    height: 100%;
    
    ${({ theme: { colors, fonts } }) => css`
      font-family: ${fonts.Rubik};
      color: ${colors.gray[50]};
      background: ${colors.gray[600]}
    `}
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  [data-reset] {
    margin: 0;
    padding: 0;
    color: inherit;
    background: transparent;
    display: grid;
    place-items: center;
  }

  :focus {
    outline: 0;
  }
`