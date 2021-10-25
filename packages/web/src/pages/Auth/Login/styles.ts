import styled, { css } from "styled-components"

export const Container = styled.section`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1.5fr;
`

export const Form = styled.form`
  background: ${props => props.theme.colors.gray[900]};

  display: grid;

  padding: 32px 90px;

  place-items: center;
  grid-template-areas:
    ". logo ."
    ". title ."
    "description description description"
    "email email email"
    "password password password"
    "forgotPassword forgotPassword ."
    "keepLogged keepLogged ."
    "button button button"
    "divider divider divider"
    ". register ."
  ;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;
`

export const LogoContainer = styled.section`
  grid-area: logo;
`

export const Title = styled.h1`
  grid-area: title;
`

export const Description = styled.p`
  grid-area: description;
`

type ForgotPasswordProps = {
  fontSize: string
}

export const ForgotPassword = styled.div<ForgotPasswordProps>`
  grid-area: forgotPassword;

  width: 100%;
  height: 100%;

  display: grid;
  place-items: flex-start;

  a {
    ${({ fontSize, theme: { colors } }) => css`
      color: ${colors.accent[200]};
      font-size: ${fontSize};
      padding-bottom: 3px;

      background-image: linear-gradient(to right, ${colors.accent[200]}, ${colors.accent[200]});
      background-size: 0% 2px;
      background-repeat: no-repeat;
      background-position: left bottom;

      transition: all 200ms;

      &:hover, &:focus {
        color: ${colors.accent[100]};
        background-size: 100% 2px;
      }
    `}
  }
`

export const KeepLogged = styled.div`
  grid-area: keepLogged;
`

export const ImageContainer = styled.div`
`