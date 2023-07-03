import React, { useState } from "react";
import { navLinks } from "../constants";
import { close, logo, menu } from "../assets";
import styles from "../style";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    /* First unordered list in nav bar is the nav items themselves,
    the following div is for mobile devices so it shows a menu instead 
    of just removing the nav items alltogether */
    <nav className="w-full flex justify-center top-0 fixed  z-50">
      <div
        className={`${
          toggle ? "pb-40" : "pb-3"
        } px-9 sm:pb-3 backdrop-blur-md pt-3 bg-gradient-to-b from-primary flex justify-between items-center fixed w-full max-w-[1400px]`}
      >
        <h1 className="font-libre font-bold text-[28px] text-[#b7b7b7] ">
          Jacob Smith
        </h1>
        <ul className="list-none sm:flex justify-end hidden items-center ">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-libre font-bold cursor-pointer text-[24px] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a
                className="text-[#9cb0a9] hover:text-[#5a9081]"
                href={`#${nav.id}`}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex fex-1 justify-end ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${toggle ? "flex" : "hidden"}
          w-full fixed top-12 right-0 min-w-[140px] `}
          >
            <ul className="list-none flex flex-col pt-5 justify-end flex-1 ">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-roboto font-normal text-right pr-10 cursor-pointer text-xl text-primary ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } `}
                >
                  <a
                    href={`#${nav.id}`}
                    className="text-[#9cb0a9] hover:text-[#5a9081]"
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
