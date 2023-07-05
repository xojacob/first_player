import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  let { projectId } = useParams();

  // now you can use projectId to fetch or select data related to the project

  return <div>Project Details for Project ID: {projectId}</div>;
};

export default ProjectDetails;
