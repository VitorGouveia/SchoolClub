import { useMediaQuery } from "react-responsive"

export const useScreenType = () => {
  const isTablet = useMediaQuery({ maxWidth: 768 })
  const isPhone = useMediaQuery({ maxWidth: 475 })

  if(isTablet) {
    return "3-cols"
  }

  if(isPhone) {
    return "2-cols"
  }

  return "fullscreen"
}