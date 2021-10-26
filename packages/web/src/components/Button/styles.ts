import { lighten } from "polished"
import styled, { css, keyframes } from "styled-components"

type ButtonContainerProps = {
  paddingBlockClamp: string
  paddingHorizontalClamp: string
  outlined: boolean
  backgroundColor: string
  fontSizeClamp: string
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

const outlinedButton = (paddingBlock: string, paddingHorizontal: string, backgroundColor: string, gray50: string, gray700: string, disabled: boolean, D: boolean, active: boolean) => {
  const fullButton = css`
    color: ${gray50};
    background-size: 100% 100%;
  `

  return css`
    /* reduce border width from padding */
    padding: calc(${paddingBlock} - 2px) calc(${paddingHorizontal} - 3px);

    border: 2px solid ${backgroundColor};

    background-image: linear-gradient(to right, ${backgroundColor}, ${backgroundColor});
    background-size: 100% 0%;
    background-repeat: no-repeat;
    background-position: right;

    color: ${gray700};

    transition: all 200ms;

    ${disabled === false && css`
      &:hover, &:focus {
        color: ${gray50};
        background-size: 100% 100%;
      }
    `}

    ${active && css`
      ${fullButton}
    `}
  `
}

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
    font-size: ${props => props.fontSizeClamp};
    color: ${props => props.theme.colors.gray[50]};

    border-radius: 5px;

    span {
      white-space: nowrap;
    }
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

      display: block;
      
      ${props.outlined
        ? css`
          ${outlinedButton(
            props.paddingBlockClamp,
            props.paddingHorizontalClamp,
            props.backgroundColor,
            props.theme.colors.gray[50],
            props.theme.colors.gray[700],
            props.disabled || false,
            props.D,
            props.active
          )}

          /* text-shadow: -1px -1px 0 rgb(26 26 26 / 50%); */
        `
        
        : css`
          border: 0 !important;
          box-shadow: none !important;

          background: hsl(345deg 100% 47%);
        `
      }

      /* add this so the PC will use hardware acceleration */
      /* will-change: transform; */
      transform: translateY(-5px);

      transition: transform 600ms cubic-bezier(.3, .7, .4, 1);
    }

    &:hover {
      transition: filter 250ms;
      filter: brightness(110%);

      /* remove IOS tap hightlight */
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      
      a {
        color: ${props => props.theme.colors.gray[50]};
        background-size: 100% 100%;

        transform: translateY(-7px);
        transition:
          transform
          250ms
          cubic-bezier(.3, .7, .4, 1.5), background 200ms;
      }

      .shadow {
        transform: translateY(4px);
      }
    }

    &:active, &focus {
      a {
        transform: translateY(-1px);
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
        ${outlinedButton(
          props.paddingBlockClamp,
          props.paddingHorizontalClamp,
          props.backgroundColor,
          props.theme.colors.gray[50],
          props.theme.colors.gray[700],
          props.disabled || false,
          props.D,
          props.active
        )}
      }
    `
    
    : css`
      a {
        border: none;
        background: ${props.backgroundColor} !important;

        ${props.disabled === false && props.D === false && css`
          &:hover, &:focus {
            background: ${lighten(0.1, props.backgroundColor)} !important;
          }
        `}
          
        ${props.active && props.D === false && css`
          background: ${lighten(0.2, props.backgroundColor)} !important;
        `}
      }
    `
  }

  ${props => props.loading === true && css`
    a {
      span {
        visibility: hidden;
        opacity: 0;
      }

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
  filter: blur(2px);
  
  /* will-change: transform; */

  background: rgba(0, 0, 0, 0.8);
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