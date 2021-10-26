import styled, { createGlobalStyle, css } from "styled-components"

type MainProps = {
  paddingTop: number
}

export const Main = styled.main<MainProps>`
  padding-top: ${({paddingTop }) => paddingTop}px;

  background: ${props => props.theme.colors.gray[800]};

  width: 100%;
  height: 100%;
`

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
    outline: 2px solid ${props => props.theme.colors.accent[100]};
    outline-offset: 4px;
    border-radius: 5px;
    /* -moz-outline-radius: 5px; */
  }

  @media (prefers-color-scheme: dark) {
    img {
      filter: brightness(0.9);
    }
  }
`