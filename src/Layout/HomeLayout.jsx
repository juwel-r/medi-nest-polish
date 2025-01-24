import BestSelling from "../Pages/Home/BestSelling ";
import Category from "../Pages/Home/Category";
import DiscountSlide from "../Pages/Home/DiscountSlide";
import Slider from "../Pages/Home/Slider";
import TrustedSellers from "../Pages/Home/TrustedSellers";
import WhyChooseMediNest from "../Pages/Home/WhyChooseMediNest ";

const HomeLayout = () => {
  return (
    <div className="">
      <Slider></Slider>
      <div className="md:w-11/12 mx-auto">
        <Category></Category>
        <DiscountSlide></DiscountSlide>
        <TrustedSellers/>
        <BestSelling/>
        <WhyChooseMediNest/>
      </div>
    </div>
  );
};

export default HomeLayout;
