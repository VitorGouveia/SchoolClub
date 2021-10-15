import { FC } from "react"
import { HashRouter, Switch } from "react-router-dom"

export const Router: FC = ({ children }) => {
  return (
    <HashRouter>
      <Switch>
        {children}
      </Switch>
    </HashRouter>
  )
}