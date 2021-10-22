import styled, { css } from "styled-components"

type ButtonContainerProps = {
  paddingBlockClamp: string
  paddingHorizontalClamp: string
  outlined: boolean
  backgroundColor: string
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  position: relative;

  ${props => css`
    padding: ${props.paddingBlockClamp} ${props.paddingHorizontalClamp};
    background: ${props.backgroundColor};
  `}

  ${props => props.outlined ? 
    css`
      background: transparent;
      border: 3px solid;
      border-color: ${props.backgroundColor};
    `
    : 
    css`
      border: none;
      background: ${props.backgroundColor}
    `
  }
`