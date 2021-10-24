import styled, { css } from "styled-components"

type ButtonContainerProps = {
  paddingBlockClamp: string
  paddingHorizontalClamp: string
  outlined: boolean
  backgroundColor: string
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border: 0;
  outline: 0;
  background: none;

  a {
    position: relative;
    
    font-weight: 600;
    color: ${props => props.theme.colors.gray[50]};

    border-radius: 5px;
  }

  ${props => css`
    a {
      padding: ${props.paddingBlockClamp} ${props.paddingHorizontalClamp};
    }
  `}

  ${props => props.outlined ? 
    css`
      a {  
        padding calc(${props.paddingBlockClamp} - 3px) ${props.paddingHorizontalClamp};
        border: 3px solid;
        border-color: ${props.backgroundColor};

        background-color: ${props.theme.colors.gray[100]};
        background-image: linear-gradient(to right, ${props.backgroundColor}, ${props.backgroundColor});
        background-size: 100vh 0%;
        background-repeat: no-repeat;
        background-position: right;
        color: ${props.theme.colors.gray[800]};

        transition: all 200ms;
      
        &:hover, &:focus {
          color: ${props.theme.colors.gray[50]};
          background-size: 100% 100%;
        }
      }
      `
    : 
    css`
      a {
        border: none;
        background: ${props.backgroundColor} !important;
      }
      `
    }

  &:hover {
    cursor: pointer;
  }
`