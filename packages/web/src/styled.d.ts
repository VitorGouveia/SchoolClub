import "styled-components"

import { dark } from "./styles/themes/dark"

type theme = typeof dark

declare module "styled-components" {
  export interface DefaultTheme extends theme {}
}