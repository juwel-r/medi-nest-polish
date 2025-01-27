import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import animationData from "../../assets/animation/why-choose.json";
import { motion } from "framer-motion";
import { MdVerifiedUser } from "react-icons/md";
import SectionHeader from "../../components/SectionHeader";
import { Fade } from "react-awesome-reveal";

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

  // card data
  const cards = [
    {
      id: 1,
      bgColor: "bg-blue-500",
      text: "6+",
      title: "Reliable Health Solutions",
      description:
        "Reliable and trusted medicine options, providing solutions for all your health needs.",
    },
    {
      id: 2,
      bgColor: "bg-green-500",
      text: "10+",
      title: "Countries our Service In",
      description:
        "We deliver to multiple countries, ensuring you get your medicines no matter where you are.",
    },
    {
      id: 3,
      bgColor: "bg-yellow-500",
      icon: <MdVerifiedUser size={28} />,
      title: "We offer only certified",
      description:
        "Our certified, top-quality products guarantee your health is always in safe hands.",
    },
    {
      id: 4,
      bgColor: "bg-red-500",
      text: "15+",
      title: "Company Belongs with",
      description:
        "We bring together all your medicine needs in one place, offering a vast selection.",
    },
  ];

  return (
    <section className="relative bg-[#F8FAFF] sm:py-16 py-8  px-6 sm:px-12">
      <div className="text-center">
        <SectionHeader title={"Why Medi Nest?"} subTitle={""}></SectionHeader>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-14 relative mt-20">
        <Fade cascade damping={0.2}>
          {cards.map((card, index) => (
            <motion.div
              initial={{ y: 0 }}
              animate={
                isLargeScreen
                  ? {
                      y: [40, -20, 40],
                      transition: {
                        duration: 5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: index % 2 === 0 ? 0 : 1.5, // Delay for odd-numbered children
                      },
                    }
                  : { y: 0 }
              }
              key={card.id}
              className="relative bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div
                  className={`w-20 h-20 ${card.bgColor} text-white text-2xl font-bold flex items-center justify-center rounded-full`}
                >
                  {card.icon || card.text}
                </div>
              </div>
              <h3 className="mt-14 font-semibold text-gray-800 text-lg">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </motion.div>
          ))}
        </Fade>
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
