import React from "react";

const CategoryCard = ({ category, index }) => {
  const { image, category:categoryName, count } = category;
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
          backgroundColor: categoryColors[index % categoryColors.length], // Conditional Background Color
        }}
        className="p-6 rounded-xl  shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:bg-primary/5"
      >
        <div className="flex gap-6">
          {/* Photo */}
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center border border-blue-600">
            <img
              src={image}
              alt="Category Image"
              className="w-16 h-16 object-cover rounded-full"
            />
          </div>
          {/* content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-bold text-blue-600 mb-2">{categoryName}</h3>
            <p className="text-sm text-gray-500">
              <span className="text-blue-600 font-semibold">{count}</span>{" "}
              Medicines
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
