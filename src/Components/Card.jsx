import React from 'react';

const Card = ({data}) => {
  const{contestName,image,attemptedCount,shortDescription} = data;
  return (
    <div>
        <div className="card  glass">
          
  <figure><img className='h-42' src={image} alt="car!"/></figure>
  <div className="card-body">
  <h2 className='font-jost font-bold text-xl'>{contestName}</h2>
    <h2 className="font-popi">Total Attempt:{attemptedCount}</h2>
    <p>{shortDescription}</p>
   
  </div>
</div>
    </div>
  );
};

export default Card;