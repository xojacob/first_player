import React from "react";
import styles from "../style";
const Contact = () => {
  return (
    <section id="contact" className=" w-full bg-primary bottom-0">
      <div className="max-w-[1400px] mx-auto pt-96">
        <div>
          <h1
            className={`${styles.contactGradient} font-martian mx-auto sm:ml-40 font-bold w-96 pb-10 px-12 text-transparent bg-clip-text`}
          >
            Contact.
          </h1>
        </div>
        <div className="pt-16 flex">
          <div className="sm:w-1/3 sm:visible"></div>
          <h1 className=" font-roboto text-xl sm:w-full  px-24 mx-auto text-ts hover:text-tp transition-all text-justify pb-40">
            Wanna get in touch? Click my email below to compose a message.
          </h1>
        </div>
      </div>
    </section>
  );
};
export default Contact;
