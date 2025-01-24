import React, { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Table from "../components/Table";
import { useParams } from "react-router-dom";

const ItemsByCategory = () => {
  const { categoryName } = useParams();

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
          <Table apiEndPoint={`/items/category/${categoryName}`}></Table>
        </div>
      </section>
    </div>
  );
};

export default ItemsByCategory;
