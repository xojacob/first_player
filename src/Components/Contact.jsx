import React from "react";
import styles from "../style";
const Contact = () => {
  return (
    <section id="contact" className="w-full h-full bg-primary pb-10">
      <div className="max-w-[1400px] w-full pt-40 mx-auto">
        <div className="contact-card sm:w-1/2 rounded-3xl sm:min-w-[600px] min-w-[300px]">
          <div className="content-above-gradient bg-[#43397639] backdrop-blur-lg rounded-3xl p-5 border-2 border-white border-opacity-5">
            <div>
              <h1
                className={`${styles.contactGradient} font-martian sm:text-5xl text-4xl font-bold pb-10 text-transparent bg-clip-text z-[1] drop-shadow-md`}
              >
                Contact.
              </h1>
            </div>
            <div className=" flex">
              <h1 className="font-roboto text-2xl text-[#7081bb] sm:w-full transition-all text-center">
                Let's get in touch...
              </h1>
            </div>
            <div className="font-martian sm:text-2xl text-lg pt-10 text-center drop-shadow-lg">
              <a href="mailto:jwj.smith98@gmail.com" className="contact-email">
                jacob@jacobwjsmith.dev
              </a>
            </div>
            <div className="flex justify-center pb-5 pt-14 bg-clip-content">
              <div className="w-[50px] mx-5 linkedin-mask" href="">
                <a
                  href="https://www.linkedin.com/in/jacob-smith-20b559202/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="linkedin-gradient-mask" />
                  <div className={`linkedin-logo-image `} />
                </a>
              </div>

              <div className="w-[50px] h-[50px] mx-5 artstation-mask">
                <a
                  href="https://www.artstation.com/jacobwjsmith"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="artstation-gradient-mask" />
                  <div className="artstation-logo-image" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
