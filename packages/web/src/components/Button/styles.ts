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
  D: boolean
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

  &:focus:not(:focus-visible) {
    outline: none;
  }

  a {
    position: relative;

    ${({ paddingBlockClamp, paddingHorizontalClamp }) => css`
      padding: ${paddingBlockClamp} ${paddingHorizontalClamp};
    `}
    
    font-weight: 600;
    font-size: ${props => props.fontSize};
    color: ${props => props.theme.colors.gray[50]};

    border-radius: 5px;
  }

  &:disabled {
    a {
      cursor: not-allowed;
      opacity: 0.7;
    }
  }

  &:hover {
    cursor: pointer;
  }

  ${props => props.D === true && css`
      background: hsl(340deg 100% 32%);
      outline-offset: 4px;
      border-radius: 5px;
      transition: filter 250ms;

      a {
        width: 100%;
        height: 100%;

        border: 0 !important;
        box-shadow: none !important;

        will-change: transform;
        transition:
          transform
          600ms
          cubic-bezier(.3, .7, .4, 1);

        display: block;
        background: hsl(345deg 100% 47%);
        transform: translateY(-5px);
      }

      &:hover {
        transition: filter 250ms;
        filter: brightness(110%);

        /* remove IOS tap hightlight */
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        
        a {
          transform: translateY(-7px);
          transition:
            transform
            250ms
            cubic-bezier(.3, .7, .4, 1.5);
        }

        .shadow {
          transform: translateY(4px);
        }
      }

      &:active, &focus {
        a {
          transform: translateY(-2px);
          transition: transform 34ms;
        }

        .shadow {
          transform: translateY(1px);
        }
     }
  `}

  ${props => props.outlined
    ? css`
      a {  
        padding calc(${props.paddingBlockClamp} - 2px) calc(${props.paddingHorizontalClamp} - 3px);

        border: 2px solid ${props.backgroundColor};
        box-shadow: 0px 2px 5px 3px black;

        background-image: linear-gradient(to right, ${props.backgroundColor}, ${props.backgroundColor});
        background-size: 100% 0%;
        background-repeat: no-repeat;
        background-position: right;
        
        color: ${props.theme.colors.gray[700]};

        transition: all 200ms;
        
        ${props.disabled === false && props.D === false && css`
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
    
    : css`
      a {
        border: none;
        background: ${props.backgroundColor} !important;

        ${props.disabled === false && css`
          &:hover, &:focus {
            background: ${lighten(0.2, props.backgroundColor)};
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
    
    a {
      &::after {
        content: "";
        
        width: 12px;
        height: 12px;
        
        position: absolute;
        inset: 0;
  
        margin: auto;
        border: 4px solid transparent;
        border-top-color: #ffffff;
        border-radius: 50%;
        animation: ${loadingSpinner} 1s ease infinite;
      }
    }
  `}
`

export const Shadow = styled.span`
  position: absolute;

  top: 0;
  left: 0;

  
  width: 100%;
  height: 100%;
  
  border-radius: 5px;
  filter: blur(4px);
  
  will-change: transform;

  background: hsl(0deg 0% 0% / 0.25);
  transform: translateY(2px);

  transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
`

export const Edge = styled.span`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  border-radius: 5px;

  background: linear-gradient(
    to left,
    hsl(340deg 100% 16%) 0%,
    hsl(340deg 100% 32%) 8%,
    hsl(340deg 100% 32%) 92%,
    hsl(340deg 100% 16%) 100%
  );
`