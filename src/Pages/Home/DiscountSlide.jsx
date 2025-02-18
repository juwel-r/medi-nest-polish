import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import DiscountCard from "../../components/DiscountCard";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SectionHeader from "../../components/SectionHeader";
import LoadingSpin from "../../components/LoadingSpin";

const DiscountSlide = () => {
  const [categories, setCategories] = useState([]);
  const axiosPublic = useAxiosPublic();
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    axiosPublic("/items/discount").then((res) => setCategories(res.data));

    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2); // Tablet
      } else {
        setSlidesPerView(3); // Desktop
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);
  if(!categories || !categories.length>0){
   return <LoadingSpin/>
  }
  return (
    <div className="sectionContainer">
      <SectionHeader
        title="Discounts on Essentials"
        subTitle="Grab unbeatable deals on top-quality medicines. Save more while staying healthy!"
      ></SectionHeader>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-12"
      >
        {categories.slice(0,10).map((category, index) => (
          <SwiperSlide className="md:my-12 mt-6 mb-12 rounded-lg h-9" key={index}>
            <DiscountCard key={category._id} category={category} index={index}></DiscountCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DiscountSlide;
