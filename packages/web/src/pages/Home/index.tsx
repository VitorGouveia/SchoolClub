import { Header, Post, Sidebar } from "../../components"

import posts from "./posts.json"

import "./styles.scss"

export const Home = () => {
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

  return (
    <>
      <main className="homeContainer">
        <nav>
          <Header />
        </nav>

        <article>
          {posts.map(post => {
            return <Post key={post.id} title={post.title} tags={post.tags} image={`/fobos/static/media/${post.image}`} />
          })}
        </article>

        <Sidebar user={user} ad={ad} />
      </main>
    </>
  );
};
