import React from "react";
//GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutMe />
    </div>
  );
}

export default App;
