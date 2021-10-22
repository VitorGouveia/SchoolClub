import { FC, useState } from "react"
import { useClamp, useTheme } from "../../hooks"
/*  */
import { Link } from "../Link"
import { ButtonContainer } from "./styles"

type ButtonProps = {
  variant: "primary" | "secondary" | "tertiary" | "outline"
}

export const Button: FC<ButtonProps> = ({ children, variant }) => {
  const { currentTheme } = useTheme()
  const [background, setBackground] = useState(currentTheme.colors.accent[200])

  const outlined = variant === "outline" || variant === "secondary"

  switch (variant) {
    case "primary":
      setBackground(currentTheme.colors.accent[200])
      break
      
      case "secondary":
        setBackground(currentTheme.colors.accent[200])
      break
      
    case "tertiary":
      setBackground(currentTheme.colors.gray[700])
      break
      
    case "outline":
      setBackground(currentTheme.colors.gray[700])
      break
      
    default:
      setBackground(currentTheme.colors.accent[200])
      break
  }

  return (
    <ButtonContainer
      outlined={outlined}
      backgroundColor={background}
      paddingBlockClamp={useClamp("", "")}
      paddingHorizontalClamp={useClamp("", "")}
    >
      <Link href="/" name="dwdwa">
        {children}
      </Link>
    </ButtonContainer>
  )
}