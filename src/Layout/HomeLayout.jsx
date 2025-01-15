import Category from "../Pages/Home/Category";
import DiscountItems from "../Pages/Home/DiscountItems";
import Slider from "../Pages/Home/Slider";

const HomeLayout = () => {
  return (
    <div className="">
      <Slider></Slider>
      <div className="w-11/12 mx-auto">
        <Category></Category>
        <DiscountItems></DiscountItems>
      </div>
    </div>
  );
};

export default HomeLayout;
