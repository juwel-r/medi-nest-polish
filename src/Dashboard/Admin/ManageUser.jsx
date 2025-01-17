import React, { useState, useEffect } from "react";
import { showAlert, showToast } from "../../Utils/alerts";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import "../dashboard.css";

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await axiosSecure("/user");
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
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">User Role Management</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="manage-users overflow-auto bg-white/10 backdrop-blur-lg shadow-lg p-4 rounded-lg border border-white/20 text-white text-center">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-white/30 p-2">Name</th>
                <th className="border border-white/30 p-2">Email</th>
                <th className="border border-white/30 p-2">Role</th>
                <th className="border border-white/30 p-2">Update Role</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((item) => (
                  <tr key={item._id}>
                    <td className="border border-white/30 p-2">{item.name}</td>
                    <td className="border border-white/30 p-2">{item.email}</td>
                    <td className="border border-white/30 p-2">
                      <input
                        value={item.role.toUpperCase()}
                        disabled
                        className="bg-transparent text-center"
                      />
                    </td>
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

export default ManageUser;
