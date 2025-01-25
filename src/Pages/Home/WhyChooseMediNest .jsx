import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import animationData from "../../assets/animation/why-choose.json";
import { motion } from "framer-motion";
import { MdVerifiedUser } from "react-icons/md";
import SectionHeader from "../../components/SectionHeader";

const WhyChooseMediNest = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup event listener
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isLargeScreen = screenWidth > 640;

  return (
    <section className="relative bg-[#F8FAFF] sm:py-16 py-8  px-6 sm:px-12">
      <div className="text-center">
        <SectionHeader title={"We Believe in Numbers"} subTitle={""}></SectionHeader>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-14 relative mt-20">
        {/* Card 1 */}
        <motion.div
          className="relative bg-white rounded-2xl shadow-lg p-8 text-center"
          initial={{ y: 0 }}
          animate={
            isLargeScreen
              ? {
                  y: [40, -20, 40],
                  transition: {
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                  },
                }
              : { y: 0 }
          }
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 bg-blue-500 text-white text-2xl font-bold flex items-center justify-center rounded-full">
              6+
            </div>
          </div>
          <h3 className="mt-14 font-semibold text-gray-800 text-lg">
            Reliable Health Solutions
          </h3>
          <p className="text-gray-600 text-sm">
            Reliable and trusted medicine options, providing solutions for all
            your health needs.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="relative bg-white rounded-2xl shadow-lg p-8 text-center"
          initial={{ y: 0 }}
          animate={
            isLargeScreen
              ? {
                  y: [40, -20, 40],
                  transition: {
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: 1.5,
                  },
                }
              : { y: 0 }
          }
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 bg-green-500 text-white text-2xl font-bold flex items-center justify-center rounded-full">
              10+
            </div>
          </div>
          <h3 className="mt-14 font-semibold text-gray-800 text-lg">
            Countries our Service In
          </h3>
          <p className="text-gray-600 text-sm">
            We deliver to multiple countries, ensuring you get your medicines no
            matter where you are.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="relative bg-white rounded-2xl shadow-lg p-8 text-center"
          initial={{ y: 0 }}
          animate={
            isLargeScreen
              ? {
                  y: [40, -20, 40],
                  transition: {
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                  },
                }
              : { y: 0 }
          }
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-5xl w-20 h-20 bg-yellow-500 text-white font-bold flex items-center justify-center rounded-full">
              <MdVerifiedUser />
            </div>
          </div>
          <h3 className="mt-14 font-semibold text-gray-800 text-lg">
            We offer only certified
          </h3>
          <p className="text-gray-600 text-sm">
            Our certified, top-quality products guarantee your health is always
            in safe hands.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="relative bg-white rounded-2xl shadow-lg p-8 text-center"
          initial={{ y: 0 }}
          animate={
            isLargeScreen
              ? {
                  y: [40, -20, 40],
                  transition: {
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: 1.5,
                  },
                }
              : { y: 0 }
          }
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 bg-red-500 text-white text-2xl font-bold flex items-center justify-center rounded-full">
              15+
            </div>
          </div>
          <h3 className="mt-14 font-semibold text-gray-800 text-lg">
            Company Belongs with
          </h3>
          <p className="text-gray-600 text-sm">
            We bring together all your medicine needs in one place, offering a
            vast selection.
          </p>
        </motion.div>
      </div>

      <div
        className="absolute w-96 h-96 bg-blue-100 rounded-full -top-20 -left-32 hidden"
        style={{ zIndex: -1 }}
      ></div>
      <div
        className="hidden absolute w-60 h-60 bg-pink-100 rounded-full -bottom-20 -left-32 "
        style={{ zIndex: 1 }}
      ></div>
    </section>
  );
};

export default WhyChooseMediNest;
