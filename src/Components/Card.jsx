import React from 'react';
import Button from './Button';

const Card = ({data}) => {
  const{contestName,image,attemptedCount,shortDescription,winning} = data;
  return (
    <div>
        <div className="card  glass">
          
  <figure><img className='h-48' src={image} alt="car!"/></figure>
  <div className="card-body">
  <h2 className='font-jost font-bold text-xl'>{contestName}</h2>
    <h2 className="font-popi">Total Attempt:{attemptedCount}</h2>
   <p>{shortDescription.slice(0,47)}..... 
   <span className='border-b-4  border-orange-400 '>detils</span>
   </p>
    
     
  </div>
</div>
    </div>
  );
};

export default Card;