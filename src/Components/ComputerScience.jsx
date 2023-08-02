import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projectData, compSciDetails } from "../constants";
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
        showMore ? "h-[800px]" : "h-28 sm:h-24"
      } ease-in-out duration-300 flex flex-col bg-project bg-auto bg-no-repeat w-full rounded-3xl transition-all mb-5 overflow-hidden border-[1px] border-[#0d0b13] hover:border-[#1a2337]`}
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
      </div>
    </div>
  );
};
const ProjectBlurb = ({ content }) => {
  const contentSplit = content.split("\n").map((item, index) => (
    <p key={index} className="pb-5 flex">
      {item}
    </p>
  ));
  return <div>{contentSplit}</div>;
};
const ComputerScience = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };
  return (
    <section projectid="computerscience" className="w-full bg-primary">
      <div className="max-w-[1400px] mx-auto pt-20 px-10">
        <div className="w-full pt-10 border-t-2 bg-project bg-no-repeat border-[#41485a] rounded-3xl">
          <h1 className="w-full font-cormorant text-center text-tp pb-10  px-12 ">
            Projects From My Undergrad
          </h1>
          <div
            onClick={toggleShowMore}
            className={`${
              showMore ? "h-64 sm:h-auto" : "h-auto"
            } relative font-roboto sm:text-lg text-sm flex text-[#337a6b] hover:text-[#36867d] transition-colors mx-2 pt-1 px-2 text-justify cursor-pointer sm:cursor-default overflow-hidden hover:border-[#1c3935] sm:hover:border-[#0d0b13] border-none border-2 rounded-3xl`}
          >
            <div
              className={`${
                showMore ? "sm:hidden" : "hidden"
              } absolute left-0 w-full h-full bg-clip-border bg-gradient-to-t sm:hidden from-primary z-20`}
            >
              <p className="w-full text-center pt-[184px] font-roboto text-[16px] text-[#819790]">
                Read More
              </p>
            </div>
            <div className="relative z-10 pb-10">
              {compSciDetails.map((props) => (
                <ProjectBlurb key={props.content} {...props} />
              ))}
            </div>
          </div>
          <div className="flex-col flex sm:max-w-[1400px]">
            <div className="flex flex-col justify-between lg:max-w-[1400px] ">
              {projectData.map((project) => (
                <Project key={project.title} {...project} id={project.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComputerScience;
