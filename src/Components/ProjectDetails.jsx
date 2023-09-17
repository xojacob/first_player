import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ComputerScience from "./ComputerScience";
import Music from "./Music";
import Artwork from "./Artwork";

const Project = ({ setHeight }) => {
  const ref = useRef();
  const { projectid = "artwork" } = useParams();

  useEffect(() => {
    // Create a ResizeObserver instance and observe changes in the ref's current element
    const resizeObserver = new ResizeObserver(() => {
      setHeight(ref.current.clientHeight);
    });
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      // Unobserve the element and disconnect the observer when the component unmounts
      if (ref.current) {
        resizeObserver.unobserve(ref.current);
      }
      resizeObserver.disconnect();
    };
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
          <Music className="" />
        </div>
      );
    case "artwork":
      return (
        <div ref={ref}>
          <Artwork className="" />
        </div>
      );
    default:
      return (
        <div ref={ref}>
          <Artwork />
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
