import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const SlideContent = ({
  itemName,
  genericName,
  category,
  company,
  massUnit,
  discount,
  description,
}) => {
  return (
    <div className="flex flex-col lg:flex-row px-6 py-8">
      <Fade direction="left" cascade>
        <div className="flex text-left justify-start max-w-96 md:max-w-[600px] lg:max-w-full items-start flex-col lg:pl-44 md:px-10 text-white">
          <div className="grid grid-cols-2 gap-x-2">
            <h1 className="row-span-2 font-bold text-2xl lg:text-5xl md:text-3xl lg:leading-[60px]">
              {itemName}
            </h1>
            <span className="sm:text-base text-xs">{category}</span>
            <span className="sm:text-base text-xs">{massUnit}</span>
          </div>
          <p className="md:text-2xl md:mt-4 md:mb-2 text-base flex flex-col">
         {genericName}
          </p>
          <p>{company}</p>

          <Link
            to="/"
            className="md:text-xl font-semibold border-2 md:py-2 md:px-8 mt-3 green-button  transition-colors btn btn-ghost rounded-none btn-sm md:btn-md mb-8"
          >
            Explore More
          </Link>
        </div>
      </Fade>   
      <div className="relative lg:ml-16 ml-10 mt-8 ">
        <Fade direction="right" className="bg-primary/50 max-w-[45  0px] max-h-56 rounded-3xl lg:self-end flex items-center border-2 border-white/50 p-4">
          <p className="lg:text-xl max-w-[500px] text-white/80 text-center ml-10">
            {description}
          </p>
        </Fade>
          {discount > 0 && (
<div className="lg:scale-90 md:scale-75 absolute -top-10 -left-12">
<Fade direction="up" delay={300} className=" w-28 h-28 font-bold text-lg shadow-md shadow-primary rounded-full flex items-center text-center px-4 bg-white text-green-600">
                <p >
              {discount}% Discount
            </p>
            </Fade>
</div>
          )}
      </div>
    </div>
  );
};

export default SlideContent;
