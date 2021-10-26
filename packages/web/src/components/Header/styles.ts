import styled, { css } from "styled-components"

type ContainerProps = {
  paddingBlockClamp: string
}

export const Container = styled.header<ContainerProps>`
  width: 100%;

  position: fixed;

  display: grid;
  
  place-items: center;

  background: ${props => props.theme.colors.gray[800]};
  padding: ${props => props.paddingBlockClamp} 0;

  border-bottom: 1px solid ${props => props.theme.colors.gray[700]};
`

export const NavigationContainer = styled.nav`
  width: 90%;

  display: grid;

  grid-template-areas: "logo links buttons";
  grid-template-columns: 1fr 2.8fr 1fr;
`

export const LogoContainer = styled.div`
  grid-area: logo;

  display: flex;
  align-items: center;
  justify-content: center;
`

type NavProps = {
  fontSize: string
  marginHorizontalClamp: string
}

export const Nav = styled.ul<NavProps>`
  grid-area: links;

  display: flex;

  align-items: center;
  justify-content: center;

  li {
    a {
      font-size: ${props => props.fontSize}
    }

    &:nth-child(even) {
      margin: 0 ${props => props.marginHorizontalClamp};
    }
  }
`

export const NavItem = styled.li`
  a {
    font-weight: 500;
    position: relative;

    ${({ theme: { colors: { accent } } }) => css`
      background-image: linear-gradient(to right, ${accent[200]}, ${accent[100]});
    `}
    background-size: 0% 100%;
    background-repeat: no-repeat;
    background-position: left bottom;

    padding: 0.2rem;
    border-radius: 5px;

    transition: all 320ms cubic-bezier(0.215, 0.610, 0.355, 1);

    &:hover, &:focus {
      background-size: 100% 100%;
    }
  }
`

export const ActionContainer = styled.section`
  grid-area: buttons;

  display: flex;

  align-items: center;
  justify-content: space-between;
`