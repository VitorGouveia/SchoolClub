import styled, { css, keyframes } from "styled-components"

type LogoContainerProps = {
  direction?: "row" | "column"
}

export const LogoContainer = styled.div<LogoContainerProps>`
  display: flex;

  align-items: center;
  justify-content: center;
  
  flex-direction: ${props => props.direction};
`

type SvgProps = {
  marginLeftClamp: string
}

export const SvgLogo = styled.svg<SvgProps>`
  margin-right: ${props => props.marginLeftClamp};
  background: ${props => props.theme.colors.gray[900]};
  cursor: pointer;

  path {
    transition: all 200ms;  
  }

  &:hover {
    #background {
      fill: ${props => props.theme.colors.gray[700]};
    }

    #logo {
      fill: ${props => props.theme.colors.accent[100]};
    }
  }
`

type LogoTitleProps = {
  fontSizeClamp: string
}

const textFocusAnimation = keyframes`
  from {
    background-size: 100% 2px;
  }
  
  to {
    background-size: 100% 100%;
  }
`

export const LogoTitle = styled.h1<LogoTitleProps>`
  font-size: ${props => props.fontSizeClamp};
  font-family: ${props => props.theme.fonts.DM};
  font-weight: 400;

  height: min-content;

  ${props => css`
    background-image: linear-gradient(to right, ${props.theme.colors.accent[200]}, ${props.theme.colors.accent[100]});
  `}
  background-size: 0% 2px;
  background-repeat: no-repeat;
  background-position: left bottom;

  transition: background 200ms;
  
  strong {
    font-weight: 700
  }
  
  &:hover {
    cursor: pointer;
    
    background-size: 100% 2px;
  }

  &:focus {
    animation: ${textFocusAnimation} forwards 200ms;
  }
`