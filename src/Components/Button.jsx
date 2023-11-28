import React from 'react';

const Button = ({text}) => {
  return (
    <div>
      <button className='bg-[#EC6623] text-white p-2 rounded font-popi font-semibold text-[14px]'>{text}</button>
    </div>
  );
};

export default Button;