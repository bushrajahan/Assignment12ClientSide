import React from 'react';

const Title = ({text,win}) => {
  return (
    <div>
      <h1 className='font-jost text-[#ff5500] text-5xl font-bold'>{text} <span className='font-jost text-black text-5xl font-bold'>{win}</span> </h1>
    </div>
  );
};

export default Title;