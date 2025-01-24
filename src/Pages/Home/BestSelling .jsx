import React from "react";

const BestSelling = () => {
    const products = [
        {
          image: "https://via.placeholder.com/400x300",
          name: "Paracetamol",
          description: "Effective for fever and mild pain relief.",
          price: 5.99,
          rating: 4,
        },
        {
          image: "https://via.placeholder.com/400x300",
          name: "Ibuprofen",
          description: "Relieves inflammation and pain.",
          price: 7.49,
          rating: 5,
        },
        {
          image: "https://via.placeholder.com/400x300",
          name: "Vitamin C Tablets",
          description: "Boosts immunity and skin health.",
          price: 12.99,
          rating: 4,
        },
        {
          image: "https://via.placeholder.com/400x300",
          name: "Aspirin",
          description: "Reduces fever, pain, and .",
          price: 6.49,
          rating: 4,
        },
      ];
      
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Best Selling Medicines
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {product.description.length > 60
                    ? product.description.slice(0, 60) + "..."
                    : product.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-blue-500">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-yellow-500">
                    {"⭐".repeat(product.rating)}
                  </span>
                </div>
                <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
