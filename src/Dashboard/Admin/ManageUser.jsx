import React, { useState, useEffect } from "react";
import { showAlert, showToast } from "../../Utils/alerts";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import "../dashboard.css";
import LoadingSpin from "../../components/LoadingSpin";
import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["manageUsers"],
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
      }
    } catch (error) {
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
      <Helmet>
        <title>User Management | Medi Nest</title>
      </Helmet>
      <h2 className="text-2xl font-semibold mb-4 text-white">
        User Management
      </h2>
      {isLoading ? (
        <LoadingSpin></LoadingSpin>
      ) : (
        <div className="manage-users overflow-auto bg-white/10 backdrop-blur-lg shadow-lg p-4 rounded-lg border border-white/20 text-white text-center">
          <table className="table-auto w-full border-collapse">
            <thead className="bg-white/10">
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Role</th>
                <th className="border-l border-white/30 p-2">Update Role</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((item, i) => (
                  <tr key={item._id} className="even:bg-white/10">
                    <td className="p-2">
                      <Fade triggerOnce delay={i * 100}>
                        {item.name}
                      </Fade>
                    </td>
                    <td className="p-2">
                      <Fade triggerOnce delay={i * 100}>
                        {item.email}
                      </Fade>
                    </td>
                    <td className="p-2">
                      <Fade triggerOnce delay={i * 100}>
                        <input
                          value={item.role.toUpperCase()}
                          disabled
                          className="bg-transparent text-center"
                        />
                      </Fade>
                    </td>
                    <td className="border-l border-white/30 p-2">
                      <Fade triggerOnce delay={i * 100}>
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

export default ManageUser;
