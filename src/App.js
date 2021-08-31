import React, { useState, useEffect } from "react";
//GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import Nav from "./components/Nav";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Work from "./pages/Work";
import MovieDetail from "./pages/MovieDetail";
//Animation
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
// import { useHistory } from "react-router-dom";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
import { changeColor } from "./theme/changeColor";
import Footer from "./components/Footer";
//Google analytics
import ReactGA from "react-ga";

// let options = "";
// ReactGA.initialize("UA-206389421-1", [options]);

// const pageViewsTracking = (props) => {
//   const pathname = props.match.path;

//   let pageView;
//   if (pathname === "*") pageView = "/not-found";
//   else pageView = pathname;

//   //Sending GA page views
//   ReactGA.pageview(pageView);
// };
function App() {
  useEffect(() => {
    ReactGA.initialize("UA-206389421-1");

    //To report page view
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const location = useLocation();
  console.log(location);

  // const history = useHistory();

  // const containerRef = useRef(null);

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
    setColorSchemeType("light");
    changeColor("light");
    doRippleEffect(evt);
    setTimeout(() => {
      doRippleEffect(evt);
    }, 240);
  };

  useEffect(() => {
    if (colorSchemeType === "light") {
      // change color will pick a new light color
      changeColor("light");
    }
  }, [location]);

  return (
    <div className="App">
      <ScrollToTop>
        <div
          onClick={(evt) => handleBgClick(evt)}
          style={{ position: "fixed", inset: 0, zIndex: 0 }}
        ></div>
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
              <Route path="/AboutMe">
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

                {/* <LocomotiveScrollProvider
                options={{
                  smooth: true,
                }}
                watch={[]}
                containerRef={containerRef}
              >
                <main data-scroll-container ref={containerRef}>
                  <Work />
                </main>
              </LocomotiveScrollProvider> */}
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
