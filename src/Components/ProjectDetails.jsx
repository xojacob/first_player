import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ComputerScience from "./ComputerScience";
import Music from "./Music";
import Artwork from "./Artwork";

const Project = ({ setHeight }) => {
  const ref = useRef();
  const { projectid = "computerscience" } = useParams();

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, [projectid, setHeight]);
  switch (projectid) {
    case "computerscience":
      return (
        <div ref={ref}>
          <ComputerScience />
        </div>
      );
    case "music":
      return (
        <div ref={ref}>
          <Music className="absolute" />
        </div>
      );
    case "artwork":
      return (
        <div ref={ref}>
          <Artwork className="absolute" />
        </div>
      );
    default:
      return (
        <div ref={ref}>
          <ComputerScience />
        </div>
      );
  }
};

const ProjectDetails = ({ setHeight }) => {
  return (
    <div className="absolute">
      <Project setHeight={setHeight} />
    </div>
  );
};
export default ProjectDetails;
