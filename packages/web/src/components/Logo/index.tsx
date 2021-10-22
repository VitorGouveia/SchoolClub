import { FC, useEffect, useMemo, useState } from "react"
import { Link } from "../../components"
/*  */
import { useClamp, useTheme } from "../../hooks"
/*  */
import { LogoContainer, LogoTitle, SvgLogo } from "./styles"

type LogoProps = {
  /**
   * tell wether you want the full logo, only the img or the text
   */
  variant?: "text" | "img" | "full"
  /**
   * please supply a size in pixel with number or use the `useClamp()` hook to create a resizable size
   */
  size?: number | string 
}

export const Logo: FC<LogoProps> = ({ variant = "full", size = 64 }) => {
  const { currentTheme } = useTheme()

  const logoMarginLeft = useClamp("0.1rem", "2rem")
  const logoTitleFontSize = useClamp("0.8rem", "1.25rem")

  const LogoImg = useMemo(() => (
    <Link data-link="icon" tabIndex={1} href="/" name="homepage">
      <SvgLogo marginLeftClamp={logoMarginLeft} width={size} height={size} viewBox={`0 0 66 64`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_536:2834)">
          <path
            id="background"
            d="M54.0693 0H12.0693C5.9942 0 1.06934 4.92487 1.06934 11V53C1.06934 59.0751 5.9942 64 12.0693 64H54.0693C60.1445 64 65.0693 59.0751 65.0693 53V11C65.0693 4.92487 60.1445 0 54.0693 0Z"
            fill={currentTheme.colors.gray[900]}
          />
          <path
            id="logo"
            d="M52.3926 21.7143V23C52.3926 23.1705 52.3241 23.334 52.2021 23.4546C52.08 23.5751 51.9145 23.6429 51.742 23.6429H49.7902V24.6072C49.7902 25.1397 49.3532 25.5714 48.8143 25.5714H16.9348C16.3958 25.5714 15.9589 25.1397 15.9589 24.6072V23.6429H14.007C13.8345 23.6429 13.6691 23.5751 13.547 23.4546C13.425 23.334 13.3564 23.1705 13.3564 23V21.7143C13.3564 21.5871 13.3946 21.4628 13.4662 21.3571C13.5376 21.2513 13.6393 21.1689 13.7583 21.1203L32.6258 14.0489C32.7851 13.9837 32.964 13.9837 33.1233 14.0489L51.9907 21.1203C52.1097 21.1689 52.2114 21.2513 52.2829 21.3571C52.3544 21.4628 52.3926 21.5871 52.3926 21.7143ZM50.4408 46.1429H15.3083C14.2303 46.1429 13.3564 47.0063 13.3564 48.0714V49.3571C13.3564 49.5276 13.425 49.6912 13.547 49.8117C13.6691 49.9323 13.8345 50 14.007 50H51.742C51.9145 50 52.08 49.9323 52.2021 49.8117C52.3241 49.6912 52.3926 49.5276 52.3926 49.3571V48.0714C52.3926 47.0063 51.5187 46.1429 50.4408 46.1429ZM19.8625 26.8572V42.2857H16.9348C16.3958 42.2857 15.9589 42.7175 15.9589 43.25V44.8571H49.7902V43.25C49.7902 42.7175 49.3532 42.2857 48.8143 42.2857H45.8866V26.8572H40.6818V42.2857H35.4769V26.8572H30.2721V42.2857H25.0673V26.8572H19.8625Z"
            fill={currentTheme.colors.accent[200]}
          />
        </g>
      </SvgLogo>
    </Link>
  ), [currentTheme.colors.accent, currentTheme.colors.gray, logoMarginLeft, size])

  const LogoName = useMemo(() => (
    <Link data-link="title" tabIndex={2} href="/" name="homepage">
      <LogoTitle fontSizeClamp={logoTitleFontSize}>
        School<strong>Club</strong>
      </LogoTitle>
    </Link>
  ), [logoTitleFontSize])

  const [component, setComponent] = useState<JSX.Element>(
    <LogoContainer>
      {LogoImg}
      {LogoName}
    </LogoContainer>
  )

  useEffect(() => {
    switch (variant) {
      case "full":
        setComponent(
          <LogoContainer>
            {LogoImg}
            {LogoName}
          </LogoContainer>
        )
        break
        
        case "img":
          setComponent(LogoImg)
        break
  
        case "text":
          setComponent(LogoName)
          break
          
        default:
          setComponent(
            <LogoContainer>
              {LogoImg}
              {LogoName}
            </LogoContainer>
          )
          break
    }
  }, [LogoImg, LogoName, variant])

  return (
    <>
      {component}
    </>
  )
}