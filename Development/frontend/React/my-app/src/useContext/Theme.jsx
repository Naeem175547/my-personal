
import { useState } from "react";
import ThemeContext from "./Theme-example/ThemeContext";
import Toolbar from "./Theme-example/Toolbar";

function Theme() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Toolbar/>
      </ThemeContext.Provider>
    </>
  )
}

export default Theme;