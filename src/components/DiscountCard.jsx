import { useNavigate } from "react-router-dom";
import useAddToCart from "../Hooks/useAddToCart";
import useAuth from "../Hooks/useAuth";
import { showToast } from "../Utils/alerts";
import { Fade } from "react-awesome-reveal";

const DiscountCard = ({ category, index }) => {
  const {
    itemName,
    genericName,
    category: categoryName,
    company,
    massUnit,
    discount,
    description,
    price,
    image,
  } = category || {};
  const { userInfo } = useAuth();
  const [addToCart] = useAddToCart();
  const navigate = useNavigate();
  const handleAddToCart = async () => {
    if (!userInfo?.email) {
      navigate("/login");
      return showToast("Please login to add cart!", "info");
    }
    addToCart(category);
  };

  return (
    <div className="p-4 rounded-lg shadow-lg border border-gray-100 dark:border-dark-border group hover:shadow-xl hover:bg-primary/5 transition-all duration-300 w-full h-full dark:bg-dark-card">
      <Fade triggerOnce delay={200}>
        <div className="relative overflow-hidden rounded-md">
          <img
            src={image}
            alt="Product Image"
            className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
            {discount}% Off
          </span>
        </div>
      </Fade>

      <div className="mt-4 p-4">
        <Fade triggerOnce direction="up" delay={300}>
          <h3 className="text-lg font-bold text-gray-800 dark:text-dark-title truncate">
            {itemName}
          </h3>
        </Fade>
        <Fade triggerOnce cascade damping={.2}>
          <p className="text-sm text-gray-500 dark:text-dark-text italic">Generic: {genericName}</p>
          <p className="text-sm text-gray-500 dark:text-dark-text mt-1">
            Mass Unit: {massUnit} | {company} 
          </p>
          <p className="text-xs text-blue-600 font-medium mt-1">
            Category: {categoryName}
          </p>
          <p className="text-sm text-gray-700 mt-2 line-clamp-2 dark:text-dark-text">
            {description} 
          </p>
        </Fade>

        <div className="flex items-center justify-between mt-4">
          <Fade triggerOnce direction="left" delay={200}>
            <div>
              <p className="text-sm text-gray-400 line-through">
                ${price.toFixed(2)}
              </p>
              <p className="text-lg font-bold text-blue-600">
                ${(price - (price * discount) / 100).toFixed(2)}
              </p>
            </div>
          </Fade>
          <Fade triggerOnce delay={350}>
            <button onClick={handleAddToCart} className="green-button">
              Add to Cart
            </button>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
