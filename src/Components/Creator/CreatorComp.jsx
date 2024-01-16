import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreatorComp = ({data}) => {
  const navigate = useNavigate()
  const{contestName,image,attemptedCount,shortDescription,organizer,prize,motivation,winning} = data;
  const handleClick = () =>{
      navigate(`/allContest`)
  }
  return (
    <div className='bg-gradient-to-t from-transparent to-black '
    
    style={{backgroundImage:`url(${image})`, backgroundRepeat:'no-repeat', backgroundSize:'100% 100%', transition: 'background-size 0.5s ease-in-out' }}
>
      <div className="card flex flex-row  hover:scale-75 " >
  <figure className="w-full h-full">
    <img src={winning} alt="Shoes" className="md:w-[200px] md:h-96 " />
  </figure>
  <div className="card-body items-center  font-popi text-white">
    <h2 className="card-title font-jost  ">{contestName}</h2>
    <p className='font-bold text-3xl'>Winner: {organizer}</p>
    <p className='font-bold '>Prize: {prize}</p>
    <div className="card-actions">
      <button className="btn btn-outline text-white" onClick={handleClick}>Explore</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default CreatorComp;