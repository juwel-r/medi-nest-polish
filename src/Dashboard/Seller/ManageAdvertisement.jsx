import { useQuery } from "@tanstack/react-query";
import { showAlert, showToast } from "../../Utils/alerts";
import LoadingSpin from "../../components/LoadingSpin";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import "react-toggle/style.css";
import useAuth from "../../Hooks/useAuth";
import AdvertisementRequestModal from "../../Modals/AdvertisementRequestModal";
import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";

const ManageAdvertisement = () => {
  const axiosSecure = useAxiosSecure();
  const { userInfo } = useAuth();

  const {
    data: sliderData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["manageBannerAdvertise"],
    queryFn: async () => {
      try {
        const res = await axiosSecure(
          `/items/slider/manage?email=${userInfo.email}`
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

  const handleUpdate = async (item, action) => {
    showAlert({
      title: "Are you sure",
      icon: "warning",
      text: `Sure ${item.itemName} ${
        action === "Remove" ? "to Remove from" : "Cancel Request of"
      } Banner Advertise?`,
      confirmButtonText: `${
        action === "Request"
          ? "Send Request"
          : action === "Cancel"
          ? "Cancel Request"
          : "Remove"
      }`,
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.patch(`/items/slider/${item._id}`, {
            status: "",
          });
          if (res.data.modifiedCount > 0) {
            showToast(`${item.itemName} successfully removed!`, "info");
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
    <Fade triggerOnce delay={200}>
      <div className="container mx-auto py-4 mt-4">
        <Helmet>
          <title>Advertisement Management | Medi Nest</title>
        </Helmet>
        <h2 className="text-lg md:text-2xl font-semibold mb-4 text-white">
          Banner Slider Management
        </h2>
        {isLoading ? (
          <LoadingSpin></LoadingSpin>
        ) : (
          <div className="manage-users overflow-auto bg-white/10 backdrop-blur-lg shadow-lg p-4 rounded-lg border border-white/20 text-white text-center">
            <table className="table-auto w-full border-collapse">
              <thead className="bg-white/30 text-xs md:text-base">
                <tr>
                  <th className="hidden lg:block p-2">SL</th>
                  <th className="p-2">Photo</th>
                  <th className="p-2 hidden lg:block">
                    Item Name & Seller Email
                  </th>
                  <th className="p-2">Description</th>
                  <th className="p-2 hidden lg:block">Status</th>
                  <th className="border-l border-white/30 p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {sliderData &&
                  sliderData.map((item, i) => (
                    <tr key={item._id} className="even:bg-white/10 group ">
                      <td className="hidden lg:block p-2 px-4">{i + 1}</td>
                      {/* image */}
                      <td className="p-2">
                        <div className="flex justify-center flex-col items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-28 h-16 rounded-lg shadow-md object-cover group-hover:scale-110 transition-all duration-300"
                          />
                          <p className="lg:hidden text-sm"> {item.itemName}</p>
                          <p className="lg:hidden text-xs mb-1">
                            {item.sellerEmail}
                          </p>
                          <div className="lg:hidden">
                            {item?.bannerStatus === "Approved" ? (
                              <span className="bg-primary rounded-full py-1.5 px-2 text-xs font-bold shadow-inner shadow-black/50 text-white/70">
                                {item?.bannerStatus}
                              </span>
                            ) : item?.bannerStatus === "Requested" ? (
                              <span className="bg-gray-500/50 rounded-full py-1.5 px-2 text-xs font-bold shadow-inner shadow-black/50 text-white/80">
                                {item?.bannerStatus}
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </td>

                      <td className="p-2 text-left pr-4  hidden lg:block">
                        {item.itemName}
                        <div>{item.sellerEmail}</div>
                      </td>
                      <td className="p-2 text-left lg:text-justify text-xs md:text-sm pr-4">
                        <span className="hidden md:block">
                          {" "}
                          {item.description.slice(0, 150)}...
                        </span>
                        <span className="md:hidden">
                          {" "}
                          {item.description.slice(0, 90)}...
                        </span>
                      </td>

                      {/* banner status */}
                      <td className="p-2 pr-4 hidden lg:inline">
                        <div className="hidden lg:flex justify-center items-center h-full w-full mr-4">
                          {item?.bannerStatus === "Approved" ? (
                            <span className="bg-primary rounded-full py-1.5 px-2 text-[10px] font-semibold shadow-inner shadow-black/50 text-white/70">
                              {item?.bannerStatus}
                            </span>
                          ) : item?.bannerStatus === "Requested" ? (
                            <span className="bg-gray-500/50 rounded-full py-1.5 px-2 text-[10px] font-semibold shadow-inner shadow-black/50 text-white/80">
                              {item?.bannerStatus}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                      </td>

                      {/* Action */}
                      <td className="border-l border-white/30 p-2">
                        <div className="rounded-full text-sm px-x py-1">
                          {item?.bannerStatus === "Approved" ? (
                            <button
                              onClick={() => handleUpdate(item, "Remove")}
                              className="alert-button-error btn btn-sm border-none"
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content="Remove From Advertisement"
                            >
                              Remove
                            </button>
                          ) : item?.bannerStatus === "Requested" ? (
                            <button
                              onClick={() => handleUpdate(item, "Cancel")}
                              className=" bg-orange-500/70 shadow-lg font-bold rounded-full text-white text-xs px-4 btn-sm border-none "
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content="Cancel Request"
                            >
                              Cancel
                            </button>
                          ) : (
                            <div
                              className="alert-button-success btn btn-sm border-none"
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content="Sent Request to Add"
                            >
                              <span className="px-2 text-white">
                                <AdvertisementRequestModal
                                  item={item}
                                  refetch={refetch}
                                />
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

export default ManageAdvertisement;
