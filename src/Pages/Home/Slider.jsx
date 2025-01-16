import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { delay } from "motion";
import { useEffect, useState } from "react";
import SlideContent from "../../components/SlideContent";

const Slider = () => {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    fetch("/slider.json")
      .then((res) => res.json())
      .then((data) => setSlider(data));
  }, []);

  // const {
  //   itemName,
  //   genericName,
  //   category,
  //   company,
  //   massUnit,
  //   discount,
  //   price,
  //   description,
  //   image,
  // } = slider;

  return (
    <>
      <Swiper
        autoplay={{
          delay: 300000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {slider &&
          slider.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full bg-cover object-cover bg-center md:py-8 lg:py-16 "
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <SlideContent
                  itemName={slide.itemName}
                  genericName={slide.genericName}
                  category={slide.category}
                  company={slide.company}
                  massUnit={slide.massUnit}
                  discount={slide.discount}
                  description={slide.description}
                ></SlideContent>
                <div className="flex justify-start items-center h-full"></div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Slider;
