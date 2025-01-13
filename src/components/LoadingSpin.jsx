import React from "react";

const LoadingSpin = () => {
  return (
    <div className="flex items-center flex-col justify-start py-[5%] h-auto">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-solid"></div>
      <p className="text-3xl font-semibold mt-5 text-primary">Loading . . .</p>
    </div>
  );
};

export default LoadingSpin;
