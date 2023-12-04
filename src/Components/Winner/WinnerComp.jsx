import React from 'react';
import Title from '../Title';

const WinnerComp = ({data}) => {
  const{contestName,image,attemptedCount,shortDescription,organizer,prize,motivation,winning} = data;
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
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default WinnerComp;