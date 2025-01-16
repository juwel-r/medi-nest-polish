import React, { useEffect } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import { showToast } from "../Utils/alerts";
import useAuth from "./useAuth";
import useCart from "./useCart";

const useAddToCart = () => {
  const { userInfo } = useAuth();
  const [, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const {
    mutate: addToCart,
    data,
    isLoading,
    error,
  } = useMutation({
    mutationKey: ["addToCart"],
    mutationFn: async (item) => {
      try {
        let itemPrice = item.price;
        if (item.discount > 0) {
          itemPrice = item.price - (item.price * item.discount) / 100;
        }
        const cartData = {
          email: userInfo.email,
          itemId: item._id,
          name: item.itemName,
          image: item.image,
          category: item.category,
          company: item.company,
          price: itemPrice,
          quantity: 1,
        };

        const res = await axiosSecure.post("/cart", cartData);
        refetch();
        return res.data;
      } catch (error) {
        if (error.status === 400) {
          showToast(`${item.itemName} is already added!`, "warning");
        } else {
          showToast("Something went wrong, Try Again!", "error");
        }
        // console.log(error);
      }
    },
  });
  useEffect(() => {
    if (data?.insertedId) {
      console.log(data.insertedId);
      showToast("Add to Cart Successful!", "success");
    }
  }, [data]);
  return [addToCart, data, isLoading];
};

export default useAddToCart;
//todo: logo color change
