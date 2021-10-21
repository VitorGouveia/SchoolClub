import styled from "styled-components"

type LogoContainerProps = {
  direction?: "row" | "column"
}

export const LogoContainer = styled.div<LogoContainerProps>`
  display: flex;
  
  flex-direction: ${props => props.direction};
`

type SvgProps = {
  marginLeftClamp: string
}

export const SvgLogo = styled.svg<SvgProps>`
  margin-right: ${props => props.marginLeftClamp};
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

export const LogoTitle = styled.h1<LogoTitleProps>`
  font-size: ${props => props.fontSizeClamp};
  font-family: ${props => props.theme.fonts.DM};
  font-weight: 400;

  height: min-content;

  strong {
    font-weight: 700
  }
`