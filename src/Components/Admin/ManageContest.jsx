import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaTrash, FaUpload } from "react-icons/fa";
import Button from "../Button";
import Swal from "sweetalert2";
import Title from "../Title";


const ManageContest = () => {
  const [user, setUser] = useState([]);

  const[Error,setError] = useState([])

  // const [datas,setDatas] = useState([])
  useEffect(() => {
    fetch(`http://localhost:300/add`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  const fetchData = async (id) => {
    try {
      const response = await fetch(`http://localhost:300/users/${id}`);
      const data = await response.json();
      setError(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(user);
  // useEffect(()=>{
  //   fetch(`https://assignment12-client-side-from.vercel.app/users`)
  //   .then(res => res.json())
  //   .then(data => setUser(data))
  // },[])
  const handleDelete = (id) => {
    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Make a DELETE request to the server for users
        fetch(`http://localhost:300/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        // Make a DELETE request to the server for add/ad
        fetch(`http://localhost:300/add/ad/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // Update the user state by removing the deleted user
            setUser((prevUsers) => prevUsers.filter((user) => user._id !== id));
            // Show success message
            Swal.fire("Deleted!", "The user has been deleted.", "success");
          })
          .catch((error) => {
            console.error("Error deleting user from add/ad:", error);
            // Show error message
            Swal.fire("Error", "Could not delete the user from add/ad.", "error");
          });
      }
    });
  };
  
  const handleConfirm = (data, id) => {
    const filteredData = Error.find((item) => item._id === id);
  
    if (filteredData) {
      Swal.fire({
        title: "OOPs!!!",
        text: "Data is already added!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#3085d6",
      });
    } else {
      // Remove the _id property from the data object
      const { _id, ...postData } = data;
  
      fetch("http://localhost:300/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })
        .then((res) => res.json())
        .then((responseData) => {
          if (responseData.error) {
            // Display an error message
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Data already exists",
            });
          } else {
            // Display a success message
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Data added successfully!",
            });
            // Refresh the user data after successful addition
            fetch(`http://localhost:300/add`)
              .then((res) => res.json())
              .then((data) => setUser(data))
              .catch((error) => console.error("Error fetching data:", error));
          }
        })
        .catch((error) => {
          console.error("Error adding data:", error);
          // Show error message
          Swal.fire("Error", "Could not add data.", "error");
        });
    }
  };
  

  return (
    <div>
      <div className="overflow-x-hidden">
        <Title text="ALL CONTEST"></Title>
        <h3 className="text-center text-2xl">Contests:{user.length}</h3>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>ContestName</th>
              <th>Remove</th>

              <th>Description</th>
              <th>Confirm</th>
            </tr>
          </thead>
          <tbody>
            {user.map((use, index) => (
             
              <tr key={use._id}>
                <th>{index + 1}</th>
                <td>{use.contestName}</td>
                <td>
                  <button onClick={() => handleDelete(use._id)}>
                    <FaTrash className="text-red-600"></FaTrash>
                  </button>
                </td>

                <td>
                  <h2>{use.shortDescription}</h2>
                </td>
                <td>
                  <button
                    className="bg-orange-400 text-white p-2"
                    onClick={() =>
                      
                      
                      handleConfirm(use,use._id)}
                
                  >
                   confirm 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageContest;
