import React, { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { FaEye } from "react-icons/fa";
import useAddToCart from "../Hooks/useAddToCart";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { showToast } from "../Utils/alerts";

const Shop = () => {
  const [items, setItems] = useState([]);
  const { userInfo } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [addToCart, data, isLoading, refetch] = useAddToCart();
  const navigate = useNavigate();

  useEffect(() => {
    axiosPublic("/items").then((result) => setItems(result.data));
  }, []);
  const handleAddToCart = async (item) => {
    if (!userInfo?.email) {
      navigate("/login");
    }
    addToCart(item);
  };

  return (
    <div>
      <SectionHeader
        title={"Explore Our Full Medicine Catalog"}
        subTitle={
          "Find the right medicines for your needs from our extensive collection of quality healthcare products."
        }
      ></SectionHeader>
      <section>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead className="">
              <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Generic Name</th>
                <th>Category</th>
                <th>Company</th>
                <th>Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.itemName}</td>
                  <td>{item.genericName}</td>
                  <td>{item.category}</td>
                  <td>{item.company}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td className="flex items-center justify-evenly gap-2 border-l">
                    <p className="text-primary px-2 h-5 flex items-center rounded-xl text-xl cursor-pointer hover:text-black">
                      <FaEye className="" />
                    </p>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="btn btn-xs bg-primary text-white rounded-full hover:bg-primary/30 hover:text-primary"
                    >
                      Select
                    </button>
                    {/* //i want to use isLoading at here */}
                  </td>
                </tr>
              ))}
              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Shop;
