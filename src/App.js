// Packages
import React, { useState } from "react";

// Components
import { HeadCounter } from "./Components/Counter";
import { FabButton } from "./Components/FabButton";
import Navbar from "./Components/Navbar";

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
  const likes = likesCounter(totalLikes);

  const theme = {
    color: dark ? "#fff" : "#333",
    navbar: dark ? "#1a202c" : "#e5e7eb",
    backgroundColor: dark ? "#333" : "#fff",
  };

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------
  const toogleDarkmode = () => setDark(!dark);
  // -------------------------------------------------
  // Return
  // -------------------------------------------------
  return (
    <div style={theme} className="App">
      <Navbar theme={theme.navbar} toogleDarkmode={toogleDarkmode} />
      <HeadCounter likes={likes} />
      <FabButton totalLikes={totalLikes} setTotalLikes={setTotalLikes} />
    </div>
  );
}

export default App;
