import { Header, Post, Sidebar } from "../../components"
import gif from "../../img/post-1.gif"

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
          <Post title="Pressão máxima de vapor e Temperatura de Ebulição" image={gif} tags={["🇧🇷", "vídeo", "experiência"]} />
          <Post
            title="Volatilidade"
            image={gif}
            tags={["🇧🇷", "vídeo", "expriência", "forças intermoleculares"]}
            />
          <Post
            title="Pressão máxima de vapor e Temperatura de Ebulição"
            image={gif}
            tags={["vídeo", "experiência"]}
            />
          <Post
            title="Pressão máxima de vapor e Temperatura de Ebulição"
            image={gif}
            tags={["vídeo", "experiência"]}
            />
          <Post
            title="Pressão máxima de vapor e Temperatura de Ebulição"
            image={gif}
            tags={["vídeo", "experiência"]}
            />
          <Post
            title="Pressão máxima de vapor e Temperatura de Ebulição"
            image={gif}
            tags={["vídeo", "experiência"]}
            />
        </article>

        <Sidebar user={user} ad={ad} />
      </main>
    </>
  );
};
