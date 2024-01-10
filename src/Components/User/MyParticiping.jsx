import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import UseAuth from "../Auth/UseAuth";
import { Navigate, useNavigate } from "react-router-dom";
import { Title } from "chart.js";

const MyParticiping = () => {
  const [uset, setUser] = useState([]);
  const[Upcoming,setUpconing] = useState([])
  const { user } = UseAuth();
  const navigate = useNavigate()
  const handleClick = (id) =>{
     navigate(`/allcontest`)
  }
  useEffect(() => {
    fetch(
      `http://localhost:300/payments/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [user?.email]);
  useEffect(()=>{
      fetch(`http://localhost:300/upcoming`)
      .then((res) => res.json())
      .then(data => setUpconing(data))
  },[])
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>ContestName</th>
              <th>Type</th>
              <th>price</th>
              <th>status</th>
              <th>Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {uset.map((man, index) => (
              <tr key={man._id}>
                <th>{index + 1}</th>
                <td>{man.contestName}</td>
                <td>{man.contestType}</td>
                <td>{man.price}$</td>
                <td>{man.status}</td>
                <td className="btn m-4 bg-yellow-400 text-white">
                  {man?.hours>0?'Running' : 'Closed'} 
                </td>
                <td className="btn" onClick={()=>handleClick(man._id)}>participate</td>
              </tr>
            ))}
            {/* row 2 */}

            {/* row 3 */}
          </tbody>
        </table>
     
      </div>
      <div className="mt-20">
      <h1 className='font-jost text-center text-[#ff5500] text-xl lg:text-5xl  font-bold'>Upcoming <span className='font-jost text-black text-xl lg:text-5xl font-bold'>Contest</span> </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-28">
          {
            Upcoming.map(data =>(
              <div key={data._id} className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={data.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-yellow-500">{data.title}</h2>
    <p className="text-yellow-500">{data.price}$</p>
  <p>{data.details.slice(0,160)}.......</p>
  </div>
</div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default MyParticiping;
