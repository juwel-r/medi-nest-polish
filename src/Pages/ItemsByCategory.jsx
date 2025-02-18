import React, { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import MedicineCard from "../components/MedicineCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ItemsByCategory = () => {
  const { categoryName } = useParams();

  return (
    <div className="md:w-11/12 mx-auto">
      <Helmet>
        <title>{categoryName} Medicines | Medi Nest</title>
      </Helmet>
      <SectionHeader
        title={`All Medicine of ${categoryName} `}
        subTitle={
          "Easily browse our wide range of medicines, grouped by category for your convenience."
        }
      ></SectionHeader>
      <section>
        <div className="overflow-x-auto">
          <MedicineCard apiEndPoint={`/items/category/${categoryName}`}></MedicineCard>
        </div>
      </section>
    </div>
  );
};

export default ItemsByCategory;
