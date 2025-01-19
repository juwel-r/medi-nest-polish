import React from "react";
import { useQuery } from "@tanstack/react-query";
import { showAlert } from "../../Utils/alerts";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import LoadingSpin from "../../components/LoadingSpin";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { VscVerifiedFilled } from "react-icons/vsc";

const ManageBannerAdvertise = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: sliderData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["manageBannerAdvertise"],
    queryFn: async () => {
      try {
        const res = await axiosSecure("/items/slider/manage");
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

  console.log("slide", sliderData);

  const handleAccept = async (item) => {
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
                <th className="p-2">SL</th>
                <th className="p-2">Image</th>
                <th className="p-2">Name</th>
                <th className="p-2">Description</th>
                <th className="p-2">Seller Email</th>
                <th className="p-2">Status</th>
                <th className="border-l border-white/30 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {sliderData &&
                sliderData.map((item, i) => (
                  <tr key={item._id} className="even:bg-white/10">
                    <td className="p-2 px-4">{i + 1}</td>
                    <td className="p-2">
                      <div className="flex justify-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="p-2 text-left">{item.itemName}</td>
                    <td className="p-2 text-left text-sm">
                      {item.description.slice(0, 90)}...
                    </td>
                    <td className="p-2 text-left pr-4">{item.sellerEmail}</td>
                    <td className="p-2 pr-4 ">
                      {item.bannerStatus === "Approved" ? (
                        <span className="bg-primary rounded-full py-1.5 px-2 text-xs font-bold shadow-inner shadow-black/50 text">
                          {item.bannerStatus}
                        </span>
                      ) : item.bannerStatus === "Requested" ? (
                        <span className="bg-green-500/70 rounded-full py-1.5 px-2 text-xs font-bold shadow-inner shadow-black/50">
                        {item.bannerStatus}
                      </span>
                      ) :""}
                    </td>

                    <td className="border-l border-white/30 p-2">
                      <div className="rounded-full text-sm px-x py-1">
                        {item.bannerStatus === "Approved" ? (
                          <button
                            onClick={() => handleAccept(item)}
                            className="alert-button-error btn btn-sm border-none"
                          >
                            Remove
                          </button>
                        ) : item.bannerStatus === "Requested" ? (
                          <button className="alert-button-success btn btn-sm border-none">
                            Accepted
                          </button>
                        ) : (
                          <button className="alert-button-success btn btn-sm border-none">
                            <span className="px-2">Select</span>
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

export default ManageBannerAdvertise;
