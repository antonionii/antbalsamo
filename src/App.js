import React from "react";
//GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import Nav from "./components/Nav";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Work from "./pages/Work";
import MovieDetail from "./pages/MovieDetail";
//Animation
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";

//Router
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="App">
      <ScrollTop />
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </div>
  );
}

export default App;
