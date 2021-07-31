import { Link } from "react-router-dom";
import { Header, Post } from "../../components"
import gif from "../../img/post-1.gif"

import "./styles.scss"

export const Home = () => {
  return (
    <>
      <main className="homeContainer">
        <nav>
          <Header />
        </nav>

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

        <aside>
          <div id="user">
            <header id="profile">
              <div className="profile-img" />

              <p>Vitor Gouveia</p>
              <small>@vitorgouveia</small>
            </header>

            <main>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nunc sit pulvinar ut tellus sit tincidunt faucibus sapien. ⚡️</p>
            </main>

            <footer>
              <Link to="/vitor">
                See my articles!
              </Link>
            </footer>
          </div>
        </aside>
      </main>
    </>
  );
};
