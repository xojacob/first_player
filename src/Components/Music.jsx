import React, { useState } from "react";
import { musicData, musicText, musicLinks } from "../constants";
import styles, { layout } from "../style";
import {
  XOSClogo,
  appleLogo,
  spotifyLogo,
  tidalLogo,
  soundcloudLogo,
} from "../assets/";

const MusicProject = ({ title, date, tracks, image, id }) => {
  const trackSplit = tracks.split(", ").map((item, index) => (
    <p key={index} className="pb-2">
      {item}
    </p>
  ));
  return (
    <div className="flex py-10 sm:flex-row flex-col bg-[#362b502e] sm:bg-contain max-w-[800px] bg-cover rounded-lg  sm:w-full sm:h-[400px] mx-10 sm:mx-auto my-10 border-2 border-[#323351] transition-all items-center justify-center overflow-hidden ">
      <div className="w-1/2 px-10 sm:mr-10 sm:min-w-[400px] min-w-[400px]">
        <div className="sm:py-10">
          <div className="relative flex">
            <img
              src={image}
              className="rounded-xl z-10 absolute"
              alt="album art"
            ></img>
            <img
              src={image}
              className="rounded-xl blur-3xl z-0 opacity-20"
              alt="album art"
            ></img>
          </div>
        </div>
      </div>
      <div className="sm:w-1/3 w-full flex-col flex-full sm:text-left sm:pt-0 pt-5">
        <div className="text-center">
          <div className="font-libre text-2xl pb-2 text-[#ae8f70] ">
            {title}
          </div>
          <div className="font-libre text-md pb-5">
            <div className="text-[#b3675d] pr-2 hover">{date}</div>
          </div>
        </div>

        <div
          className={`${
            id % 2 ? "" : "hidden"
          } flex flex-col pt-5 items-center`}
        >
          <a href="https://tidal.com/browse/album/217857450">
            <img
              src={tidalLogo}
              className="max-w-[150px] h-full p-2 bg-white rounded-xl"
              href="https://tidal.com/browse/album/217857450"
            />
          </a>
          <a href="https://music.apple.com/us/album/analog-ascension-ep/1611285351">
            <img
              src={appleLogo}
              className="max-w-[150px] max-h-[45px] h-full p-2"
            />
          </a>
          <a href="https://open.spotify.com/album/3dlHXWf0ZkfCuV4jpyYJj4?si=0dBdIwWvQxqmHyhtwIaCzQ">
            <img src={spotifyLogo} className="max-w-[150px] h-full p-2" />
          </a>
        </div>

        <div
          className={`${
            id % 2 ? "hidden" : ""
          } flex flex-col pt-5 items-center`}
        >
          <a href="https://soundcloud.com/user-477391268-669136497/sets/start-here?si=4018ec36535e413eb791841d3dfa3c8e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
            <img src={soundcloudLogo} className="w-[200px] p-2" />
          </a>
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
    <section projectid="music" className="w-full relative z-20">
      <div className="max-w-[1400px] mx-auto sm:px-10 ">
        <div className="w-full pt-10 border-t-2 bg-project bg-no-repeat border-[#41485a] rounded-3xl relative">
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
          <div className="pt-10 h-full w-full bg-primary">
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
