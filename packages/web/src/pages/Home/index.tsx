import { useContext } from "react"

import { ThemeContext } from "../../contexts/ThemeContext"
import { Header } from "../../components/Header"

import "./styles.scss"

export const Home = () => {
  const { cycleTheme } = useContext(ThemeContext)
  return (
    <>
      <main className="homeContainer">
          <Header />

          <section>
            <h1>Change the theme!</h1>
            <button onClick={() => cycleTheme()}>Change theme</button>
          </section>
      </main>
    </>
  );
};
