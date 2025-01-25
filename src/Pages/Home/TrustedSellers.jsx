import React, { useEffect, useState } from "react";
import LoadingSpin from "../../components/LoadingSpin";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SectionHeader from "../../components/SectionHeader";

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
    <section className="py-10 my-8">
      <div className="container mx-auto px-4">
      <SectionHeader title={"Top Pharmaceutical Partner"} subTitle={"Recognizing excellence in healthcare, this section highlights the top-selling pharmaceutical company based on sales performance."}></SectionHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6 md:mt-12">
  {sellers.map((seller, index) => (
    <div
      key={index}
      className="relative group bg-gradient-to-br from-gray-50 to-white shadow-xl rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
      <img
        src={seller.image}
        alt={seller.name}
        className="w-full h-40 object-cover group-hover:opacity-75 transition-opacity"
      />
      <div className="p-5 relative z-10">
        <h3 className="text-lg font-bold text-gray-100 group-hover:text-white text-center">
          {seller.name}
        </h3>
        <p className="text-sm text-gray-300 text-center mt-1">
          {seller.medicinesCount} Medicines Available
        </p>
        <div className="flex items-center justify-center mt-3">
          <div className="flex items-center gap-1 text-yellow-400">
            {Array.from({ length: seller.rating }).map((_, idx) => (
              <span key={idx}>★</span>
            ))}
            {Array.from({ length: 5 - seller.rating }).map((_, idx) => (
              <span key={idx} className="text-gray-500">
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-300 ml-2">
            {seller.count} Medicines Sold
          </span>
        </div>
        <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg w-full hover:bg-blue-700 transition-colors">
          View Seller
        </button>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default TrustedSellers;
