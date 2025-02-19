import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import LoadingSpin from "../../components/LoadingSpin";
import { Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
import { Fade } from "react-awesome-reveal";

const BestSelling = () => {
  const [products, setProducts] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic("/payment/best-selling").then((result) =>
      setProducts(result.data)
    );
  }, []);
  if (!products || !products.length > 0) {
    return <LoadingSpin />;
  }
  return (
    <section className="sectionContainer  mx-auto dark:bg-dark-bg">
      <div className="mx-auto px-4 lg:w-10/12">
        <SectionHeader
          title="Best-Selling Medicines"
          subTitle="Discover our best-selling medicines trusted by thousands of customers for their quality and effectiveness."
        ></SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 ">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative group bg-white dark:bg-dark-card  overflow-hidden rounded-lg transition-all transform hover:shadow-[0px_20px_20px_0px] hover:shadow-primary/30 duration-300 p-4 pb-0 border border-dashed dark:border-dark-border"
            >
              {/* Image */}
              <Fade triggerOnce delay={index * 200}>
                <div className="relative w-full h-56 rounded-t-md overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-md">
                    Sold: {product.sold}
                  </span>
                </div>
              </Fade>
              {/* Content */}
              <div className="p-6 pl-2">
                <Fade triggerOnce direction="down" delay={index * 200}>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-dark-title truncate">
                    {product.name}
                    <span className="text-sm font-light text-gray-500 dark:text-dark-text/80">
                      &nbsp;({product.mssUnit})
                    </span>
                  </h3>
                </Fade>
                <Fade triggerOnce direction="up" delay={index * 200}>
                  <p className="mt-2 text-sm text-gray-600 dark:text-dark-text italic">
                    {product.generic}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-dark-text font-medium">
                    {product.company}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <span className="text-lg font-bold text-blue-600">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.discount && (
                        <span className="ml-2 text-xs group-hover:hidden bg-primary/80 text-white px-3 py-1 rounded-[4px]">
                          Save ${product.discount}
                        </span>
                      )}
                    </div>
                  </div>
                </Fade>
              </div>
              {/* Button */}
              <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Link to="/shop">
                  <button className="w-full bg-primary text-white py-3 text-center font-medium hover:bg-blue-700 transition-colors duration-900">
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
