import { theme } from "./default"

export const light: typeof theme = {
  ...theme,

  title: "light",

  fonts: {
    ...theme.fonts,
  },

  sizes: {
    ...theme.sizes,
  },

  colors: {
    accent: {
      100: "#FD6868",
      200: "#FD4D4D",
      300: ""
    },

    gray: {
      50: "#fafafa",
      100: "#DEE3EA",
      200: "#B2BDCD",
      300: "#5D7290",
      400: "#4F617A",
      500: "#404F64",
      600: "#323D4D",
      700: "#242C37",
      800: "#151A21",
      900: "#161719",
    }
  }
}