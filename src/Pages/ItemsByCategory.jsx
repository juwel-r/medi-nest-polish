import React, { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Table from "../components/Table";
import { useParams } from "react-router-dom";

const ItemsByCategory = () => {
  const [items, setItems] = useState([]);
  const axiosPublic = useAxiosPublic();
  const { categoryName } = useParams();
  useEffect(() => {
    axiosPublic(`/items/category/${categoryName}`).then((result) =>
      setItems(result.data)
    );
  }, []);

  return (
    <div className="md:w-11/12 mx-auto">
      <SectionHeader
        title={`All Medicine of ${categoryName} `}
        subTitle={
          "Easily browse our wide range of medicines, grouped by category for your convenience."
        }
      ></SectionHeader>
      <section>
        <div className="overflow-x-auto">
          <Table items={items}></Table>
        </div>
      </section>
    </div>
  );
};

export default ItemsByCategory;
