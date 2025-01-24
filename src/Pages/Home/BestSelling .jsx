import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import LoadingSpin from "../../components/LoadingSpin";
import { Link } from "react-router-dom";

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
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Best Selling Medicines
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <span className="px-2 py-1 bg-primary rounded-md text-white font-semibold text-sm absolute top-2 right-2">
                Sold: {product.sold}
              </span>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {product.name} &nbsp;{" "}
                  <span className="text-base font-normal">
                    {product.mssUnit}
                  </span>
                </h3>
                <p>
                  <i className="text-gray-500">{product.generic}</i> &nbsp;
                </p>
                <p> {product.company}</p>
                <div className="flex justify-start gap-4 items-center mb-4">
                  <span className="text-lg font-bold text-blue-500">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-base text-gray-500 line-through">
                    ${product.discount}
                  </span>
                </div>
                <Link to="/shop">
                  <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-800 transition-colors">
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
