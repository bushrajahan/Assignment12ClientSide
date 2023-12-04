import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaTrash, FaUpload } from 'react-icons/fa';
import Button from '../Button';
import Swal from 'sweetalert2';
import Title from '../Title';
import { useNavigate } from 'react-router-dom';
import { data } from 'autoprefixer';

const MyContestShow= () => {
  const[user,setUser] = useState([])
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate(`/dashboard/submit`)
  }

  useEffect(()=>{
    fetch(`http://localhost:3000/add`)
    .then(res => res.json())
    .then(data => setUser(data))
  },[])
  console.log(data)
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
  const handleConfirm =(id) =>{
    navigate(`/dashboard/update/${id}`)
  }
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
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
      user.map((use,index)=>
     
          <tr key={use._id}>
        <th>{index+1}</th>
        <td>{use.name}</td>
        <td>
           <button onClick={()=>handleDelete(use._id)}>
           <FaTrash className='text-red-600'></FaTrash>
           </button>
        </td>
 
        <td>
            <h2>{use.shortDescription}</h2>
        </td>
        <td>
            <button className='bg-red-400 p-2' onClick={()=>handleConfirm(use._id)}>Update</button>
        </td>
        <td>
            <h3>{use.status}</h3>
        </td>
      </tr>

      )
      }
    
    </tbody>
  </table>
  <button onClick={()=>handleClick()}
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