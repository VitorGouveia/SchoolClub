import { FC, ReactNode } from "react"
import { register } from "./serviceWorkerRegistration"

type PWAProps = {
  children: ReactNode
}

export const PWA: FC<PWAProps> = ({ children }) => {
  register()

  return (
    <>
    {children}
    </>
  )
}