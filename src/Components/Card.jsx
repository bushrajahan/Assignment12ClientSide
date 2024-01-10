import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ data }) => {
  const  navigate  = useNavigate();
  const { contestName, image, attemptedCount, shortDescription, winning, _id } = data;

  const handleClick = () => {
    navigate(`/details/${_id}`);
  };

  return (
    <div>
      <div className="card glass">
        <figure>
          <img className="h-48" src={image} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="font-jost font-bold text-xl">{contestName}</h2>
          <h2 className="font-popi">Total Attempt: {attemptedCount}</h2>
          <p>
            {shortDescription.slice(0, 47)}.....
            <button className='border-b-4 border-orange-400' onClick={handleClick}>
              details
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
