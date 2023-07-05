import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import styles from "./style";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="bg-primary w-screen overflow-hidden">
        <div className={`py-5`}>
          <div className={`${styles.boxWidth} bg-primary`}>
            <Navbar />
          </div>
        </div>
        <div>
          <Blog />
          <MyProjects />
          <Routes>
            <Route
              path="/myprojects/:projectId"
              element={<MyProjects />}
            ></Route>
          </Routes>
          <Routes>
            <Route path="/computerscience" element={<ComputerScience />} />
            <Route path="/music" element={<Music />} />
            <Route path="/artwork" element={<Artwork />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
