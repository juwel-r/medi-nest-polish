import React, { useState, useEffect } from "react";
import { showAlert, showToast } from "../../Utils/alerts";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import "../dashboard.css";
import LoadingSpin from "../../components/LoadingSpin";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const PaymentManagement = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: paymentData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["managePayment"],
    queryFn: async () => {
      try {
        const res = await axiosSecure("/payment?value=payment-management");
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

  const handleAccept = async (item) => {
    try {
      const res = await axiosSecure.patch(`/payment/${item._id}`, { "status":"Paid" });
      if (res.data.modifiedCount > 0) {
        showToast(
          `${item.name}'s $${item.amount} payment accepted!`,
          "success"
        );
        refetch();
      }
    } catch (error) {
      console.log(error);
      showAlert({
        title: "Something went wrong!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="container mx-auto py-4 mt-4">
      <h2 className="text-2xl font-semibold mb-4 text-white">
        Payment Management
      </h2>
      {isLoading ? (
        <LoadingSpin></LoadingSpin>
      ) : (
        <div className="manage-users overflow-auto bg-white/10 backdrop-blur-lg shadow-lg p-4 rounded-lg border border-white/20 text-white text-center">
          <table className="table-auto w-full border-collapse">
            <thead className="bg-white/10">
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2 text-right">Payment Amount</th>
                <th className="p-2 text-right">Payment Status</th>
                <th className="border-l border-white/30 p-2">Accept Payment</th>
              </tr>
            </thead>
            <tbody>
              {paymentData &&
                paymentData.map((item) => (
                  <tr key={item._id} className="even:bg-white/10">
                    <td className="p-2">{item.name}</td>
                    <td className="p-2">{item.email}</td>
                    <td className="p-2 text-right pr-4">
                      ${item?.amount.toFixed(2)}
                    </td>
                    <td className="p-2 text-right pr-4">{item.status}</td>
                    <td className="border-l border-white/30 p-2">
                      <div className="rounded-full text-sm py-1">
                        {item?.status === "Pending" ? (
                          <button
                            onClick={() => handleAccept(item)}
                            className="alert-button-success btn btn-sm border-none"
                          >
                            Accept
                          </button>
                        ) : (
                          <button className="bg-primary/40 btn btn-sm rounded-full border-none text-white/70 hover:bg-primary/40">
                            Accepted{" "}
                            <span className="text-white">
                              <RiVerifiedBadgeFill />
                            </span>
                          </button>
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
  );
};

export default PaymentManagement;
