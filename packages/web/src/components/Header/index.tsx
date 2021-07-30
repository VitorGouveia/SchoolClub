import { useContext } from "react"
import { Link } from "react-router-dom"

import { ThemeContext } from "../../contexts/ThemeContext"

import bg from "../../img/parallax-bg.jpg"

import "./styles.scss"

export const Header = () => {
  const pages = ["início", "artigos", "recursos", "vídeos", "plataforma", "ENEM", "sobre"]
  const { cycleTheme } = useContext(ThemeContext)

  return (
    <header>
      <img src={bg} alt="nothing." />

      <section className="parallax">
        <h1>Blog de Química</h1>

          <nav>
            <ul>
              {pages.map(page => {
                const currentPage = window.location.href.split("/")
                const isCurrentPage = currentPage[4] === page

                if(isCurrentPage) {
                  return (
                    <li tab-index="-1" key={page}>
                      <Link tab-index="-1" data-active="true" to={`/${page}`}>{page}</Link>
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
            </ul>

            <button onClick={() => cycleTheme()}>☀️</button>
          </nav>
      </section>
    </header>
  )
}