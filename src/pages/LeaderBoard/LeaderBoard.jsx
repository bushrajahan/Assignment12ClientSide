import React from 'react';
import  { useState, useEffect } from "react";
const LeaderBoard = () => {
  const [user,setUser]=useState([])
   useEffect(()=>{
         fetch(`https://assignment12-client-side-from.vercel.app/users`)
         .then(res => res.json())
         .then(data => setUser(data))
   },[])
   const [admin,setAdmin] = useState([])
   useEffect(()=>{
    fetch('https://assignment12-client-side-from.vercel.app/admin')
    .then(data=>data.json())
    .then(res =>setAdmin(res))
   },[])
   const [creator,setCreator] = useState([])
   useEffect(()=>{
    fetch('https://assignment12-client-side-from.vercel.app/creator')
    .then(data=>data.json())
    .then(res =>setCreator(res))
   },[])
  return (
    
    <div className='flex justify-center items-center flex-col md:flex-row'>
      <div className="card  bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/rykYfLX/dhd.webp" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Contests</h2>
    <p>{user.length}</p>
  
  </div>
</div>
<div className="card  bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/6BC31rK/person6.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Admin</h2>
    <p>{admin.length}</p>
  
  </div>
  <div className="card  bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/cNYzJgz/person5.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Creator</h2>
    <p>{creator.length}</p>
  
  </div>
</div>
    </div>
    </div>
  );
};

export default LeaderBoard;