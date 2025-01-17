import { useEffect, useState } from "react";
import CategoryCard from "../../components/CategoryCard";
import SectionHeader from "../../components/SectionHeader";
import { title } from "motion/react-client";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const Category = () => {
  const [categories, setCategories] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic("/items/categories").then((res) => setCategories(res.data));
  }, []);
  console.log(categories);
 
  return (
    <div>
      <SectionHeader
        title="Shop by Category"
        subTitle="Find exactly what you need from our carefully curated categories."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto w-full gap-6 mt-8">
        {/*todo: need  add route of Link 
        need to add category photo*/}
        {categories.slice(0, 6).map((category, index) => (
          <Link key={index} to={`/category/${category.category}`}>
            <CategoryCard category={category} index={index}></CategoryCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
