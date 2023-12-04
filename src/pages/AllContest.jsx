import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import { useState } from 'react';
import { useEffect } from 'react';
import Title from '../Components/Title';
import Services from '../Components/Services';
import { data } from 'autoprefixer';
import useData from '../Components/Hook/UseData';
import Advetise from './advetise';


const AllContest = () => {
  // const[services,setService] = useState([])
  // useEffect(()=>{
  //   fetch('/items.json')
  //   .then(res => res.json())
  //   .then(data => setService(data))
  // },[])
  const[datas] = useData()
  const game = datas.filter(item => item.contestType =='Gaming')
  const Aritcal = datas.filter (item => item.contestType == 'Article')
  const Medical = datas.filter (item => item.contestType == 'Medical')
  return (
    <div className='flex  flex-col'>
      
      
      <Advetise></Advetise>
     <div className='flex justify-center items-center '> 
     <div role="" className="tabs  tabs-boxed ">
  <input type="radio" name="my_tabs_1" role="tab" className="tab text-orange-500 lg:ml-[590px]" aria-label="ALL" defaultChecked />
  <div role="tabpanel" className="tab-content p-10">
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-base-200  shadow-xl'>
        {
          datas.map(service =>
               <Services key={service.id} data={service}></Services>
            
            )
        }

       </div>
  </div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab mx-auto" aria-label="Gaming" />
  <div role="tabpanel" className="tab-content p-10">
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-base-200  shadow-xl'>
        {
          game.map(service =>
               <Services key={service.id} data={service}></Services>
            
            )
        }

       </div>
  </div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab mx-auto" aria-label="Artical" />
  <div role="tabpanel" className="tab-content p-10">
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-base-200  shadow-xl'>
        {
          Aritcal.map(service =>
               <Services key={service.id} data={service}></Services>
            
            )
        }

       </div>
  </div>
  <input type="radio" name="my_tabs_1" role="tab" className="tab mx-auto" aria-label="Medical" />
  <div role="tabpanel" className="tab-content p-10">
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-base-200  shadow-xl'>
        {
          Medical.map(service =>
               <Services key={service._id} data={service}></Services>
            
            )
        }

       </div>
  </div>
</div>
     </div>
       
    </div>
 
  );
};

export default AllContest;