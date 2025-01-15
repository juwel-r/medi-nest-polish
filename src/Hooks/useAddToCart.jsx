import React, { useEffect } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import { showToast } from "../Utils/alerts";
import useAuth from "./useAuth";

const useAddToCart = () => {
  const {userInfo}= useAuth()
  const axiosSecure = useAxiosSecure();
  const {
    mutate: addToCart,
    data,
    isLoading,
    refetch,
  } = useMutation({
    mutationKey: ["addToCart"],
    mutationFn: async (item) => {
      let itemPrice = item.price;
      if (item.discount > 0) {
        itemPrice = item.price - (item.price * item.discount) / 100;
      }
      const cartData = {
        email: userInfo.email,
        itemId: item._id,
        name: item.itemName,
        category: item.category,
        company: item.company,
        price: itemPrice,
      };

      const res = await axiosSecure.post("/cart", cartData);
      return res.data;
    },
  });
  useEffect(() => {
    if (data?.insertedId) {
      console.log(data.insertedId);
      showToast("Add to Cart Successful!", "success");
    }
  }, [data]);
  return [addToCart, data, isLoading, refetch];
};

export default useAddToCart;
