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
    ...theme.colors,

    accent: {
      100: lighten(0.1, accent),
      200: accent,
      300: darken(0.1, accent)
    },

    gray: {
      50: "hsl(255, 1%, 98%)",
      100: "hsl(255, 6%, 90%)",
      200: "hsl(220, 6%, 80%)",
      300: "hsl(220, 6%, 70%)",
      400: "hsl(220, 6%, 60%)",
      500: "hsl(220, 6%, 50%)",
      600: "hsl(220, 6%, 40%)",
      700: "hsl(220, 6%, 30%)",
      800: "hsl(220, 6%, 12%)",
      900: "hsl(220, 6%, 9%)",
    }
  }
}