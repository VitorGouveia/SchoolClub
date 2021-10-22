import { darken, lighten } from "polished"
import { theme } from "./default"

const accent = "#FD4D4D"

export const dark: typeof theme = {
  ...theme,

  title: "dark",

  fonts: {
    ...theme.fonts,
  },

  sizes: {
    ...theme.sizes,
  },

  colors: {
    accent: {
      100: lighten(0.1, accent),
      200: accent,
      300: darken(0.1, accent)
    },

    gray: {
      50: "#fafafa",
      100: "#DEE3EA",
      200: "#F1F1FA",
      300: "#5D7290",
      400: "#4F617A",
      500: "#404F64",
      600: "#91919F",
      700: "#4A4A4A",
      800: "#212325",
      900: "#161719",
    }
  }
}