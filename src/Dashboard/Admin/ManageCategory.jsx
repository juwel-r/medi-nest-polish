import React from "react";
import LoadingSpin from "../../components/LoadingSpin";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { showAlert, showToast } from "../../Utils/alerts";
import { useQuery } from "@tanstack/react-query";

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

  const handleRoleChange = async (updateRole, name, email) => {
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
      <h2 className="text-2xl font-semibold mb-4 text-white">
        Category Management
      </h2>
      {isLoading ? (
        <LoadingSpin></LoadingSpin>
      ) : (
        <div className="manage-category overflow-auto bg-white/10 backdrop-blur-lg shadow-lg p-4 rounded-lg border border-white/20 text-white text-center ">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-white/30 p-2">SL</th>
                <th className="border border-white/30 p-2">Photo</th>
                <th className="border border-white/30 p-2">Name</th>
                <th className="border border-white/30 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {category &&
                category.map((item, index) => (
                  <tr key={item._id}>
                    <td className="border border-white/30 p-2">{index + 1}</td>
                    <td className="border border-white/30 p-2">
                      <img
                        src={item.categoryImage}
                        alt={item.name}
                        className="w-16 h-16 rounded-full"
                      />
                    </td>
                    <td className="border border-white/30 p-2">{item.name}</td>
                    <td className="border border-white/30 p-2">
                      <form>
                        <select
                          defaultValue={item.role}
                          onChange={(e) =>
                            handleRoleChange(
                              e.target.value,
                              item.name,
                              item.email
                            )
                          }
                          className="p-2 pt-1 border border-white/30 rounded custom-select outline-none"
                        >
                          <option value="user">User</option>
                          <option value="seller">Seller</option>
                          <option value="admin">Admin</option>
                        </select>
                      </form>
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
