import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../constants";
import styles, { layout } from "../style";
const Project = ({ title, content, date, id }) => {
  return (
    <div className="flex-initial flex-row lg:max-w-[1400px]">
      <ul className="sm:flex flex-row">
        <li key={id} className={`font-libre cursor-pointer text-[24px] pr-6`}>
          <Link
            to={`/myprojects/${id}`}
            className="text-[#9cb0a9] hover:text-[#5a9081]"
          >
            {title}
          </Link>
        </li>
      </ul>
    </div>
  );
};

const MyProjects = () => {
  return (
    <section
      id="myprojects"
      className="flex w-full items-center justify-center pt-20"
    >
      <div className="flex-col flex ">
        <div
          className={`font-cormorant text-tp text-lg pb-10 sm:text-xl px-12`}
        >
          <h1>My Projects</h1>
        </div>
        <div className="flex flex-row w-screen justify-start lg:max-w-[1400px] px-12">
          {projects.map((project) => (
            <Project key={project.title} {...project} id={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
