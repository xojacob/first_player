import React, { useState } from "react";
import { musicData, musicText, musicLinks } from "../constants";
import styles, { layout } from "../style";
import { XOSClogo } from "../assets";

const MusicProject = ({ title, date, tracks, image }) => {
  const trackSplit = tracks.split(", ").map((item, index) => (
    <p key={index} className="pb-2">
      {item}
    </p>
  ));
  return (
    <div className="flex bg-album bg-contain max-w-[1100px] w-full h-[400px] p-5 mx-auto my-10 border-[1px] border-[#8e755b] items-center justify-center">
      <div className="w-1/2 px-20 mr-10">
        <div className="pr-10">
          <img src={image} className="rounded-xl"></img>
        </div>
      </div>
      <div className="w-1/3 flex-col flexh-full ">
        <div>
          <div className="font-libre text-2xl pb-2 text-[#ae8f70] ">
            {title}
          </div>
          <div className="font-libre flex text-md pb-10 ">
            <div className="text-[#b3675d] pr-2 hover">{date}</div>
          </div>
        </div>

        <div className="font-libre text-xl text-[#337a6b] hover:text-[#36867d] transition-colors">
          <div className="w-full">{trackSplit}</div>
        </div>
      </div>
    </div>
  );
};
const MusicBlurb = ({ content }) => {
  const contentSplit = content.split("\n").map((item, index) => (
    <p key={index} className="pb-5  flex">
      {item}
    </p>
  ));
  return <div>{contentSplit}</div>;
};
const Music = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };
  return (
    <section id="music">
      <div className="max-w-[1400px] mx-auto pt-20 px-10">
        <div className="w-full pt-10 border-t-2 bg-project bg-no-repeat border-[#41485a] rounded-3xl">
          <div className="w-full px-10 pb-10 flex-initial">
            <img src={XOSClogo} className="w-[400px] mx-auto" />
          </div>
          <div
            onClick={toggleShowMore}
            className={`${
              showMore ? "h-64 sm:h-auto" : "h-auto"
            } relative font-roboto sm:text-lg text-sm flex text-[#337a6b] hover:text-[#36867d] transition-colors mx-2 pt-1 px-2 text-justify cursor-pointer sm:cursor-default overflow-hidden hover:border-[#1c3935] sm:hover:border-[#0d0b13] border-[#0d0b13] border-2 rounded-3xl`}
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
            <div className="relative z-10">
              {musicText.map((props) => (
                <MusicBlurb key={props.content} {...props} />
              ))}
            </div>
          </div>
          <div className="pt-10 h-full w-full">
            {musicData.map((project) => (
              <MusicProject key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
