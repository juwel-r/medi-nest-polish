import React from "react";

const SectionHeader = ({ title, subTitle }) => {
  return (
    <div className="mt-10 lg:mt-16">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-primary font-semibold text-center">
        {title}
      </h1>
      <p className="md:text-lg lg:text-xl text-center text-gray-500 mt-2 md:mt-4 lg:max-w-4xl mx-auto">
        {subTitle}
      </p>
    </div>
  );
};

export default SectionHeader;
