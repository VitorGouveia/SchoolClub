import { Header, Post, Sidebar } from "../../components"

import posts from "./posts.json"

import "./styles.scss"

const user = {
  name: "Vitor Gouveia",
  profile: "@vitorgouveia",
  description: "Dev Sênior, Químico",
  page: {
    link: "vitor",
    text: "See my articles!"
  }
}

const ad = {
  description: "The Ultimate Software Engineering Interview Prep",
  phrase: "AlgoExpert | Ace the Coding Interviews",
  page: {
    link: "algo-expert",
    text: "algoexpert.io"
  }
}

type Tag = {
  id: number
  name: string
}

type Post = {
  id: number
  title: string
  tags: Tag[]
  image: string
}

export const Loading = () => {
  return (
    <div className="loading">
      <main className="homeContainer">
        <nav>
          <Header />
        </nav>

        <article>
          {posts.map(post => <Post key={post.id} title={post.title} tags={post.tags} image={post.image} />)}
        </article>

        <Sidebar user={user} ad={ad} />
      </main>
    </div>
  )
}