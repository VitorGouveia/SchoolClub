import { lighten } from "polished"
import styled, { css, keyframes } from "styled-components"

type ButtonContainerProps = {
  paddingBlockClamp: string
  paddingHorizontalClamp: string
  outlined: boolean
  backgroundColor: string
  fontSize: string
  loading: boolean
  active: boolean
}

const loadingSpinner = keyframes`
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
`

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border: 0;
  outline: 0;
  background: none;
  position: relative;

  a {
    position: relative;
    
    font-weight: 600;
    font-size: ${props => props.fontSize};
    color: ${props => props.theme.colors.gray[50]};

    border-radius: 5px;
  }

  ${props => css`
    a {
      padding: ${props.paddingBlockClamp} ${props.paddingHorizontalClamp};
    }
  `}

  &:disabled {
    a {
      cursor: not-allowed;
      opacity: 0.7;
    }
  }

  ${props => props.outlined ? 
    css`
      a {  
        padding calc(${props.paddingBlockClamp} - 3px) calc(${props.paddingHorizontalClamp} - 3px);
        border: 3px solid;
        border-color: ${props.backgroundColor};

        background-color: ${props.theme.colors.gray[100]};
        background-image: linear-gradient(to right, ${props.backgroundColor}, ${props.backgroundColor});
        background-size: 100% 0%;
        background-repeat: no-repeat;
        background-position: right;
        color: ${props.theme.colors.gray[800]};

        transition: all 200ms;
        
        ${props.disabled === false && css`
          &:hover, &:focus {
            color: ${props.theme.colors.gray[50]};
            background-size: 100% 100%;
          }
          `}
          
        ${props.active && css`
          color: ${props.theme.colors.gray[50]};
          background-size: 100% 100%;
        `}
      }
    `
    : 
    css`
      a {
        border: none;
        background: ${props.backgroundColor} !important;

        ${props.disabled === false && css`
          &:hover, &:focus {
            background: ${lighten(0.2, props.backgroundColor)} !important;
          }
          `}
          
        ${props.active && css`
          background: ${lighten(0.2, props.backgroundColor)} !important;
        `}
      }
    `
  }

  ${props => props.loading && css`
    span {
      visibility: hidden;
      opacity: 0;
    }
      
    &::after {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      border: 4px solid transparent;
      border-top-color: #ffffff;
      border-radius: 50%;
      animation: ${loadingSpinner} 1s ease infinite;
    }
  `}

  &:hover {
    cursor: pointer;
  }
`