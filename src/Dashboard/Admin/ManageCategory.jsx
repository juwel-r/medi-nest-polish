import React from "react";
import LoadingSpin from "../../components/LoadingSpin";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { showAlert, showToast } from "../../Utils/alerts";
import { useQuery } from "@tanstack/react-query";
import AddCategoryModal from "../../Modals/AddCategoryModal";
import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";

const ManageCategory = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: category = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["manageCategory"],
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
  const handleAddCategory = () => {};

  //delete
  const handleDelete = (item) => {
    showAlert({
      title: "Are you sure",
      icon: "warning",
      text: "All medicine of this category will be uncatogorized! ",
      confirmButtonText: "Delete",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/category/${item._id}`);
          if (res.data.deletedCount > 0) {
            showToast(`${item.name} is Deleted!`, "success");
            refetch();
          }
        } catch (error) {
          showAlert({
            title: "Something went wrong!",
            text: error.message,
            icon: "error",
            confirmButtonText: "Try Again",
          });
          console.log(error);
        }
      }
    });
  };

  return (
    <div className="container mx-auto py-4 mt-4">
      <Helmet>
        <title>Category Management | Medi Nest</title>
      </Helmet>
      <div className="flex items-center justify-between px-4 mb-4">
        <Fade triggerOnce>
          <h2 className="text-lg md:text-2xl font-semibold  text-white">
            Category Management
          </h2>
        </Fade>
        <div onClick={handleAddCategory} className="green-button">
          <Fade triggerOnce>
            <AddCategoryModal refetch={refetch}></AddCategoryModal>
          </Fade>
        </div>
      </div>
      {isLoading ? (
        <LoadingSpin></LoadingSpin>
      ) : (
        <div className="manage-category overflow-auto bg-white/10 backdrop-blur-lg shadow-lg p-4 rounded-lg text-white text-center ">
          <table className="table-auto w-full border-collapse">
            <thead className="bg-white/10">
              <tr>
                <th className="p-2">SL</th>
                <th className="p-2">Category Photo</th>
                <th className="p-2">Category Name</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {category &&
                category.map((item, index) => (
                  <tr key={item._id} className="even:bg-white/10 group ">
                    <td className="p-2">
                      <Fade triggerOnce delay={index * 150}>
                        {index + 1}
                      </Fade>
                    </td>
                    <td className="p-2 ">
                      <Fade triggerOnce delay={index * 150}>
                        <div className="flex justify-center">
                          <img
                            src={item.categoryImage}
                            alt={item.name}
                            className="w-36 h-28 rounded-xl object-cover group-hover:scale-110 shadow-md my-2 transition-all ease-out duration-300"
                          />
                        </div>
                      </Fade>
                    </td>
                    <td className="p-2 w-1/2">
                      <Fade triggerOnce direction="up" delay={index * 150}>
                        {item.name}
                      </Fade>
                    </td>
                    <td className="p-2">
                      <Fade triggerOnce delay={index * 150}>
                        <div className="flex flex-col md:flex-row gap-2">
                          <AddCategoryModal
                            item={item}
                            refetch={refetch}
                          ></AddCategoryModal>
                          <button
                            onClick={() => handleDelete(item)}
                            className="alert-button-error md:ml-4"
                          >
                            Delete
                          </button>
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

export default ManageCategory;
