import { FC } from "react"
import { useClamp } from "../../hooks/useClamp"

export const Home: FC = () => {
  console.log(useClamp("2rem", "32rem"))

  return (
    <div>
      <h1>aaaaa</h1>
    </div>
  )
}