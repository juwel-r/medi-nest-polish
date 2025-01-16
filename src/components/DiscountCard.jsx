import { image } from "motion/react-client";
import React from "react";

const DiscountCard = ({ category }) => {
  const {
    itemName,
    genericName,
    category:categoryName,
    company,
    massUnit,
    discount,
    description,
    price,
    image
  } = category || {};
  
  return (
    <div className="p-4 rounded-xl shadow-lg border border-gray-200 group hover:shadow-xl hover:bg-primary/5 transition-all duration-300 max-w-sm">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={image}
          alt="Product Image"
          className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
          {discount}% Off
        </span>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-800 truncate">{itemName}</h3>
        <p className="text-sm text-gray-500 italic">Generic: {genericName}</p>
        <p className="text-sm text-gray-500 mt-1">
          Mass Unit: {massUnit} | Company: {company}
        </p>
        <p className="text-xs text-blue-600 font-medium mt-1">
          Category: {categoryName}
        </p>
        <p className="text-sm text-gray-700 mt-2 line-clamp-2">
         {description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-sm text-gray-400 line-through">${price.toFixed(2)}</p>
            <p className="text-lg font-bold text-blue-600">${(price-((price*discount)/100)).toFixed(2)}</p>
          </div>
          <button className="green-button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
