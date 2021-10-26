import { FC, memo } from "react"
import { useMediaQuery } from "react-responsive"
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
  const navHorizontalPadding = useClamp("0.1rem", "2rem")
  const logoSize = useClamp("1rem", "4rem")
  const logoTextSize = useClamp("0.4rem", "1.6rem")
  const navFontSize = useClamp("0.5rem", "1rem")

  const isTablet = useMediaQuery({ maxWidth: "768px" })

  return (
    <Container ref={headerRef} paddingBlockClamp={headerPaddingBlock}>
      <NavigationContainer>
        <LogoContainer>
          <Logo size={logoSize} logoTitleFontSize={logoTextSize} variant={isTablet ? "img" : "full"} />
        </LogoContainer>

        <Nav fontSize={navFontSize} marginHorizontalClamp={navHorizontalPadding}>
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

export default memo(Header)