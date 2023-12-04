import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaTrash, FaUpload } from 'react-icons/fa';
import Button from '../Button';
import Swal from 'sweetalert2';
import Title from '../Title';

const ManageContest = () => {
  const[user,setUser] = useState([])
  // const [datas,setDatas] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:3000/add`)
    .then(res => res.json())
    .then(data => setUser(data))
  },[])
  console.log(user)
  // useEffect(()=>{
  //   fetch(`http://localhost:3000/users`)
  //   .then(res => res.json())
  //   .then(data => setUser(data))
  // },[])
  const handleDelete = (id) => {
    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this user!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Make a DELETE request to the server
        fetch(`http://localhost:3000/users/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            // Update the user state by removing the deleted user
            setUser((prevUsers) => prevUsers.filter((user) => user._id !== id));
            // Show success message
            Swal.fire('Deleted!', 'The user has been deleted.', 'success');
          })
          .catch((error) => {
            console.error('Error deleting user:', error);
            // Show error message
            Swal.fire('Error', 'Could not delete the user.', 'error');
          });
      }
    });
  };
  const handleConfirm =(data) =>{
    console.log(data)
      fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json()
      )
      .then((data) => {
        console.log(data);
      });
      fetch(`http://localhost:3000/add/${data._id}`, {
    method: 'PUT', // or 'PATCH' depending on your server implementation
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
      status: 'approved', // Modify this based on your server data structure
    }),
  })
    .then((res) => res.json())
    .then((updatedData) => {
      console.log(updatedData);
      // You might want to update the user state or take other actions here
    })
    .catch((error) => {
      console.error('Error updating status:', error);
      // Show error message if needed
    });
  };

  
  return (
    <div>
      <div className="overflow-x-auto">
        <Title text="ALL CONTEST"></Title>
        <h3 className='text-center text-2xl'>Contests:{user.length}</h3>
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
      {
      user.map((use,index)=>
     
          <tr key={use._id}>
        <th>{index+1}</th>
        <td>{use.contestName}</td>
        <td>
           <button onClick={()=>handleDelete(use._id)}>
           <FaTrash className='text-red-600'></FaTrash>
           </button>
        </td>
 
        <td>
            <h2>{use.shortDescription}</h2>
        </td>
        <td>
            <button className='bg-orange-400 text-white p-2' onClick={()=>handleConfirm(use)}>Confirm</button>
        </td>
      </tr>

      )
      }
    
    </tbody>
  </table>
</div>
    </div>
  );
};

export default ManageContest;