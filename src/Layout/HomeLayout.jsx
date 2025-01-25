import { Helmet } from "react-helmet-async";
import BestSelling from "../Pages/Home/BestSelling ";
import Category from "../Pages/Home/Category";
import DiscountSlide from "../Pages/Home/DiscountSlide";
import Slider from "../Pages/Home/Slider";
import WhyChooseMediNest from "../Pages/Home/WhyChooseMediNest ";
import PartnerWithUs from "../Pages/Home/PartnerWithUs";

const HomeLayout = () => {
  return (
    <div className="">
      <Helmet>
        <title>
          Medi Nest | Your Trusted Multi-Vendor Medicine Marketplace
        </title>
      </Helmet>
      <Slider></Slider>
      <div className="mx-auto">
        <Category></Category>
        <DiscountSlide></DiscountSlide>
        <BestSelling />
        <WhyChooseMediNest />
        <PartnerWithUs></PartnerWithUs>
      </div>
    </div>
  );
};

export default HomeLayout;
