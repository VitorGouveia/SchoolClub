import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"

import { ThemeContext } from "../../contexts/ThemeContext"

import bg from "../../img/parallax-bg.jpg"

import "./styles.scss"

export const Header = () => {
  const { cycleTheme, getTheme } = useContext(ThemeContext)

  const [currentThemeIndex, setCurrentThemeIndex] = useState(0)
  useEffect(() => setCurrentThemeIndex(getTheme().index), [document.body.getAttribute("data-theme")])

  const themes = {
    0: "☀️",
    1: "🌑",
    2: "🎉"
  }

  const max = Object.keys(themes).length
  let next  = currentThemeIndex + 1

  if(next === max) next = 0

  const nextThemeEmoji = themes[next]
  
  const pages = ["início", "artigos", "recursos", "vídeos", "plataforma", "ENEM", "sobre"]
  return (
    <header id="nav">
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
        </nav>
        <button onClick={() => cycleTheme()}>{nextThemeEmoji}</button>
      </section>
    </header>
  )
}