import { useEffect, useState } from "react";
import CategoryCard from "../../components/CategoryCard";
import SectionHeader from "../../components/SectionHeader";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import LoadingSpin from "../../components/LoadingSpin";
import { Fade } from "react-awesome-reveal";
const Category = () => {
  const [categories, setCategories] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic("/categories").then((res) => setCategories(res.data));
  }, []);
  if (!categories || !categories.length > 0) {
    return <LoadingSpin></LoadingSpin>;
  }
  return (
    <div className="sectionContainer mt-4 md:mt-6">
      <Fade triggerOnce></Fade>
      <SectionHeader
        title="Shop by Category"
        subTitle="Find exactly what you need from our carefully curated categories."
      />
      <div className="grid grid-cols-2 lg:grid-cols-3 mx-auto w-full gap-6 mt-8 p-4">
        {categories.slice(0, 6).map((category, index) => (
          <Link key={index} to={`/items/${category.name}`}>
            <CategoryCard category={category} index={index}></CategoryCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
