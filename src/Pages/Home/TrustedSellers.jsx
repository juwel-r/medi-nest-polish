import React, { useEffect, useState } from "react";
import LoadingSpin from "../../components/LoadingSpin";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const TrustedSellers = () => {
  const [sellers, setSellers] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic("/payment/top-seller").then((res) => setSellers(res.data));
  }, []);
  if (!sellers || !sellers.length > 0) {
    return <LoadingSpin />;
  }
  console.log(sellers);
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Our Trusted Top Sellers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sellers.map((seller, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={seller.image}
                alt={seller.name}
                className="w-24 h-24 rounded-full mx-auto border p-1 shadow-md mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800 text-center">
                {seller.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {seller.medicinesCount} Medicines Available
              </p>
              <div className="flex items-center justify-center mt-3">
                <div className="flex items-center gap-1 text-yellow-500">
                  {Array.from({ length: seller.rating }).map((_, idx) => (
                    <span key={idx}>★</span>
                  ))}
                  {Array.from({ length: 5 - seller.rating }).map((_, idx) => (
                    <span key={idx} className="text-gray-300">
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">
                  ({seller.count} Medicines Sold)
                </span>
              </div>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition-colors">
                View Seller
              </button>
            </div>
          ))}
        </div>
        {/* <div className="text-center mt-8">
          <button className="green-button">
            <span className="p-4 text-xl"> View All Sellers</span>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default TrustedSellers;
