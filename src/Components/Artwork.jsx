import React from "react";
import { useState, useRef } from "react";
import { artGallery } from "../constants";

const Gallery = ({ id, title, caption, image }) => {
  const [expand, setExpand] = useState(false);
  const [smExpand, setSmExpand] = useState(false);
  const imageRef = useRef(null);

  const handleImageClick = () => {
    if (imageRef.current) {
      const naturalHeight = imageRef.current.naturalHeight;
      const naturalWidth = imageRef.current.naturalWidth;
      const maxHeight = 900; // Maximum height
      const maxWidth = 1320; // Maximum width

      const aspectRatio = naturalWidth / naturalHeight;

      let targetHeight = naturalHeight;
      let targetWidth = naturalWidth;

      if (targetHeight > maxHeight) {
        targetHeight = maxHeight;
        targetWidth = targetHeight * aspectRatio;
      }

      if (targetWidth > maxWidth) {
        targetWidth = maxWidth;
        targetHeight = targetWidth / aspectRatio;
      }

      setExpand(!expand);
      console.log(expand);
    }
  };
  return (
    <div>
      <div
        className={`hidden sm:flex relative ${
          id % 2 ? "flex-row" : "flex-row-reverse"
        }  my-5 border-[#2828554c] overflow-hidden artwork-grain`}
      >
        <div
          className="absolute z-0 opacity-20 bottom-64"
          style={{
            left: id % 2 ? -300 : "auto",
            right: id % 2 ? "auto" : -150,
          }}
        >
          <div className="blob-cont">
            <div className="yellow blob" />
            <div className="red blob" />
            <div className="green blob" />
          </div>
        </div>
        {/* Blurred background image */}
        <div
          className={`${
            expand ? "w-full h-auto" : ""
          } transition-all ease-in-out duration-700 absolute inset-0 flex items-center justify-center z-0 w-2/3`}
          style={{ left: id % 2 ? "auto" : 0, right: id % 2 ? 0 : "auto" }}
        >
          <img
            src={image}
            alt="artworkblurred"
            className={`object-cover h-full w-full rounded-2xl blur-3xl opacity-50`}
          />
        </div>
        <div
          className={`${
            expand ? "w-0 opacity-0" : "w-1/3"
          } transition-all flex ease-in-out duration-700 my-auto flex-col`}
        >
          <h1
            className={`${
              expand ? "opacity-0" : ""
            } font-libre text-[#9c8391] transition-all ease-in text-3xl italic`}
            style={{
              marginLeft: id % 2 ? 50 : 0,
              marginRight: id % 2 ? 0 : 50,
            }}
          >
            {title}
          </h1>
          <h1
            className={`${
              expand ? "opacity-0" : ""
            } font-roboto text-[#71598a] transition-all ease-in text-sm pt-10`}
            style={{
              marginLeft: id % 2 ? 50 : 0,
              marginRight: id % 2 ? 0 : 50,
            }}
          >
            {caption}
          </h1>
        </div>
        {/* Foreground image */}
        <img
          ref={imageRef}
          onClick={handleImageClick}
          src={image}
          alt="artwork"
          className={`${
            expand ? "w-full h-auto" : "h-[400px] min-w-[400px]"
          } transition-all object-cover ease-in-out duration-700 rounded-2xl flex-1 m-10 z-10 cursor-pointer`}
        />
      </div>

      {/* Mobile view */}
      <div className="relative sm:hidden ">
        <div
          onClick={() => {
            setSmExpand(!smExpand);
          }}
          className={`${
            smExpand ? "opacity-100" : "opacity-0 "
          } transition-all ease-in-out duration-500 w-full h-full absolute flex flex-col justify-center text-center px-10 bg-[#050510] backdrop-blur-md bg-opacity-80`}
        >
          <h1 className="font-libre text-[#b597a8] transition-all ease-in text-xl italic">
            {title}
          </h1>
          <h1 className="font-roboto text-[#886aa8] transition-all ease-in text-sm pt-2">
            {caption}
          </h1>
        </div>
        <img
          src={image}
          alt="artwork"
          className={` object-cover flex-1 cursor-pointer`}
        />
      </div>
    </div>
  );
};

const Artwork = () => {
  return (
    <section id="artwork" className="w-full bg-primary h-full ">
      <div className="max-w-[1400px] mx-auto px-10  border-[#2828554c]">
        {artGallery.map((artGallery) => (
          <Gallery key={artGallery.id} {...artGallery} />
        ))}
      </div>
    </section>
  );
};

export default Artwork;
