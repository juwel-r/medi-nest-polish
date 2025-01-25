import Lottie from "lottie-react";
import React from "react";
import animationData from "../../assets/animation/why-choose.json";
import { motion } from "motion/react"
import { easeInOut } from "motion";

const WhyChooseMediNest = () => {
  return (
    <section className="text-center pt-16 bg-gray-100">
      <h2 className="text-4xl font-semibold mb-8">Why Choose MediNest</h2>
      <div>
        <div className="w-full h-full">
          <Lottie animationData={animationData} className="max-w-md mx-auto" />
        </div>
      </div>

      <div className="">
      {/* initial={{ scale: 0 }} animate={{ scale: 1.5 }} */}
        <motion.div animate={{
            x: [-100, 0, -100],
            transition: { duration: 7, ease: easeInOut, repeat: Infinity },
          }} layoutId="modal" className="bg-white rounded-lg shadow-lg p-6 w-64 text-left">
          <div className="text-2xl font-bold mb-2 text-blue-500">10+</div>
          <h3 className="text-xl font-semibold mb-2">Years in Business</h3>
          <p>Providing trusted medical supplies and services.</p>
        </motion.div>
        <div className="bg-white rounded-lg shadow-lg p-6 w-64 text-left">
          <div className="text-2xl font-bold mb-2 text-green-500">500M+</div>
          <h3 className="text-xl font-semibold mb-2">
            Worth of Medicines Sold
          </h3>
          <p>Ensuring quality and affordability in healthcare.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 w-64 text-left">
          <div className="text-2xl font-bold mb-2 text-yellow-500">2000+</div>
          <h3 className="text-xl font-semibold mb-2">Happy Customers</h3>
          <p>Serving a large and satisfied customer base.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 w-64 text-left">
          <div className="text-2xl font-bold mb-2 text-red-500">20+</div>
          <h3 className="text-xl font-semibold mb-2">Countries Served</h3>
          <p>Expanding our reach globally.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMediNest;
