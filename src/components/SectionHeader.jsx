import React from "react";

const SectionHeader = ({ title, subTitle }) => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-primary font-semibold text-center mt-10 lg:mt-16">{title}</h1>
      <p className="md:text-lg lg:text-xl text-center text-gray-500 mt-2 md:mt-4">{subTitle}</p>{" "}
    </div>
  );
};

export default SectionHeader;
