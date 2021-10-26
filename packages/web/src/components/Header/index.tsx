import { FC, memo } from "react"
/*  */
import { Button, Link, Logo } from ".."
import { useClamp } from "../../hooks"
import { ActionContainer, Container, LogoContainer, Nav, NavigationContainer, NavItem } from "./styles"

type HeaderProps = {
  headerRef: any
  // ref: ((instance: HTMLElement | null) => void) | RefObject<HTMLElement> | null | undefined
}

const Header: FC<HeaderProps> = ({ headerRef }) => {
  const headerPaddingBlock = useClamp("0.75rem", "1.25rem")
  
  return (
    <Container ref={headerRef} paddingBlockClamp={headerPaddingBlock}>
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
          <Button D={true} href="#login" name="Login" variant="primary">Login</Button>
          <Button href="#signup" name="Sign Up" variant="primary">Sign Up</Button>
        </ActionContainer>
      </NavigationContainer>
    </Container>
  )
}

export default memo(Header)