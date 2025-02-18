import React, { useEffect } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpin from "../../components/LoadingSpin";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";

const SellerDashboard = () => {
  const axiosSecure = useAxiosSecure();
  const { userInfo } = useAuth();

  const { data = [], isLoading } = useQuery({
    queryKey: ["overviewSeller"],
    queryFn: async () => {
      try {
        const res = await axiosSecure(
          `/payment?value=seller-dashboard&email=${userInfo.email}`
        );
        return res.data;
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
            <Fade triggerOnce delay={100}>
              <div className="bg-white/10 backdrop-blur-lg shadow-lg p-4 rounded-lg border border-white/20 text-white text-center">
                <h2 className="text-base md:text-lg font-semibold">
                  Total Orders
                </h2>
                <p className="text-lg md:text-xl font-bold">
                  {(
                    parseInt(data?.paid?.orders || 0) +
                    parseInt(data?.pending?.orders || 0)
                  )
                    .toString()
                    .padStart(2, "0")}
                </p>
              </div>
            </Fade>
            <Fade triggerOnce delay={150}>
              <div className="bg-white/10 backdrop-blur-lg shadow-lg p-4 rounded-lg border border-white/20 text-white text-center">
                <h2 className="text-base md:text-lg font-semibold">
                  Total Paid
                </h2>
                <p className="text-lg md:text-xl font-bold">
                  ${data?.paid?.revenue || "00"}
                </p>
              </div>
            </Fade>
            <Fade triggerOnce delay={250}>
              <div className="bg-white/10 backdrop-blur-lg shadow-lg p-4 rounded-lg border border-white/20 text-white text-center">
                <h2 className="text-base md:text-lg font-semibold">
                  Total Pending
                </h2>
                <p className="text-lg md:text-xl font-bold">
                  ${data?.pending?.revenue || "00"}
                </p>
              </div>
            </Fade>
            <Fade triggerOnce delay={350}>
              <div className="bg-white/10 backdrop-blur-lg shadow-lg p-4 rounded-lg border border-white/20 text-white text-center">
                <h2 className="text-base md:text-lg font-semibold">
                  Available Items
                </h2>
                <p className="text-lg md:text-xl font-bold">
                  {data?.totalItem.toString().padStart(2, "0") || "00"}
                </p>
              </div>
            </Fade>
          </section>
          {/* bottom section */}
          <section className="grid md:grid-cols-3 gap-4 mt-6">
            <Fade
              triggerOnce
              delay={400}
              className="md:col-span-2 bg-white/10 backdrop-blur-lg shadow-lg p-6 rounded-lg border border-white/20"
            >
              <div>
                <h2 className="text-white text-base md:text-lg font-semibold">
                  Overall Activity
                </h2>

                <div className="h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-lg mt-2"></div>
              </div>
            </Fade>
            <Fade triggerOnce delay={450}>
              <div className="bg-white/10 backdrop-blur-lg shadow-lg p-6 rounded-lg border border-white/20">
                <h2 className="text-white text-base md:text-lg font-semibold">
                  Daily Report
                </h2>
                <div className="h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-lg mt-2"></div>
              </div>
            </Fade>
          </section>
        </>
      )}
    </div>
  );
};
export default SellerDashboard;
