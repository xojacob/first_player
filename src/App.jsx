import React, { useEffect, useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  Contact,
  Navbar,
  Blog,
  MyProjects,
  ComputerScience,
  Music,
  Artwork,
  ProjectDetails,
  Hero,
  // import the component to show project details
} from "./Components";
import "./index.scss";
import styles from "./style";

function AnimationApp() {
  const location = useLocation();
  const [selected, setSelected] = useState(0);
  const [prevSelected, setPrevSelected] = useState(null);
  const direction = useRef("none");
  const [spacerHeight, setSpacerHeight] = useState(0);
  const [heroSpacerHeight, setHeroSpacerHeight] = useState(0);

  const projectOrder = ["artwork", "music", "computerscience"];

  const handleDirection = (selectedid) => {
    if (selectedid !== selected) {
      let newSelected = selectedid;
      if (newSelected < selected) {
        direction.current = "left";
      } else if (newSelected > selected) {
        direction.current = "right";
      }
      setSelected(newSelected);
    }
  };

  return (
    <div className="bg-primary">
      <div className={`py-5`}>
        <Navbar />
      </div>
      <div>
        <div className="relative">
          <Hero setHeight={setHeroSpacerHeight} path="/home" />
        </div>
        <div id="hero" style={{ height: heroSpacerHeight }} />
        <Blog path="/blog" />
        <MyProjects handleClick={handleDirection} selected={selected} />
        <TransitionGroup className={"slide-container flex bg-primary z-[2]"}>
          <CSSTransition
            key={selected}
            classNames={`slide-${direction.current}`}
            timeout={900}
            onEnter={(node) => {
              node.style.zIndex = 3;
            }}
            onExited={(node) => {
              node.style.zIndex = "";
            }}
          >
            <Routes location={location} className="">
              <Route
                path="/:projectid"
                element={<ProjectDetails setHeight={setSpacerHeight} />}
              />
              <Route path="/" element={<Navigate to="/artwork" />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>

        <div
          style={{ height: spacerHeight }}
          className="bg-primary relative z-[1]"
        />
        <Contact />
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
