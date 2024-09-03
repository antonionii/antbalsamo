import React, { useEffect, useState } from "react";
//GlobalStyle
import GlobalStyle from "./styles/GlobalStyle";
//Import Pages
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";


//Animation
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
//Router
import { Route, Switch, useLocation } from "react-router-dom";
import { changeColor } from "./components/theme/changeColor";
import Footer from "./components/Footer";
//Google analytics
import ReactGA from "react-ga";



function App() {
  useEffect(() => {
    ReactGA.initialize("UA-206389421-1");

    //To report page view
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const location = useLocation();
  console.log(location);

  const [colorSchemeType, setColorSchemeType] = useState("light");

  const doRippleEffect = (evt) => {
    const ripple = document.createElement("div");

    ripple.className = "ripple";

    document.body.appendChild(ripple);

    ripple.style.cssText = `
      left: ${evt.clientX}px;
      top: ${evt.clientY}px;
      animation: .5s ease-in-out ripple-effect;
      z-index: 20;
    `;
    ripple.onanimationend = () => document.body.removeChild(ripple);
  };

  const handleBgClick = (evt) => {
    const isNavLink = evt.target.closest('a')
    const isButton = evt.target.closest('button')

    if(!isNavLink && !isButton) {
    setColorSchemeType("light");
    changeColor("light");
    doRippleEffect(evt);
    setTimeout(() => {
      doRippleEffect(evt);
    }, 240);
  };
  };

  useEffect(() => {
    if (colorSchemeType === "light") {
      // change color will pick a new light color
      changeColor("light");
    } else {
      changeColor("dark");
    }
  }, [colorSchemeType]);

  return (
    <div className="App" onClick={(evt) => handleBgClick(evt)}>
      <ScrollToTop>
        <GlobalStyle />
        <Nav
          colorSchemeType={colorSchemeType}
          setColorSchemeType={setColorSchemeType}
        />

        <div style={{ marginTop: "9vh" }}>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/Projects" exact>
                <Projects />
              </Route>
              <Route path="/Resume">
                <Resume />
              </Route>
              <Route path="/Contact">
                <Contact />
              </Route>
            </Switch>
          </AnimatePresence>
        </div>

        <Footer />
      </ScrollToTop>
    </div>
  );
}

export default App;
