import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../constants";
import styles, { layout } from "../style";

const MyProjects = ({ handleClick }) => {
  const defaultProjectId = projects[0].id;
  const [selectedProject, setSelectedProject] = useState(defaultProjectId);
  const handleProjectClick = (id) => {
    handleClick(id);
    setSelectedProject(id);
  };
  return (
    <section
      id="myprojects"
      className="items-center sm:max-w-[1400px]   mx-auto"
    >
      <div className="flex-col flex bg-primary z-10">
        <div
          className={`font-cormorant text-tp text-lg pb-16 sm:text-xl sm:px-10 z-10 bg-primary pt-20`}
        >
          <h1>My Projects</h1>
        </div>
        <div className="flex sm:flex-row text-center flex-col w-full lg:max-w-[1400px] sm:px-10 justify-around z-10 bg-primary pb-20">
          {projects.map((project) => (
            <Project
              key={project.title}
              {...project}
              id={project.id}
              selected={selectedProject === project.id}
              handleClick={handleProjectClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Project = ({ title, id, selected, name, handleClick }) => {
  return (
    <div className="flex-initial flex-row">
      <ul className="sm:flex flex-row">
        <li
          key={id}
          className={`font-libre cursor-pointer text-[24px]`}
          onClick={() => handleClick(id)}
        >
          <Link
            to={`/${name}`}
            className={`${
              selected ? "text-[#8392a3] underline" : "text-[#9cb0a9]"
            } hover:text-[#5a9081] transition duration-300 ease-in-out`}
            selectedid={id}
          >
            {title}
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default MyProjects;
