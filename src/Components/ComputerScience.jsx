import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projectData } from "../constants";
import styles, { layout } from "../style";
const Project = ({ title, utilises, utilisestext, content, id }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };
  const contentItems = content.split("\n").map((item, index) => (
    <p key={index} className="pb-5">
      {item}
    </p>
  ));
  return (
    <div
      onClick={toggleShowMore}
      className={`${
        showMore ? "h-auto" : "h-28 sm:h-24"
      } ease-in-out flex flex-col bg-project bg-auto bg-no-repeat w-full rounded-3xl transition-all mb-5 overflow-hidden`}
    >
      <div className="cursor-pointer ">
        <div className="font-libre text-xl px-5 pt-5 pb-2 text-[#ae8f70] ">
          {title}
        </div>
        <div className="font-libre flex text-md pl-5 pb-10 ">
          <div className="text-[#b3675d] pr-2 hover">{utilises}</div>{" "}
          <div className="text-[#a0a189]">{utilisestext}</div>
        </div>
      </div>

      <div className="font-roboto text-lg flex text-[#337a6b] hover:text-[#36867d] transition-colors">
        <div className="w-full px-10 pb-3">{contentItems}</div>
        <div
          className={`${
            id === 2 ? "hidden" : ""
          } w-full text-center border-l-4 border-ts`}
        >
          Image Gallery
        </div>
      </div>
    </div>
  );
};

const ComputerScience = () => {
  return (
    <section
      id="myprojects"
      className="flex w-screen items-center justify-center pt-10 px-10 pb-10"
    >
      <div className="flex-col flex sm:max-w-[1400px]">
        <div className="flex flex-col w-screen justify-between lg:max-w-[1400px] px-12 ">
          {projectData.map((project) => (
            <Project key={project.title} {...project} id={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComputerScience;
