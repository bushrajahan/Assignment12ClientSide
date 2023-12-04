import React, { useEffect, useState } from 'react';
import UseAuth from '../Auth/UseAuth';

const ContestSubmitted = () => {
  const[data,setData] = useState([])
  const {user} = UseAuth();
  useEffect(()=>{
    fetch(`http://localhost:3000/pay?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setData(data))
  },[user?.email])
  console.log(data)
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Winner</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
        {
          data.length>0?
          data.map((datas,index) =>
            <tr key={datas._id}>
            <th>{index}</th>
            <td>{datas.name}</td>
            <td>{datas.type}</td>
            <td>{datas.winning}</td>
          </tr>
            
            ):<p>Loading.......</p>
        }
      {/* row 2 */}
  
    </tbody>
  </table>
</div>
    </div>
  );
};

export default ContestSubmitted;