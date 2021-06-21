import React from "react";
//GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import Nav from "./components/Nav";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Work from "./pages/Work";
import MovieDetail from "./pages/MovieDetail";

//Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutMe />
        </Route>
        <Route path="/ContactMe">
          <ContactMe />
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
        <Route path="/Work" exact>
          <Work />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
