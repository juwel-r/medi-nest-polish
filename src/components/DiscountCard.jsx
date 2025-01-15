import React from 'react';

const DiscountCard = () => {
    return (
<div className="p-4 rounded-xl shadow-lg border border-gray-200 group hover:shadow-xl hover:bg-primary/5 transition-all duration-300 max-w-sm">
  <div className="relative overflow-hidden rounded-xl">
    <img
      src="product-image.jpg"
      alt="Product Image"
      className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-105"
    />
    <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
      20% Off
    </span>
  </div>

  <div className="mt-4">
    <h3 className="text-lg font-bold text-gray-800 truncate">Item Name</h3>
    <p className="text-sm text-gray-500 italic">Generic: Generic Name</p>
    <p className="text-sm text-gray-500 mt-1">Mass Unit: 500mg | Company: PharmaCo</p>
    <p className="text-xs text-blue-600 font-medium mt-1">Category: Pain Relief</p>
    <p className="text-sm text-gray-700 mt-2 line-clamp-2">
      This is a short description of the product, limited to a maximum of 100 characters for better readability.
    </p>

    <div className="flex items-center justify-between mt-4">
      <div>
        <p className="text-sm text-gray-400 line-through">$50.00</p>
        <p className="text-lg font-bold text-blue-600">$40.00</p>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Add to Cart
      </button>
    </div>
  </div>
</div>

    );  
};

export default DiscountCard;