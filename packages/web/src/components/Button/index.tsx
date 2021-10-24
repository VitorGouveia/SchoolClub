import { FC, useEffect, useState } from "react"
import { useClamp, useTheme } from "../../hooks"
/*  */
import { Link } from "../Link"
import { ButtonContainer } from "./styles"

type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary" | "outlined"
  href: string
  name: string
}

export const Button: FC<ButtonProps> = ({ children, variant = "primary", href, name }) => {
  const { currentTheme } = useTheme()
  const [background, setBackground] = useState(currentTheme.colors.accent[200])
  const [outlined, setOutlined] = useState(false)
  
  useEffect(() => {
    setOutlined(variant === "outlined" || variant === "secondary")
  }, [variant])
  console.log({outlined})
  useEffect(() => {
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
      
      case "outlined":
        setBackground(currentTheme.colors.gray[700])
        break
      
      default:
        setBackground(currentTheme.colors.accent[200])
        break
    }
  }, [currentTheme.colors.accent, currentTheme.colors.gray, variant])
  
  return (
    <ButtonContainer
      tabIndex={-1}
      outlined={outlined}
      backgroundColor={background}
      paddingBlockClamp={useClamp("0.2rem", "0.8rem")}
      paddingHorizontalClamp={useClamp("1rem", "1.875rem")}
    >
      <Link href={href} name={name}>
        {children}
      </Link>
    </ButtonContainer>
  )
}