import Category from "../Pages/Home/Category";
import Slider from "../Pages/Home/Slider";

const HomeLayout = () => {
  return (
    <div className="">
      <Slider></Slider>
      <div className="w-11/12 mx-auto">
        <Category></Category>
      </div>
    </div>
  );
};

export default HomeLayout;
