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
      className=" items-center sm:max-w-[1400px] pt-20 pb-20 mx-auto"
    >
      <div className="flex-col flex ">
        <div
          className={`font-cormorant text-tp text-lg pb-10 sm:text-xl sm:px-10`}
        >
          <h1>My Projects</h1>
        </div>
        <div className="flex sm:flex-row flex-col w-full lg:max-w-[1400px] sm:px-10 justify-around">
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
