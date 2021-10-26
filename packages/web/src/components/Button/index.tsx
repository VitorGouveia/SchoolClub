import { FC, memo, ReactNode, useEffect, useRef, useState } from "react"
/*  */
import { Link } from ".."
import { useClamp, useTheme } from "../../hooks"
import { ButtonContainer, Edge, Shadow } from "./styles"

type ButtonProps = {
  children: ReactNode
  variant?: "primary" | "secondary" | "tertiary" | "outlined" | "fast" | "expensive"
  href: string
  name: string
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  loading?: boolean
  D?: boolean
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  href,
  name,
  type = "button",
  D = false,
  loading = false,
  disabled = false
}) => {
  const ButtonRef = useRef<HTMLButtonElement | null>(null)
  
  const { currentTheme } = useTheme()
  const [background, setBackground] = useState(currentTheme.colors.accent[200])
  const [isLoading, setIsLoading] = useState(loading)
  const [isActive, setIsActive] = useState(false)
  const [outlined, setOutlined] = useState(false)
  
  const fontSize = useClamp("0.5rem", "1rem")
  
  useEffect(() => {
    setOutlined(variant === "outlined" || variant === "secondary")
  }, [variant])
  
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

  useEffect(() => {
    ButtonRef.current?.addEventListener("click", () => {
      setIsLoading(!isLoading)
    })
  }, [])

  const handleFocus = () => {
    setIsActive(true)
  }
  
  const handleBlur = () => {
    setIsActive(false)
    setIsLoading(false)
  }
  
  return (
    <ButtonContainer
      onFocus={handleFocus}
      onBlur={handleBlur}
      D={D}
      tabIndex={-1}
      ref={ButtonRef}
      type={type}
      active={isActive}
      loading={isLoading}
      disabled={disabled}
      outlined={outlined}
      fontSizeClamp={fontSize}
      backgroundColor={background}
      paddingBlockClamp={useClamp("0.2rem", "0.8rem")}
      paddingHorizontalClamp={useClamp("0.4rem", "1.875rem")}
    >
      {D === true && (
        <>
          <Shadow className="shadow" />
          <Edge className="edge" />
        </>
      )}

      <Link href={href} name={name}>
        <span>
          {children}
        </span>
      </Link>
    </ButtonContainer>
  )
}

export default memo(Button)