import React from "react";

const CategoryCard = ({ category, index }) => {
  const { categoryImage, name, count } = category;
  const categoryColors = [
    "#FFDAD4",
    "#DFF8E3",
    "#D6EFFF",
    "#EADCFD",
    "#FFF0E5",
    "#FFFBE3",
  ];

  return (
    <div className="">
      <div
        style={{
          backgroundColor: categoryColors[index % categoryColors.length],
        }}
        className="p-4 rounded-xl  shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group "
      >
        <div className="min-h-28 grid lg:grid-cols-[1.5fr_2fr] sm:grid-cols-1 gap-6">
          {/* Photo */}
          <div className="  bg-gray-100 rounded-lg flex items-center justify-center p-0.5 group-hover:scale-105 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-primary transition-all duration-300 shadow-md">
            <img
              src={categoryImage}
              alt={name}
              className="w-full h-full object-cover rounded-lg object-center"
            />
          </div>
          {/* content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-bold text-blue-600 mb-2">{name}</h3>
            <p className="text-sm text-gray-500"> 
              <span className="text-blue-600 font-semibold">{count}</span>&nbsp;
              Medicines
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
