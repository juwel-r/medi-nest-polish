import React from "react";
import LoadingSpin from "../../components/LoadingSpin";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { showAlert, showToast } from "../../Utils/alerts";
import { useQuery } from "@tanstack/react-query";
import AddCategoryModal from "../../Modals/AddCategoryModal";
import useAuth from "../../Hooks/useAuth";
import AddMedicineModal from "../../Modals/AddMedicine";
import { Helmet } from "react-helmet-async";

const ManageMedicine = () => {
  const axiosSecure = useAxiosSecure();
  const { userInfo } = useAuth();
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["manage-seller-medicine"],
    queryFn: async () => {
      try {
        const res = await axiosSecure(`/items?email=${userInfo.email}`);
        return res.data;
      } catch (error) {
        showAlert({
          title: "Something went wrong!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    },
  });

  console.log(data);
  return (
    <div className="container mx-auto py-4 mt-4">
      <Helmet>
        <title>Medicines Management | Medi Nest</title>
      </Helmet>
      <div className="flex items-center justify-between px-4 mb-4">
        <h2 className="text-lg md:text-2xl font-semibold  text-white">
          All Medicine Management
        </h2>
        <div className="green-button">
          <AddMedicineModal
            refetch={refetch}
            categories={data.categories}
            company={data.company}
          ></AddMedicineModal>
        </div>
      </div>
      {isLoading ? (
        <LoadingSpin></LoadingSpin>
      ) : (
        <div className="manage-users overflow-auto bg-white/10 backdrop-blur-lg shadow-lg p-4 rounded-lg border border-white/20 text-white text-center">
          <table className="table-auto w-full border-collapse">
            <thead className="bg-white/30 text-xs md:text-base">
              <tr>
                <th className="p-2">SL</th>
                <th className="p-2">Photo</th>
                <th className="p-2 hidden lg:block text">Medicine Details</th>
                <th className="p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {data.medicine.length > 0 &&
                data.medicine.map((item, i) => (
                  <tr key={i} className="even:bg-white/10 group">
                    <td className="p-2 px-4">{i + 1}</td>
                    {/* image */}
                    <td className="p-2 min-w-[105px]">
                      <div className="flex justify-center flex-col items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-20 w-28 rounded-lg object-cover group-hover:scale-110 transition duration-300"
                        />
                        {/* small device */}
                        <p className="lg:hidden text-sm"> {item.itemName}</p>
                        <div className="lg:hidden">
                          <p className="text-xs text-nowrap">
                            {item.massUnit} &nbsp; {item.category}
                          </p>
                          <p className="text-xs italic">{item.genericName}</p>
                          <p className="text-sm">{item.company}</p>
                        </div>
                      </div>
                    </td>
                    {/* large device */}
                    <td className="p-2 text-left pl-4  hidden lg:block">
                      <p>
                        {item.itemName}
                        <span className="text-xs text-nowrap">
                          &nbsp; {item.massUnit} &nbsp; {item.category}
                        </span>
                      </p>
                      <span className="text-xs italic">{item.genericName}</span>
                      <p className="text-sm">{item.company}</p>
                    </td>

                    <td className="p-2 text-left lg:text-justify text-xs md:text-sm pr-4">
                      {item.description.slice(0, 200)}...
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

export default ManageMedicine;
