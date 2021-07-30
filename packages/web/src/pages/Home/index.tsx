import { Header, Post } from "../../components"
import gif from "../../img/post-1.gif"

import "./styles.scss"

export const Home = () => {
  return (
    <>
      <main className="homeContainer">
        <Header />

          <article>
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
      </main>
    </>
  );
};
