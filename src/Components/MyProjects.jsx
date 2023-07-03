import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../constants";
import styles, { layout } from "../style";
const Project = ({ title, content, date, id }) => {
  return (
    <div className="flex-initial flex-row  lg:max-w-[1400px]">
      <ul className="sm:flex flex-row ">
        <li key={id} className={`font-libre  cursor-pointer text-[24px] `}>
          <Link to={`/${id}`} className="text-[#9cb0a9] hover:text-[#5a9081] ">
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
      className="flex w-screen items-center justify-center"
    >
      <div className="flex-col flex sm:max-w-[1400px] ">
        <div
          className={`w-full font-cormorant text-tp text-lg pb-10 sm:text-xl px-12`}
        >
          <h1 className="">My Projects</h1>
        </div>
        <div className="flex flex-row w-screen justify-between lg:max-w-[1400px] px-12">
          {projects.map((project) => (
            <Project key={project.title} {...project} id={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
