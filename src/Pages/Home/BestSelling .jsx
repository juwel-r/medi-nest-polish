import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import LoadingSpin from "../../components/LoadingSpin";
import { Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";

const BestSelling = () => {
  const [products, setProducts] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic("/payment/best-selling").then((result) =>
      setProducts(result.data)
    );
  }, []);
  console.log(products);
  if (!products || !products.length > 0) {
    return <LoadingSpin />;
  }
  return (
<section className="py-14">
  <div className="container mx-auto px-6 md:px-10 lg:px-16">
    <SectionHeader
      title="Best-Selling Medicines"
      subTitle="Discover our best-selling medicines trusted by thousands of customers for their quality and effectiveness."
    ></SectionHeader>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
      {products.map((product, index) => (
        <div
          key={index}
          className="relative group bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105"
        >
          {/* Image */}
          <div className="relative w-full h-56">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-md">
              Sold: {product.sold}
            </span>
          </div>
          {/* Content */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {product.name}
              <span className="text-sm font-light text-gray-500">
                &nbsp;({product.mssUnit})
              </span>
            </h3>
            <p className="mt-2 text-sm text-gray-600 italic">{product.generic}</p>
            <p className="text-sm text-gray-700 font-medium">{product.company}</p>
            <div className="flex justify-between items-center mt-4">
              <div>
                <span className="text-lg font-bold text-blue-600">
                  ${product.price.toFixed(2)}
                </span>
                {product.discount && (
                  <span className="ml-2 text-xs  bg-primary/80 text-white px-3 py-1 rounded-[4px]">
                   Save ${product.discount}
                  </span>
                )}
              </div>
            </div>
          </div>
          {/* Button */}
          <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity">
            <Link to="/shop">
              <button className="w-full bg-primary text-white py-3 text-center font-medium hover:bg-blue-700 transition-colors">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


  );
};

export default BestSelling;
