import React, { useState, useEffect } from "react";
import { showAlert, showToast } from "../../Utils/alerts";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import "../dashboard.css";
import LoadingSpin from "../../components/LoadingSpin";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import useAuth from "../../Hooks/useAuth";
import { IoReloadCircleSharp } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { userInfo } = useAuth();
  const {
    data: paymentData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["seller-payment-history-report"],
    queryFn: async () => {
      try {
        const res = await axiosSecure(
          `/payment?value=seller-payment-history&email=${userInfo.email}`
        );
        return res.data;
      } catch (error) {
        showAlert({
          title: "Something went wrong!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
        console.log(error);
      }
    },
  });

  return (
    <Fade triggerOnce delay={300}>
      <div className="container mx-auto py-4 mt-4">
        <Helmet>
          <title>Payment History | Medi Nest</title>
        </Helmet>
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Payment History
        </h2>
        {isLoading ? (
          <LoadingSpin></LoadingSpin>
        ) : (
          <div className="manage-users overflow-auto bg-white/10 backdrop-blur-lg shadow-lg p-4 rounded-lg border border-white/20 text-white text-center">
            <table className="table-auto w-full border-collapse">
              <thead className="bg-white/10">
                <tr>
                  <th className="p-2">SL</th>
                  <th className="p-2">Medicine Name</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2 text-right">Amount</th>
                  <th className="p-2">Buyer Email</th>
                  <th className="p-2">Payment Status</th>
                </tr>
              </thead>
              <tbody>
                {paymentData &&
                  paymentData.map((item, i) => (
                    <tr key={i} className="even:bg-white/10">
                      <td className="p-2 border-r border-white/30">{i + 1}</td>
                      <td className="p-2 text-left  md:pl-6">
                        {item.itemName}
                      </td>
                      <td className="p-2">{item.orderDetails.quantity}</td>
                      <td className="p-2 text-right pr-4">
                        ${item.orderDetails.price * item.orderDetails.quantity}
                      </td>
                      <td className="p-2 text-right md:pr-8">
                        {item.buyerEmail}
                      </td>

                      <td className="border-l border-white/30 p-2">
                        <div className="rounded-full text-sm py-1 flex justify-center items-center ">
                          {item?.status === "Pending" ? (
                            <button className="bg-orange-600/80 shadow-inner shadow-black/30 w-fit rounded-full border-none text-white/80  text-xs h-fit flex flex-nowrap items-center gap-1 py-1.5 px-3 font-bold">
                              <span>Pending</span>
                              <span className="text-xl text-white">
                                <IoReloadCircleSharp />
                              </span>
                            </button>
                          ) : (
                            <div className="bg-primary/80 shadow-inner shadow-black/30 w-fit rounded-full border-none text-white/80  text-xs h-fit flex flex-nowrap items-center gap-1 py-1.5 px-2 font-bold">
                              <span>Accepted</span>
                              <span className="text-xl text-white">
                                <RiVerifiedBadgeFill />
                              </span>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Fade>
  );
};

export default PaymentHistory;
