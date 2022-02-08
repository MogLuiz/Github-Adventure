// Packages
import React, { useState, useMemo } from "react";

// Components
import { CounterComponent, FabButtonComponent, NavbarComponent } from "./Components"

// Services
import { likesCounter } from "./Services/expensiveCalculation";

function App() {
  // -------------------------------------------------
  // State
  // -------------------------------------------------
  const [totalLikes, setTotalLikes] = useState(0);
  const [dark, setDark] = useState(false);

  // -------------------------------------------------
  // Constants
  // -------------------------------------------------
  const likes = useMemo(() => likesCounter(totalLikes), [totalLikes])

  const theme = {
    color: dark ? "#fff" : "#333",
    navbar: dark ? "#1a202c" : "#e5e7eb",
    backgroundColor: dark ? "#333" : "#fff",
  };

  const toogleDarkmode = () => setDark(!dark);
  // -------------------------------------------------
  // Return
  // -------------------------------------------------
  return (
    <div style={theme} className="App">
      <NavbarComponent theme={theme.navbar} toogleDarkmode={toogleDarkmode} />
      <CounterComponent likes={likes} />
      <FabButtonComponent totalLikes={totalLikes} setTotalLikes={setTotalLikes} />
    </div>
  );
}

export default App;
