import { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from "react"

type FontSizeContextProps = {
  rootFontSize: number
  setRootFontSize: Dispatch<SetStateAction<number>>
}

export const FontSizeContext = createContext({} as FontSizeContextProps)

type FontSizeProviderProps = {
  children: ReactNode
}

export const FontSize: FC<FontSizeProviderProps> = ({ children }) => {
  const [rootFontSize, setRootFontSize] = useState(() => {
    return Number(getComputedStyle(document.querySelector('html') as Element).fontSize.slice(0, -2) || 16);
  })

  return (
    <FontSizeContext.Provider value={{ rootFontSize, setRootFontSize }}>
      {children}
    </FontSizeContext.Provider>
  )
}