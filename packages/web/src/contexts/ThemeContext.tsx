import { FC, createContext, useState, ReactNode, useEffect } from "react"

type ThemeContextType = {
  createTheme: (theme: keyof typeof availableThemes) => void
  setTheme: (theme: keyof typeof availableThemes) => void
  cycleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)

type ThemeProviderProps = {
  children: ReactNode
}

const availableThemes = {
  light: "light",
  dark: "dark",
  rgb: "rgb"
}


export const Theme: FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("")
  const defaultTheme = "dark"

  function createTheme(theme: keyof typeof availableThemes) {
    let newTheme = theme

    if(!availableThemes[theme]) {
      newTheme = defaultTheme
    }

    setCurrentTheme(newTheme)
  }

  function setTheme(theme: keyof typeof availableThemes) {
    /** Checking localStorage for theme */
    setCurrentTheme(theme)

    localStorage.setItem("theme", theme)
    document.body.setAttribute("data-theme", theme)
  }

  function cycleTheme() {
    const themeArray: [keyof typeof availableThemes] | any = Object.keys(availableThemes)

    const currentIndex = themeArray.indexOf(document.body.getAttribute("data-theme")!)
    const max = themeArray.length
    let next  = currentIndex + 1

    if(next === max) next = 0

    setTheme(themeArray[next])
  }

  useEffect(() => {
    setTheme(defaultTheme)
  }, [])
  window.addEventListener("storage", (event) => {
  })

  return (
    <ThemeContext.Provider value={{ createTheme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
} 