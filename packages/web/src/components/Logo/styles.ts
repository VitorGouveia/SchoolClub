import styled, { css, keyframes } from "styled-components"

const textFocusAnimation = keyframes`
  from {
    background-size: 100% 2px;
  }
  
  to {
    background-size: 100% 100%;
  }
`

type LogoContainerProps = {
  direction?: "row" | "column"
}

export const LogoContainer = styled.div<LogoContainerProps>`
  display: flex;

  align-items: center;
  justify-content: center;
  
  flex-direction: ${props => props.direction};

  [data-link="icon"] {
    &:hover, &:focus {
      #background {
        fill: ${props => props.theme.colors.gray[700]};
      }

      #logo {
        fill: ${props => props.theme.colors.accent[100]};
      }
    }
  }

  [data-link="title"] {
    ${props => css`
      background-image: linear-gradient(to right, ${props.theme.colors.accent[200]}, ${props.theme.colors.accent[100]});
    `}
    background-size: 0% 2px;
    background-repeat: no-repeat;
    background-position: left bottom;

    transition: background 200ms;

    &:hover {
      cursor: pointer;
      
      background-size: 100% 2px;
    }

    &:focus {
      animation: ${textFocusAnimation} forwards 200ms;
    }
  }
`

type SvgProps = {
  marginLeftClamp: string
}

export const SvgLogo = styled.svg<SvgProps>`
  cursor: pointer;
  margin-right: ${props => props.marginLeftClamp};

  path {
    transition: all 200ms;  
  }
`

type LogoTitleProps = {
  fontSizeClamp: string
}

export const LogoTitle = styled.h1<LogoTitleProps>`
  font-size: ${props => props.fontSizeClamp};
  font-family: ${props => props.theme.fonts.DM};
  font-weight: 400;

  height: min-content;
  
  strong {
    font-weight: 700
  }
`