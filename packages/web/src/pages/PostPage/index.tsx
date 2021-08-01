import { useParams } from "react-router-dom"
import { Header } from "../../components"

type ParamProps = {
  name: string
}

export const PostPage = () => {
  const { name }: ParamProps = useParams()
  return (
    <>
      <main className="homeContainer">
        <nav>
          <Header />
        </nav>

        <article>
          <h1>{name.split("-").join(" ")}</h1>
        </article>
      </main>
    </>
  )
}