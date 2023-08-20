import React, { useRef, useEffect } from "react";
import styles from "../style";

const Hero = () => {
  return (
    <section id="hero" className=" bg-primary">
      <div className=" sm:max-w-[1400px] sm:h-[900px] h-[500px] sm:px-20 sm:py-20 my-20 mx-auto object-cover flex px-0">
        <div className="hero-card overflow-hidden h-full w-full mx-auto relative ">
          <div className={`hero z-0 overflow-hidden w-full h-full flex`}>
            <div className="w-full h-full font-martian font-bold absolute flex-row flex">
              <div className="sm:w-1/6 w-0" />
              <div className="z-20 flex-col w-full my-auto mx-auto text-left items-center justify-center lg:text-xl md:text-lg text-md text-xs">
                <h1 className="bg-clip-text text-transparent hover:text-[#ddddddd8] hover:bg-clip-border  bg-gradient-to-l from-[#d55b5b3e] to-[#decc8ede] border-t-2 border-b-2 border-[#bba4a132] relative overflow-hidden ">
                  Web Dev
                </h1>
                <h1 className="hover:text-[#ddddddd8] bg-clip-text hover:bg-clip-border bg-gradient-to-l from-[#3e2c8297] to-[#ff8b9bb4] text-transparent my-16 border-t-2 border-b-2 border-[#bba4a132]">
                  Digital Design
                </h1>
                <h1 className="hover:text-[#ddddddd8]  bg-clip-text hover:bg-clip-border text-transparent bg-gradient-to-r from-[#6688c5a6] to-[#e4835d96] border-t-2 border-b-2 border-[#bba4a132] ">
                  Music Production.
                </h1>
              </div>
            </div>
            <div className="sm:w-1/3 w-0"></div>
            <div className="opacity-70">
              <div className="blob-cont blur-3xl ">
                <div className="hero1 blob" />
                <div className="hero2 blob" />
                <div className="hero3 blob" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
