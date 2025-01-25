import Lottie from "lottie-react";
import React from "react";
import animationData from "../../assets/animation/why-choose.json";
import { motion } from "motion/react";
import { easeInOut } from "motion";
import { MdVerifiedUser } from "react-icons/md";

const WhyChooseMediNest = () => {
  return (
<section className="text-center pt-16 bg-[#F8FAFF] relative flex justify-center items-center">
  <div className="text-center">
    <h2 className="text-3xl font-bold text-gray-800">
      We Believe in Numbers
    </h2>
    <div>
      <div className="w-full h-full">
        <Lottie animationData={animationData} className="max-w-md mx-auto" />
      </div>
    </div>

    <section className="py-20 px-6 md:px-12">
      <div className="text-center mb-12"></div>
      <div className="grid grid-cols-3 gap-6 relative place-content-center mx-auto">
        {/* Card 1 */}
        <motion.div
          className="relative bg-white rounded-2xl shadow-lg p-8 text-center max-w-64 flex items-center justify-center flex-col"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 bg-blue-500 text-white text-2xl font-bold flex items-center justify-center rounded-full">
              6+
            </div>
          </div>
          <h3 className="mt-14 font-semibold text-gray-800 text-lg">
            Reliable Health Solutions
          </h3>
          <p className="text-gray-600 text-sm my-4">
            Reliable and trusted medicine options, providing solutions for all your health needs.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="relative bg-white rounded-2xl shadow-lg p-8 text-center max-w-64 flex items-center justify-center flex-col"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 bg-green-500 text-white text-2xl font-bold flex items-center justify-center rounded-full">
              10+
            </div>
          </div>
          <h3 className="mt-14 font-semibold text-gray-800 text-lg">
            Countries our Service In
          </h3>
          <p className="text-gray-600 text-sm my-4">
            We deliver to multiple countries, ensuring you get your medicines no matter where you are.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="relative bg-white rounded-2xl shadow-lg p-8 text-center max-w-64 flex items-center justify-center flex-col"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-5xl w-20 h-20 bg-yellow-500 text-white font-bold flex items-center justify-center rounded-full">
              <MdVerifiedUser />
            </div>
          </div>
          <h3 className="mt-14 font-semibold text-gray-800 text-lg">
            We offer only certified
          </h3>
          <p className="text-gray-600 text-sm my-4">
            Our certified, top-quality products guarantee your health is always in safe hands.
          </p>
        </motion.div>
<div></div>
        {/* Card 4 */}
        <motion.div
          className="relative bg-white rounded-2xl shadow-lg p-8 text-center max-w-64 flex items-center justify-center flex-col"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 bg-red-500 text-white text-2xl font-bold flex items-center justify-center rounded-full">
              15+
            </div>
          </div>
          <h3 className="mt-14 font-semibold text-gray-800 text-lg">
            Company Belongs with
          </h3>
          <p className="text-gray-600 text-sm my-4">
            We bring together all your medicine needs in one place, offering a vast selection.
          </p>
        </motion.div>
      </div>

      <div
        className="absolute w-96 h-96 bg-blue-100 rounded-full -top-28 -left-32 hidden md:block"
        style={{ zIndex: -1 }}
      ></div>
      <div
        className="absolute w-96 h-96 bg-pink-100 rounded-full -bottom-10 -right-32 hidden md:block"
        style={{ zIndex: -1 }}
      ></div>
    </section>
  </div>
</section>

  );
};

export default WhyChooseMediNest;



    // <section className="relative bg-[#F8FAFF] py-20 px-6 md:px-12">
    //   <div className="text-center mb-12">
    //     <h2 className="text-3xl font-bold text-gray-800">We Believe in Numbers</h2>
    //   </div>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
    //     {/* Card 1 */}
    //     <div
    //       className="relative bg-white rounded-2xl shadow-lg p-8 text-center"
    //       style={{ transform: "translateY(10px)" }}
    //     >
    //       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    //         <div
    //           className="w-20 h-20 bg-blue-500 text-white text-2xl font-bold flex items-center justify-center rounded-full"
    //         >
    //           6+
    //         </div>
    //       </div>
    //       <h3 className="mt-14 font-semibold text-gray-800 text-lg">
    //         Years in Business
    //       </h3>
    //       <p className="text-gray-600 text-sm">
    //         we have stood as technology partner to product solutions
    //       </p>
    //     </div>

    //     {/* Card 2 */}
    //     <div
    //       className="relative bg-white rounded-2xl shadow-lg p-8 text-center"
    //       style={{ transform: "translateY(-20px)" }}
    //     >
    //       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    //         <div
    //           className="w-20 h-20 bg-green-500 text-white text-2xl font-bold flex items-center justify-center rounded-full"
    //         >
    //           1000M+
    //         </div>
    //       </div>
    //       <h3 className="mt-14 font-semibold text-gray-800 text-lg">
    //         Worth business managed using our software
    //       </h3>
    //     </div>

    //     {/* Card 3 */}
    //     <div
    //       className="relative bg-white rounded-2xl shadow-lg p-8 text-center"
    //       style={{ transform: "translateY(10px)" }}
    //     >
    //       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    //         <div
    //           className="w-20 h-20 bg-yellow-500 text-white text-2xl font-bold flex items-center justify-center rounded-full"
    //         >
    //           1000+
    //         </div>
    //       </div>
    //       <h3 className="mt-14 font-semibold text-gray-800 text-lg">
    //         People using our software
    //       </h3>
    //     </div>

    //     {/* Card 4 */}
    //     <div
    //       className="relative bg-white rounded-2xl shadow-lg p-8 text-center"
    //       style={{ transform: "translateY(-20px)" }}
    //     >
    //       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    //         <div
    //           className="w-20 h-20 bg-red-500 text-white text-2xl font-bold flex items-center justify-center rounded-full"
    //         >
    //           15+
    //         </div>
    //       </div>
    //       <h3 className="mt-14 font-semibold text-gray-800 text-lg">
    //         Countries our Software Operates In
    //       </h3>
    //       <p className="text-gray-600 text-sm">
    //         we understand the environment you operate
    //       </p>
    //     </div>
    //   </div>
    //   <div
    //     className="absolute w-96 h-96 bg-blue-100 rounded-full -top-20 -left-32"
    //     style={{ zIndex: -1 }}
    //   ></div>
    //   <div
    //     className="absolute w-96 h-96 bg-pink-100 rounded-full -bottom-20 -right-32"
    //     style={{ zIndex: -1 }}
    //   ></div>
    // </section>

