import { FC } from "react"
/*  */
import { Button, Link, Logo } from ".."
import { useClamp } from "../../hooks"
import { ActionContainer, Container, LogoContainer, Nav, NavigationContainer, NavItem } from "./styles"

export const Header: FC = () => {
  const headerPaddingBlock = useClamp("0.75rem", "1.25rem")
  
  return (
    <Container paddingBlockClamp={headerPaddingBlock}>
      <NavigationContainer>
        <LogoContainer>
          <Logo size={64} variant="full" />
        </LogoContainer>

        <Nav>
          <NavItem>
            <Link href="#blog" name="blog">Blog</Link>
          </NavItem>

          <NavItem>
            <Link href="#Social" name="Social">Social</Link>
          </NavItem>

          <NavItem>
            <Link href="#Study" name="Study">Study</Link>
          </NavItem>
        </Nav>

        <ActionContainer>
          <Button href="#login" name="Login" variant="secondary">Login</Button>
          <Button href="#signup" name="Sign Up" variant="primary">Sign Up</Button>
        </ActionContainer>
      </NavigationContainer>
    </Container>
  )
}