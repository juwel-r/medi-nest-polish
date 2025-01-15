import { useEffect, useState } from "react";
import DiscountCard from "../../components/DiscountCard";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const DiscountItems = () => {
  const [categories, setCategories] = useState([]);
  const axisoPublic = useAxiosPublic();

  useEffect(() => {
    axisoPublic("/items/discount").then((res) => setCategories(res.data));
  }, []);
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto w-full gap-6 mt-8">
        {categories.map((category, index) => (
          <DiscountCard
            key={index}
            category={category.category}
            image={category.image}
          ></DiscountCard>
        ))}
      </div>
    </div>
  );
};

export default DiscountItems;
