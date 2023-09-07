import React, { useState } from "react";
import { blogposts } from "../constants";
import styles, { layout } from "../style";

const BlogPost = ({ title, content, date, id }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };
  return (
    <div className=" justify-around flex-col mt-20 pb-10 mx-auto lg:max-w-[1400px] sm:px-10">
      <div
        className={`${
          id % 2 ? "text-left" : "text-right"
        } w-full font-cormorant text-tp text-lg pb-10 px-2 sm:text-xl`}
      >
        <h1>{title}</h1>
      </div>
      <div
        className={`${
          id % 2 ? "" : "flex-row-reverse"
        } font-roboto text-lg text-ts pb-5 flex`}
      >
        <div
          className={`${
            id % 2 ? "text-left" : "text-right"
          } flex-1  font-libre text-sm text-ts p-4`}
        >
          <p>{date}</p>
        </div>
        <div
          onClick={toggleShowMore}
          className={`${
            showMore ? "max-h-96" : "overflow-hidden max-h-64"
          } sm:max-h-[1000px] relative cursor-pointer sm:cursor-default p-2 flex-initial text-justify max-w-[1000px] justify-end hover:border-[#1c3935] sm:hover:border-[#0d0b13] border-[#0d0b13] text-[#337a6b] hover:text-[#36867d] transition-all duration-500  border-2 rounded-3xl
        `}
        >
          <div
            className={`${
              showMore ? "hidden" : "sm:hidden"
            } absolute left-0 w-full h-full bg-gradient-to-t sm:hidden  from-primary z-20 `}
          >
            <p className="w-full h-full text-center pt-[184px] font-roboto text-[16px] text-[#819790]">
              Read More
            </p>
          </div>
          <p className="relative z-10 pr-2 text-sm sm:text-lg h-full overflow-y-auto">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
const Blog = () => {
  return (
    <section id="blog" className="justify-center flex">
      <div className="w-full ">
        {blogposts.map((blogpost) => (
          <BlogPost key={blogpost.title} {...blogpost} id={blogpost.id} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
