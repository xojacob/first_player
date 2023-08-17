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
        <div className="font-libre sm:text-xl text-md px-5 sm:pt-5 pt-4 pb-2 text-[#ae8f70] ">
          {title}
        </div>
        <div className="font-libre flex pl-5 pb-10 flex-row">
          <div className="text-[#b3675d] pr-2 hover sm:text-md text-sm">
            {utilises}
          </div>{" "}
          <div className="text-[#a0a189] sm:text-md text-sm">
            {utilisestext}
          </div>
        </div>
      </div>

      <div className="font-roboto sm:text-lg text-sm flex text-[#337a6b] hover:text-[#36867d] transition-colors">
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
    <section projectid="computerscience" className="w-full">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="computer-science-background">
          <div className="w-full content-above-gradient bg-gradient-to-t from-primary to-transparent bg-no-repeat backdrop-blur-3xl pt-10 border-[#41485a] rounded-3xl">
            <h1 className="w-full font-cormorant text-center  text-tp pb-10  px-12 ">
              Projects From My Undergrad
            </h1>
            <div
              onClick={toggleShowMore}
              className={`${
                showMore ? "h-64 sm:h-auto" : "h-auto"
              } relative font-roboto sm:text-lg text-sm flex text-[#337a6b] hover:text-[#36867d] transition-colors  pt-1 text-justify cursor-pointer sm:cursor-default overflow-hidden hover:border-[#1c3935] sm:hover:border-[#0d0b13] border-none border-2 rounded-3xl`}
            >
              <div
                className={`${
                  showMore ? "sm:hidden" : "hidden"
                } absolute left-0 w-full h-full bg-clip-border bg-gradient-to-t sm:hidden from-primary z-[2]`}
              >
                <p className="w-full text-center pt-[184px] font-roboto text-[16px] text-[#819790]">
                  Read More
                </p>
              </div>
              <div className="relative pb-10 px-2">
                {compSciDetails.map((props) => (
                  <ProjectBlurb key={props.content} {...props} />
                ))}
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex-col flex sm:max-w-[1400px]">
          <div className="flex flex-col justify-between lg:max-w-[1400px] z-[1]">
            {projectData.map((project) => (
              <Project key={project.title} {...project} id={project.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComputerScience;
