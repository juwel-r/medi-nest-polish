import { useEffect, useState } from "react";
import CategoryCard from "../../components/CategoryCard";
import SectionHeader from "../../components/SectionHeader";
import { title } from "motion/react-client";
import { Link } from "react-router-dom";
const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/slider.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <SectionHeader title="Shop by Category" subTitle="Find exactly what you need from our carefully curated categories."/>
      <Link to="/" className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto w-full gap-6 mt-8">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            category={category.category}
            image={category.image}
          ></CategoryCard>
        ))}
      </Link>
    </div>
  );
};

export default Category;
