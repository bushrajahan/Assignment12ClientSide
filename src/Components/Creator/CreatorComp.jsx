import React from 'react';

const CreatorComp = ({data}) => {
  const{contestName,image,attemptedCount,shortDescription,organizer,prize,motivation,winning} = data;
  return (
    <div className='bg-gradient-to-t from-transparent to-black '
    
    style={{backgroundImage:`url(${image})`, backgroundRepeat:'no-repeat', backgroundSize:'100% 100%', transition: 'background-size 0.5s ease-in-out' }}
>
      <div className="card flex flex-row flex-row-reverse hover:scale-75 " >
  <figure className="w-full h-full">
    <img src={winning} alt="Shoes" className="md:w-[200px] md:h-96 " />
  </figure>
  <div className="card-body items-center  font-popi text-white">
    <h2 className="card-title font-jost  ">{contestName}</h2>
    <p className='font-bold text-3xl'>Winner: {organizer}</p>
    <p className='font-bold '>Prize: {prize}</p>
    <div className="card-actions">
      <button className="btn btn-outline text-white">Explore</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default CreatorComp;