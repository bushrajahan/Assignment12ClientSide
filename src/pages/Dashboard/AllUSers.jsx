import React from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { axiosSecure } from "../../Components/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["register"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "https://assignment12-client-side-from.vercel.app/register"
      );
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`/register/admin/${user._id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire("Success", "User is now an admin.", "success");
        }
      })
      .catch((error) => {
        console.error("Error making admin:", error);
        Swal.fire("Error", "Could not make the user an admin.", "error");
      });
  };

  const handleMakeUser = (user) => {
    axiosSecure
      .patch(`/register/user/${user._id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire("Success", "User role updated to User.", "success");
        }
      })
      .catch((error) => {
        console.error("Error updating user role to user:", error);
        Swal.fire("Error", "Could not update user role to User.", "error");
      });
  };

  const handleMakeCreator = (user) => {
    axiosSecure
      .patch(`/register/creator/${user._id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire("Success", "User role updated to Creator.", "success");
        }
      })
      .catch((error) => {
        console.error("Error updating user role to creator:", error);
        Swal.fire("Error", "Could not update user role to Creator.", "error");
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(
            `https://assignment12-client-side-from.vercel.app/register/${id}`
          )
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
            Swal.fire("Error", "Could not delete the user.", "error");
          });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3lx">ALL USERS</h2>
        <h2 className="text-3xl">Total USERS:{users.length}</h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={item._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.name}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        className="btn btn-ghost btn-xs"
                        onClick={() => handleMakeAdmin(item)}
                      >
                        <FaUsers className="text-red-400"></FaUsers>
                      </button>
                    )}
                  </td>
                  <td>
                    {item.role === "user" ? (
                      <button
                        className="btn btn-ghost btn-xs"
                        onClick={() => handleMakeCreator(item)}
                      >
                        Make Creator
                      </button>
                    ) : (
                      <button
                        className="btn btn-ghost btn-xs"
                        onClick={() => handleMakeUser(item)}
                      >
                        Make User
                      </button>
                    )}
                  </td>
                  <th>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleDelete(item._id)}
                    >
                      <FaTrash className="text-red-400"></FaTrash>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
