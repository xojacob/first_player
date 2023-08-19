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
      className="flex w-full items-center justify-center pt-20 pl-4"
    >
      <div className="flex-col flex ">
        <div
          className={`font-cormorant text-tp text-lg pb-10 sm:text-xl sm:px-10`}
        >
          <h1>My Projects</h1>
        </div>
        <div className="flex flex-row w-screen justify-start lg:max-w-[1400px]  sm:px-10">
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
    <div className="flex-initial flex-row lg:max-w-[1400px]">
      <ul className="sm:flex flex-row pb-20">
        <li
          key={id}
          className={`font-libre cursor-pointer text-[24px] pr-6`}
          onClick={() => handleClick(id)}
        >
          <Link
            to={`/myprojects/${name}`}
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
