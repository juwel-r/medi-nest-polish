import React from "react";

const CategoryCard = ({image, category }) => {
  return (
    <div className="">
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center border border-blue-600">
            <img
              src={image}
              alt="Category Image"
              className="w-16 h-16 object-cover rounded-full"
            />
          </div>
        </div>
        <h3 className="text-lg font-bold text-center text-blue-600 mb-2">
          {category}
        </h3>
        <p className="text-sm text-center text-gray-500">
          <span className="text-blue-600 font-semibold">120</span> Medicines
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
