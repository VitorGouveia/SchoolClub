import { createContext, FC, ReactNode } from "react"
import { DefaultTheme, ThemeProvider } from "styled-components"
/*  */
import { usePersistedState } from "../hooks/usePersistedState"
import GlobalStyle from "../styles/global"
import { dark, light } from "../styles/themes"



const availableThemes = {
  light,
  dark
}

type ThemeContextType = {
  currentTheme: DefaultTheme
  themes: keyof typeof availableThemes
  toggleTheme: (theme: DefaultTheme) => void
  getThemes: () => typeof availableThemes
}

export const ThemeContext = createContext({} as ThemeContextType)

type ThemeProviderProps = {
  children: ReactNode
}

export const Theme: FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = usePersistedState<DefaultTheme>("theme", () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches === true ? dark : light
  })
  const themes: keyof typeof availableThemes = "light" || "dark"

  const getThemes = () => availableThemes

  const toggleTheme = (theme: DefaultTheme) => {
    setCurrentTheme(theme.title === "light" ? dark : light)
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, themes, toggleTheme, getThemes }}>
      <ThemeProvider theme={currentTheme}>
        {children}

        <GlobalStyle />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
} 