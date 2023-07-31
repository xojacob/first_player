import React from "react";
import { useParams } from "react-router-dom";
import ComputerScience from "./ComputerScience";
import Music from "./Music";
import Artwork from "./Artwork";

const ProjectDetails = () => {
  const { projectid = "computerscience" } = useParams();
  switch (projectid) {
    case "computerscience":
      return <ComputerScience />;
    case "music":
      return <Music />;
    case "artwork":
      return <Artwork />;
    default:
      return <ComputerScience />;
  }
};

export default ProjectDetails;
