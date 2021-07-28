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


  /** Set initial app theme */
  useEffect(() => setTheme(localStorage.getItem("theme") || defaultTheme), [])

  function createTheme(theme: keyof typeof availableThemes) {
    let newTheme = theme

    if(!availableThemes[theme]) {
      newTheme = defaultTheme
    }

    setTheme(newTheme)
  }

  /** Just set theme in localStorage and body */
  function setTheme(theme: keyof typeof availableThemes | string) {
    /** Checking localStorage for theme */
    setCurrentTheme(theme)

    localStorage.setItem("theme", theme)
    document.body.setAttribute("data-theme", theme)
  }

  /** This will cycle through all themes */
  function cycleTheme() {
    const themeArray: [keyof typeof availableThemes] | any[] = Object.keys(availableThemes)

    const currentIndex = themeArray.indexOf(currentTheme)
    const max = themeArray.length
    let next  = currentIndex + 1

    /** If next item reaches the max of the array, set it to the first array item */
    if(next === max) next = 0

    setTheme(themeArray[next])
  }

  window.addEventListener("storage", (event) => {
    setTheme(event.newValue || defaultTheme)
  })

  return (
    <ThemeContext.Provider value={{ createTheme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
} 