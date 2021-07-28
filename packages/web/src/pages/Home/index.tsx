import { useContext } from "react"

import { ThemeContext } from "../../contexts/ThemeContext"

export const Home = () => {
  const { createTheme, cycleTheme, setTheme } = useContext(ThemeContext)
  return (
    <>
      <button onClick={() => cycleTheme()}>
        troca o tema ai
      </button>
    </>
  );
};
