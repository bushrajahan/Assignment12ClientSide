import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Title from "../Title";
import UseAuth from "../Auth/UseAuth";

const MyContestShow = () => {
  const [userr, setUser] = useState([]);
  const navigate = useNavigate();
  const { user } = UseAuth();

  useEffect(() => {
    fetch(
      `http://localhost:300/add/ad?email=${user?.email}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this userr!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:300/add/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            setUser((prevUsers) =>
              prevUsers.filter((userr) => userr._id !== id)
            );
            Swal.fire("Deleted!", "The userr has been deleted.", "success");
          })
          .catch((error) => {
            console.error("Error deleting userr:", error);
            Swal.fire("Error", "Could not delete the userr.", "error");
          });
      }
    });
  };

  const handleConfirm = (id) => {
    navigate(`/dashboard/update/${id}`);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <Title text="ALL CONTEST" />
        <h3 className="text-center text-2xl">Contests: {userr.length}</h3>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>ContestName</th>
              <th>Date</th>
              <th>Remove</th>
              <th>ContestType</th>
              <th>Confirm</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {userr.map((use, index) => (
              <tr key={use._id}>
                <th>{index + 1}</th>
                <td>{use.contestName}</td>
                <td>{use.hours}</td>
                <td>
                  <button onClick={() => handleDelete(use._id)}>
                    <FaTrash className="text-red-600" />
                  </button>
                </td>
                <td>
                  <h2>{use.contestType}</h2>
                </td>
                <td>
                  <button
                    className="bg-red-400 p-2"
                    onClick={() => handleConfirm(use._id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <h3>{use.status}</h3>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={() => navigate("/dashboard/submit")}
          type="submit"
          className="flex justify-center items-center mt-6 px-4 py-2 font-bold text-white bg-pink-700 rounded-full hover-bg-green-700 focus:outline-none focus:ring"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MyContestShow;
