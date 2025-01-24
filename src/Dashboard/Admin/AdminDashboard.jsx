import React, { useEffect } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpin from "../../components/LoadingSpin";
import { Helmet } from "react-helmet-async";

const AdminDashboard = () => {
  const axiosSecure = useAxiosSecure();

  const { data = [], isLoading } = useQuery({
    queryKey: ["overviewAdmin"],
    queryFn: async () => {
      try {
        const res = await axiosSecure("/payment?value=paid-pending");
        return res.data[0];
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="mt-6">
      <Helmet>
        <title>Dashboard Overview | Medi Nest</title>
      </Helmet>
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
                {data?.totalOrders.toString().padStart(2, "0") || "00"}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg shadow-lg p-4 rounded-lg border border-white/20 text-white text-center">
              <h2 className="text-base md:text-lg font-semibold">
                Total {data?.statuses[0].status}
              </h2>
              <p className="text-lg md:text-xl font-bold">
                ${data?.statuses[0].totalAmount.toFixed(2) || "00"}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg shadow-lg p-4 rounded-lg border border-white/20 text-white text-center">
              <h2 className="text-base md:text-lg font-semibold">
                Total {data?.statuses[1]?.status}
              </h2>
              <p className="text-lg md:text-xl font-bold">
                ${data?.statuses[1]?.totalAmount.toFixed(2) || "00"}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg shadow-lg p-4 rounded-lg border border-white/20 text-white text-center">
              <h2 className="text-base md:text-lg font-semibold">
                Available Medicines
              </h2>
              <p className="text-lg md:text-xl font-bold">
                {data?.totalAvailable.toString().padStart(2, "0") || "00"}
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
export default AdminDashboard;
