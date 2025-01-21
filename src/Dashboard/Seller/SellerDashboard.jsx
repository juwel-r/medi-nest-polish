import React, { useEffect } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpin from "../../components/LoadingSpin";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";

const SellerDashboard = () => {
  const axiosSecure = useAxiosSecure();
  const { userInfo } = useAuth();

  const { data = [], isLoading } = useQuery({
    queryKey: ["overviewSeller"],
    queryFn: async () => {
      try {
        const res = await axiosSecure(
          `/payment?value=seller-sales-status&email=${userInfo.email}`
        );
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  console.log(data);

  return (
    <div className="mt-6">
      {isLoading ? (
        <LoadingSpin></LoadingSpin>
      ) : (
        <>
          {/* top section */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-lg shadow-lg p-4 rounded-lg border border-white/20 text-white text-center">
              <h2 className="text-base md:text-lg font-semibold">
                Total Orders
              </h2>
              <p className="text-lg md:text-xl font-bold">
                {(data?.paid?.orders * 1 ||0 + data?.pending?.orders * 1 ||0).toString().padStart(2, "0")
                  
          }
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg shadow-lg p-4 rounded-lg border border-white/20 text-white text-center">
              <h2 className="text-base md:text-lg font-semibold">Total Paid</h2>
              <p className="text-lg md:text-xl font-bold">
                ${data?.paid?.amount.toFixed(2)||0}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg shadow-lg p-4 rounded-lg border border-white/20 text-white text-center">
              <h2 className="text-base md:text-lg font-semibold">
                Total Pending
              </h2>
              <p className="text-lg md:text-xl font-bold">
                ${data?.pending?.amount.toFixed(2)||0}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg shadow-lg p-4 rounded-lg border border-white/20 text-white text-center">
              <h2 className="text-base md:text-lg font-semibold">
                Available Items
              </h2>
              <p className="text-lg md:text-xl font-bold">
                {data?.totalCount.toString().padStart(2, "0")}
              </p>
            </div>
          </section>
          {/* bottom section */}
          <section className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="md:col-span-2 bg-white/10 backdrop-blur-lg shadow-lg p-6 rounded-lg border border-white/20">
              <h2 className="text-white text-base md:text-lg font-semibold">
                Overall Activity
              </h2>

              <div className="h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-lg mt-2"></div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg shadow-lg p-6 rounded-lg border border-white/20">
              <h2 className="text-white text-base md:text-lg font-semibold">
                Daily Report
              </h2>
              <div className="h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-lg mt-2"></div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};
export default SellerDashboard;
