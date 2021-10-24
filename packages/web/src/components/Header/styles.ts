import styled, { css } from "styled-components"

type ContainerProps = {
  paddingBlockClamp: string
}

export const Container = styled.header<ContainerProps>`
  width: 100%;

  position: fixed;

  display: grid;
  
  place-items: center;

  background: ${props => props.theme.colors.gray[900]};
  padding: ${props => props.paddingBlockClamp} 0;
`

export const NavigationContainer = styled.nav`
  width: 90%;

  display: grid;

  grid-template-areas: "logo . links . buttons";
  grid-template-columns: 1fr 1fr 0.8fr 1fr 1fr;
`

export const LogoContainer = styled.div`
  grid-area: logo;
`

export const Nav = styled.ul`
  grid-area: links;

  display: flex;

  align-items: center;
  justify-content: space-between;
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