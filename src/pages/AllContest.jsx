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
  const[data,setDatas] = useState([])
  const[datas] = useData();
  const[active,setActive] = useState(' ')
  useEffect(()=>{
    fetch('http://localhost:300/users')
    .then(res => res.json())
    .then(data => setDatas(data))
  },[])


  const game = datas.filter(item => item.contestType =='Gaming')
  const Aritcal = datas.filter (item => item.contestType == 'Article')
  const Medical = datas.filter (item => item.contestType == 'Medical')
  const [categoryInput,setCategoryInput] = useState('')
  const handleSearch = () =>{
             fetch(`http://localhost:300/search?contestType=${categoryInput}`)
             .then(res =>res.json())
             .then(data =>{ setDatas(data)
               setActive(data)
              
            })
           
  }

  return (
    <div className='flex  flex-col'>
      
      
      <Advetise></Advetise>
      <div className="join flex justify-center items-center my-10">
  <input className="input input-bordered join-item"
  id='categoryInput'
  name='categoryInput'
  value={categoryInput}
  onChange={(e) => {
    const inputValue = e.target.value;
    const firstLetterCapitalized = inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
    setCategoryInput(firstLetterCapitalized);
  }}
  placeholder="search............"/>
  <button className="btn join-item rounded-r-full bg-orange "  onClick={()=>handleSearch()}>Search</button>
</div>
     <div className='flex justify-center items-center '> 
     <div role="" className="tabs  tabs-boxed ">
  <input type="radio" name="my_tabs_1" role="tab" className="tab text-orange-500 lg:ml-[590px]" aria-label="ALL" defaultChecked />
  <div role="tabpanel" className="tab-content p-10">
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-base-200  shadow-xl'>
        {
          data.map(service =>
               <Services key={service.id} data={service}></Services>
            
            )
        }

       </div>
  </div>
 
  <input type="radio" name="my_tabs_1" role="tab" className="tab mx-auto" aria-label="Gaming"  />
  <div role="tabpanel" className="tab-content p-10">
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-base-200  shadow-xl'>
        {
          game.map(service =>
               <Services key={service.id} data={service}></Services>
            
            )
        }

       </div>
  </div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab mx-auto" aria-label="Article"/>
  <div role="tabpanel" className="tab-content p-10">
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-base-200  shadow-xl'>
        {
          Aritcal.map(service =>
               <Services key={service.id} data={service}></Services>
            
            )
        }

       </div>
  </div>
  <input type="radio" name="my_tabs_1" role="tab" className="tab mx-auto" aria-label="Medical"  />
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