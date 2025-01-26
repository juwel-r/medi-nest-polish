import React, { useState, useEffect } from "react";
import { showAlert, showToast } from "../../Utils/alerts";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import "../dashboard.css";
import LoadingSpin from "../../components/LoadingSpin";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";

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
  const handleAccept = (item) => {
    showAlert({
      title: "Are you sure",
      icon: "info",
      text: `You are trying to accept ${item.name}'s $${item.amount} payment!`,
      confirmButtonText: "Accept",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.patch(`/payment/${item._id}`, {
            status: "Paid",
          });
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
      }
    });
  };

  return (
    <div className="container mx-auto py-4 mt-4">
      <Helmet>
        <title>Payment Management | Medi Nest</title>
      </Helmet>
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
                paymentData.map((item, index) => (
                  <tr key={item._id} className="even:bg-white/10">
                    <td className="p-2">
                      <Fade delay={index*100}>{item.name}</Fade>
                    </td>
                    <td className="p-2">
                      <Fade delay={index*100}>{item.buyerEmail}</Fade>
                    </td>
                    <td className="p-2 text-right pr-4">
                      <Fade delay={index*100}> ${item?.amount.toFixed(2)}</Fade>
                    </td>
                    <td className="p-2 text-right pr-4">
                      <Fade delay={index*100}>{item.status}</Fade>
                    </td>
                    <td className="border-l border-white/30 p-2">
                      <Fade delay={index*100}>
                        <div className="rounded-full text-sm py-1 flex justify-center items-center flex-nowrap">
                          {item?.status === "Pending" ? (
                            <button
                              onClick={() => handleAccept(item)}
                              className="alert-button-success btn btn-sm border-none"
                            >
                              <span className="px-2.5 ">Accept</span>
                            </button>
                          ) : (
                            <button className="bg-primary/40 shadow-inner shadow-black/30 btn btn-sm rounded-full border-none text-white/60 hover:bg-primary/40 text-[10px] h-fit ">
                              <span>Accepted</span>
                              <span className="text-white text-lg">
                                <RiVerifiedBadgeFill />
                              </span>
                            </button>
                          )}
                        </div>
                      </Fade>
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
