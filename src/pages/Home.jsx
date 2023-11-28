import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSliderStyle from 'react-awesome-slider/src/components/react-awesome-frame/index'
import Navbar from './Navbar';
import Button from '../Components/Button';
import PopularContest from './PopularContest';

// import 'react-awesome-slider/scss-builder'
// import 'react-awesome-slider/dist/autoplay'
const Home = () => {
  return (
  
       <div>
    <AwesomeSlider className=' w-screen h-screen'>
  
    <div className=" w-screen min-h-screen " style={{backgroundImage: 'url(https://i.ibb.co/vk4rSL3/pexels-albin-berlin-919073.jpg)'}} >
    <Navbar ></Navbar>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className=" text-white mt-7 md:ml-28  ">
    <div className="max-w-md " >
      <h1 className="mb-5 text-xl font-popi  font-semibold text-[#EC6623]">COULD YOU BE NEXT WINNER ?</h1>
      <h1 className="mb-5 font-jost text-7xl font-bold ">Nissan Sky <br /> R35 GTR</h1>
      <p>Car racing is a high-speed motorsport competition where skilled drivers maneuver specially designed vehicles on a closed circuit or designated course. </p>
       <div className='mt-10'>
       <Button  text={'GET STARTED'}></Button>
       </div>
    </div>
  </div>
</div>

<div className=" w-screen min-h-screen " style={{backgroundImage: 'url(https://i.ibb.co/Jd80rdY/car-4822843-1920.jpg)'}} >
    <Navbar ></Navbar>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className=" text-black mt-7 md:ml-28  ">
    <div className="max-w-md " >
      <h1 className="mb-5 text-xl font-popi  font-semibold text-[#EC6623]">COULD YOU BE NEXT WINNER ?</h1>
      <h1 className="mb-5 font-jost text-7xl font-bold ">Nissan Sky <br /> R35 GTR</h1>
      <p className='font-jost '>Car racing is a high-speed motorsport competition where skilled drivers maneuver specially designed vehicles on a closed circuit or designated course. </p>
       <div className='mt-10'>
       <Button  text={'GET STARTED'}></Button>
       </div>
    </div>
  </div>
</div>


  </AwesomeSlider>
  <PopularContest></PopularContest>
  </div>
  );
};

export default Home;