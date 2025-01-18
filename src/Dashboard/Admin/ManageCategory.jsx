import React from "react";
import LoadingSpin from "../../components/LoadingSpin";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { showAlert, showToast } from "../../Utils/alerts";
import { useQuery } from "@tanstack/react-query";
import AddCategoryModal from "../../Modals/AddCategoryModal";

const ManageCategory = () => {
  // <LoadingSpin></LoadingSpin>
  const axiosSecure = useAxiosSecure();
  const {
    data: category = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      try {
        const res = await axiosSecure("/category");
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

  // add category
  const handleAddCategory =()=>{

  }

//update
  const handleUpdate = async (updateRole, name, email) => {
    try {
      const res = await axiosSecure.patch(`/user/${email}`, {
        role: updateRole,
      });
      if (res.data.modifiedCount > 0) {
        showToast(`${name} is now ${updateRole.toUpperCase()}!`, "success");
        refetch();
        console.log(res.data);
      }
    } catch (error) {
      showAlert({
        title: "Something went wrong!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
    console.log(updateRole, name, email);
  };


  return (
    <div className="container mx-auto py-4 mt-4">
      <div className="flex items-center justify-between px-4 mb-4">
        <h2 className="text-2xl font-semibold  text-white">
          Category Management
        </h2>
        <button onClick={handleAddCategory} className="alert-button-success text-xl">Add New Category</button>
      </div>
      {isLoading ? (
        <LoadingSpin></LoadingSpin>
      ) : (
        <div className="manage-category overflow-auto bg-white/10 backdrop-blur-lg shadow-lg p-4 rounded-lg border border-white/20 text-white text-center ">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-white/20 p-2">SL</th>
                <th className="border border-white/20 p-2">Category Photo</th>
                <th className="border border-white/20 p-2">Category Name</th>
                <th className="border border-white/20 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {category &&
                category.map((item, index) => (
                  <tr key={item._id}>
                    <td className="border border-white/20 p-2">{index + 1}</td>
                    <td className="border border-white/20 p-2 ">
                    <div className="flex justify-center">

                      <img
                        src={item.categoryImage}
                        alt={item.name}
                        className="w-16 h-16 rounded-full border border-white/20 object-cover"
                      />
                    </div>
                    </td>
                    <td className="border border-white/20 p-2 w-1/2">{item.name}</td>
                    <td className="border border-white/20 p-2">
                      {/* <button onClick={handleUpdate} className="alert-button-success mr-2">Update</button> */}
                      <AddCategoryModal item={item}></AddCategoryModal>
                      <button onClick={"handleDelete"} className="alert-button-error">Delete</button>
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

export default ManageCategory;
