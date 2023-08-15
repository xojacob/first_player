import React from "react";
import styles from "../style";const Contact = () => {
  return (
    <section id="contact" className=" w-full h-full bg-primary pb-10">
      <div className="max-w-[1400px] w-full pt-40 mx-auto">
        <div className="contact-card sm:w-1/2 w-full rounded-3xl sm:min-w-[600px] min-w-[300px]">
          <div className="content-above-gradient bg-[#342b433f] backdrop-blur-2xl rounded-3xl p-5"> 
            <div>
              <h1
                className={`${styles.contactGradient} font-martian sm:text-5xl text-4xl font-bold pb-10 text-transparent bg-clip-text z-[1] drop-shadow-md`}
              >
                Contact.
              </h1>
            </div>
            <div className="pt-4 flex">
              <h1 className="font-roboto text-2xl text-[#7081bb] sm:w-full transition-all text-center">
                Let's get in touch...
              </h1>
            </div>
            <div className="font-martian sm:text-2xl text-lg py-20 text-center drop-shadow-lg">
              <a href="mailto:jwj.smith98@gmail.com" className="contact-email">jwj.smith98@gmail.com</a>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Contact;
