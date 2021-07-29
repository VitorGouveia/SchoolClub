import { Link } from "react-router-dom"

import { Parallax } from "react-parallax"
import bg from "../../img/parallax-bg.jpg"

import "./styles.scss"

const pages = ["início", "artigos", "recursos", "vídeos", "plataforma", "sobre"]

export const Header = () => {
  return (
    <header>
      <Parallax blur={1.4} bgImage={bg} bgImageAlt="nothing." strength={200}>
        <h1>Blog de Química</h1>

        <nav>
          <ul>
            {pages.map(page => {
              const currentPage = window.location.href.split("/")
              const isCurrentPage = currentPage[4] === page

              if(isCurrentPage) {
                return (
                  <li key={page}>
                    <Link data-active="true" to={`/${page}`}>{page}</Link>
                  </li>
                )
              }
              
              if(isCurrentPage === false && page === pages[0]) {
                return (
                  <li key={page}>
                    <Link data-active="true" to={`/${page}`}>{page}</Link>
                  </li>
                )
              } 

              return (
                <li key={page}>
                  <Link to={`/${page}`}>{page}</Link>
                </li>
              )
            })}
            {/* <li><Link to="/" data-active="true">Início</Link></li>
            <li><Link to="/articles">Artigos</Link></li>
            <li><Link to="/articles">Recursos</Link></li>
            <li><Link to="/articles">Vídeos</Link></li>
            <li><Link to="/articles">Plataforma</Link></li>
            <li><Link to="/articles" data-info="enem">ENEM</Link></li>
            <li><Link to="/about">Sobre</Link></li> */}
          </ul>
        </nav>
      </Parallax>
    </header>
  )
}