import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CreatorComp from '../Components/Creator/CreatorComp';
import Title from '../Components/Title';
import useData from '../Components/Hook/UseData';

const Creator = () => {
  const [datas] = useData();
  return (
    <div className='bg-base-200'>
       <div className='text-center'>
       <Title text={"Thousand of prizez "  } > </Title>
       <Title win={"For your To Win" } ></Title>
       </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
       {
        datas.slice(0,3).map(data=>
            <CreatorComp key={data.id} data={data}></CreatorComp>
          )
       }
    </div>
    </div>
  );
};

export default Creator;