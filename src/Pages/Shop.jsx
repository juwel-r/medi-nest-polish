import React, { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import MedicineCard from "../components/MedicineCard";
import { Helmet } from "react-helmet-async";

const Shop = () => {
  const apiEndPoint = "/items";
  return (
    <div className="md:w-11/12 mx-auto my-8">
      <Helmet>
        <title>All Medicines | Medi Nest</title>
      </Helmet>
      <SectionHeader
        title={"Explore Our Full Medicine Catalog"}
        subTitle={
          "Find the right medicines for your needs from our extensive collection of quality healthcare products."
        }
      ></SectionHeader>
      <section>
        <div className="">
          <MedicineCard apiEndPoint="/items"></MedicineCard>
          
        </div>
      </section>
    </div>
  );
};

export default Shop;
