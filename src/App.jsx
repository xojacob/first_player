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

function App() {
  const [count, setCount] = useState(0);

  return (
    // Wrap whole div in Router tag
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
