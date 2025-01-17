import React, { useState, useEffect } from "react";
import axios from "axios"; // Assuming axios is used for API calls

const ManageUser = () => {
  const [loading, setLoading] = useState(true);
  
  const { data = [] } = useQuery({
    queryKey: ["overview"],
    queryFn: async () => {
      try {
        const res = await axiosSecure("/payment?value=paid-pending");
        return res.data[0];
      } catch (error) {
        console.log(error);
      }
    },
  });


  // Handle role change
  const handleRoleChange = (email, newRole) => {
    axios
      .put("/api/users/update-role", { email, role: newRole }) // Replace with your actual API
      .then(() => {
        // Update the local state with the new role
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.email === email ? { ...user, role: newRole } : user
          )
        );
        alert("Role updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating role", error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">User Role Management</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Email</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user) => (
              <tr key={user.email}>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.role}</td>
                <td className="border p-2">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user.email, e.target.value)}
                    className="p-2 border rounded"
                  >
                    <option value="user">User</option>
                    <option value="seller">Seller</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageUser;
