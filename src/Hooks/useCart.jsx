import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCart = () => {
  const { userInfo } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", userInfo?.email],
    queryFn: async () => {
      if (userInfo.email) {
        try {
          const res = await axiosSecure(`/cart?email=${userInfo.email}`);
          return res.data;
        } catch (error) {
          console.log(error);
        }
      }
    },
  });
  return [cart, refetch];
};

export default useCart;
