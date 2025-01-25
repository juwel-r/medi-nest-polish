import React from "react";
import { Fade } from "react-awesome-reveal";

const SectionHeader = ({ title, subTitle }) => {
  return (
    <div className="w-[95%] md:w-10/12 mx-auto  ">
      <Fade direction="down">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-primary font-semibold text-center">
          {title}
        </h1>
      </Fade>
      <Fade delay={200}>
        <p className="md:text-lg lg:text-xl text-center text-gray-500 mt-2 md:mt-4 lg:max-w-4xl mx-auto">
          {subTitle}
        </p>
      </Fade>
    </div>
  );
};
export default SectionHeader;
