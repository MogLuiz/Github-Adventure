// Packages
import React, { useState, useMemo, useEffect, useCallback } from "react";

// Components
import { CounterComponent, FabButtonComponent, NavbarComponent, ReposComponent } from "./Components"

// Services
import { likesCounter } from "./Services/expensiveCalculation";

const URL = "https://api.github.com/search/repositories"

function App() {
  // -------------------------------------------------
  // State
  // -------------------------------------------------
  const [totalLikes, setTotalLikes] = useState(0);
  const [dark, setDark] = useState(false);

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------
  const getGithubRepositorie = useCallback(() => fetch(`${URL}?q=Github-Adventure`), [])

  const likes = useMemo(() => likesCounter(totalLikes), [totalLikes])

  const theme = useMemo(() => ({
    color: dark ? "#fff" : "#333",
    navbar: dark ? "#1a202c" : "#e5e7eb",
    backgroundColor: dark ? "#333" : "#fff",
  }),[dark])

  useEffect(() => console.log("Dark Theme Change"), [theme])

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------
  const toogleDarkmode = () => setDark(!dark);
  // -------------------------------------------------
  // Return
  // -------------------------------------------------
  return (
    <div style={theme} className="App">
      <NavbarComponent theme={theme.navbar} toogleDarkmode={toogleDarkmode} />
      <CounterComponent likes={likes} />
      <ReposComponent getGithubRepositorie={getGithubRepositorie} />
      <FabButtonComponent totalLikes={totalLikes} setTotalLikes={setTotalLikes} />
    </div>
  );
}

export default App;
