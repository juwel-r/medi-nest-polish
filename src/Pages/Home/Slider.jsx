import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { delay } from "motion";
import { useEffect, useState } from "react";
import SlideContent from "../../components/SlideContent";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Slider = () => {
  const [slider, setSlider] = useState([]);
  const axiosPublic = useAxiosPublic()
  useEffect(() => {
axiosPublic('/items/slider').then((res) => setSlider(res.data));
  }, []);

  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
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
                style={{ backgroundImage: `url(${slide.bannerImage || slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <SlideContent
                  itemName={slide.itemName}
                  genericName={slide.genericName}
                  category={slide.category}
                  company={slide.company}
                  massUnit={slide.massUnit}
                  discount={slide.discount}
                  description={slide.bannerDescription || slide.description}
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
