import styled from "styled-components"

type ContainerProps = {
  paddingBlockClamp: string
}

export const Container = styled.header<ContainerProps>`
  width: 100%;

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

`