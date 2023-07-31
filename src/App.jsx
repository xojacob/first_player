import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  Navbar,
  Blog,
  MyProjects,
  ComputerScience,
  Music,
  Artwork,
  ProjectDetails,
  // import the component to show project details
} from "./Components";
import "./index.css";
import styles from "./style";

function AnimationApp() {
  const location = useLocation();
  return (
    <div className="bg-primary">
      <div className={`py-5`}>
        <div className={`${styles.boxWidth} w-full`}>
          <Navbar />
        </div>
      </div>
      <div className="">
        <Blog />
        <MyProjects />
        <TransitionGroup className={"slide-container absolute"}>
          <CSSTransition key={location.key} classNames="slide" timeout={500}>
            <Routes location={location}>
              <Route
                path="/myprojects/:projectid"
                element={<ProjectDetails />}
              />
              <Route path="/" element={<ComputerScience />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AnimationApp />
    </Router>
  );
}

export default App;
