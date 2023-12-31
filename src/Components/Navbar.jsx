import React, { useState } from "react";
import { navLinks, homeLink } from "../constants";
import { close, menu } from "../assets";
import { Link as ScrollLink } from "react-scroll";
import styles from "../style";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    /* First unordered list in nav bar is the nav items themselves,
    the following div is for mobile devices so it shows a menu instead 
    of just removing the nav items alltogether */
    <nav className="w-full flex justify-center top-0">
      <div className="w-full flex justify-center top-0 fixed z-50">
        <div
          className={`${
            toggle ? "pb-80" : "pb-3"
          } transition-all duration-300 ease-in-out sm:px-10 sm:pb-3 backdrop-blur-md pt-3 bg-gradient-to-b from-primary flex justify-between items-center fixed w-full max-w-[1400px]`}
        >
          <div>
            {homeLink.map((nav) => (
              <ScrollLink
                onClick={() => setToggle(false)}
                activeClass="active"
                to={nav.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <h1
                  className={`font-libre font-bold text-[28px] cursor-pointer ml-2 text-[#c8c8c8] hover:text-[#ffffff] ${styles.nameGradient}`}
                >
                  Jacob Smith
                </h1>
              </ScrollLink>
            ))}
          </div>
          <ul className="list-none sm:flex justify-end hidden items-center ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-libre font-bold cursor-pointer text-[24px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mr-10"
                }`}
              >
                <ScrollLink
                  activeClass="active"
                  to={nav.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-[#9cb0a9] hover:text-[#5a9081]"
                >
                  {nav.title}
                </ScrollLink>
              </li>
            ))}
          </ul>

          <div className="sm:hidden mr-4">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle((prev) => !prev)}
            />

            <div
              className={`${toggle ? "opacity-100" : "opacity-0"}
          w-full fixed top-12 right-0 min-w-[140px] transition-all duration-500 ease-in-out`}
            >
              <ul
                className={`${
                  toggle ? "flex visible" : "hidden"
                } list-none flex flex-col pt-5 justify-end flex-1 transition-all duration-300 ease-in-out`}
              >
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-roboto font-normal text-right pr-10 pt-8 drop-shadow-md cursor-pointer text-3xl text-primary ${
                      index === navLinks.length - 1 ? "mr-0" : "mb-4"
                    } `}
                  >
                    <ScrollLink
                      onClick={() => setToggle((prev) => !prev)}
                      activeClass="active"
                      to={nav.id}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="text-[#9cb0a9] hover:text-[#5a9081]"
                    >
                      {nav.title}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`${toggle ? "visible" : "hidden"} w-full h-screen`}
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
