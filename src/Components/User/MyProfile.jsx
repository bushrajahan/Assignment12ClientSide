import React, { useEffect, useState } from 'react';
import UseAuth from '../Auth/UseAuth';
import { Chart } from "react-google-charts";
import ProfileComp from './ProfileComp';

const MyProfile = () => {
   const {user} = UseAuth()
   const[data,setData] = useState([])
   const [total,setTotal] = useState([])
   useEffect(()=>{
    fetch(`http://localhost:300/payments/email/${user.email}`)
    .then(res => res.json())
    .then(data => setData(data))
   },[user?.email])
 useEffect(()=>{
   fetch(`http://localhost:300/payments/${user?.email}`)
   .then(res => res.json())
   .then(data => setTotal(data))
 },[])
   const Data = [
    ["Category", "Count"],
    ["AttemptedCount", total.length],
    ["Win", data.length],
    
  ];


  const options = {
    title: `Total Attempt ${total.length}  vs winning ${data.length}`,
  };
  const{handleUpdateProfile} = UseAuth();
  const handleSubmit =(e)=>{
           e.preventDefault();
           const name = e.target.name.value;
           const photo = e.target.photo.value;
           handleUpdateProfile(name,photo)
  }
  return (
    <div className='flex flex-col md:flex-row justify-between items-center'>
   <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <ProfileComp></ProfileComp>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name ='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">photo</span>
          </label>
          <input type="text" name='photo ' placeholder="photo URL" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn border-t-orange-500">Update</button>
        </div>
      </form>
    </div>
  </div>
</div>
<div>
<Chart
        chartType="PieChart"
        data={Data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
</div>
</div>

  );
};

export default MyProfile;