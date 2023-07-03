import React, { useState } from "react";
/* React Router v6 uses Routes instead of Switches */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Blog,
  MyProjects,
  ComputerScience,
  Music,
  Artwork,
} from "./Components";
import styles from "./style";
import { animated, useTransition } from "react-spring";
import { useLocation } from "react-router-dom";

const AnimatedRoutes = () => {
  let location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} style={props}>
      <Routes location={location}>
        <Route path="/computerscience" component={ComputerScience} />
        <Route path="/music" component={Music} />
        <Route path="/artwork" component={Artwork} />
      </Routes>
    </animated.div>
  ));
};
function App() {
  return (
    <div>
      <AnimatedRoutes />
    </div>
  );
}

export default App;
