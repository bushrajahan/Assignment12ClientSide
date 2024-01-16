import React from 'react';
import Title from '../Title';
import { useNavigate } from 'react-router-dom';

const WinnerComp = ({data}) => {
  const navigate  =useNavigate()
  const{contestName,image,attemptedCount,shortDescription,organizer,prize,motivation,winning} = data;
  const handleClick = () =>{
    navigate(`/allContest`)
  }
  return (
    
    <div>
      
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row ">
    <img src={winning} className="max-w-sm rounded-lg shadow-2xl mr-20 md:w-[700px] md:h-[500px]" />
    <div>
      <Title text={"MEET OUR "} win={"HEROES"}></Title>
      <h1 className="text-xl font-bold font-popi text-orange-500">WINNERS THE CUP {contestName}</h1>
      <p className='text-xl font-bold font-popi'>{organizer}</p>
      <p className="py-6">{shortDescription}{motivation}</p>
      <button className="btn btn-primary" onClick={handleClick}>Get Started</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default WinnerComp;