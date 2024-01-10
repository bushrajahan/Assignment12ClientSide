import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
// import AwesomeSlider from 'react-awesome-slider';
import Navbar from './Navbar';
import Button from '../Components/Button';
import PopularContest from './PopularContest';
import Wineer from './Wineer';
import Creator from './Creator';
import { DataShow } from './DataShow';
import { TimeLineVisualization } from './TimeLineVisualization';
import { useNavigate } from 'react-router-dom';


// import 'react-awesome-slider/scss-builder'
// import 'react-awesome-slider/dist/autoplay'
const Home = () => {
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate(`/allContest`)
  }
  return (
  
    <div className='' >
    <AwesomeSlider className='max-w-fit h-[600px] md:h-full '>
  
    {/* Slide 1 */}
    <div className="w-full min-h-screen mx-auto" style={{backgroundImage: 'url(https://i.ibb.co/vk4rSL3/pexels-albin-berlin-919073.jpg) ', width:'full', }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-white lg:mt-7 md:ml-4 lg:ml-28">
        <div className="max-w-md">
          <h1 className="mb-5 text-xl md:text-lg font-popi font-semibold text-[#EC6623]">COULD YOU BE NEXT WINNER ?</h1>
          <h1 className="mb-5 font-jost  lg:text-4xl md:text-7xl font-bold">Nissan Sky <br /> R35 GTR</h1>
          <p>Car racing is a high-speed motorsport competition where skilled drivers maneuver specially designed vehicles on a closed circuit or designated course.</p>
          <div className=''>
            <button className='bg-orange-400 p-2 text-white' onClick={handleClick}>GET STARTED</button>
            <div className=' mt-7'>
           <div className="join">
           <input className="input input-bordered join-item" placeholder="search here" onChange={handleClick}/>
           <button className="btn join-item rounded-r-full bg-orange-400 text-white">Search</button>
          </div>
           </div>
          </div>
     

        </div>
      </div>
    </div>
  
    {/* Slide 2 */}
    <div className="w-full min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/vzwRFnk/pexels-gustavo-fring-3985163.jpg)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-black mt-7 md:ml-4 lg:ml-28">
        <div className="max-w-md">
          <h1 className="mb-5 text-xl md:text-lg font-popi font-semibold text-[#EC6623]">COULD YOU BE NEXT WINNER ?</h1>
          <h1 className="mb-5 font-jost text-4xl md:text-7xl font-bold">Innovating for a Healthier  <br /> Tomorrow</h1>
          <p className='font-jost text-white'>Are you a medical professional, researcher, or entrepreneur with a passion for innovation and a drive to improve healthcare? Then this medical contest is for you!</p>
          <div className='mt-10'>
            <button className='bg-orange-400 p-2 text-white' onClick={handleClick}>GET STARTED</button>
          </div>
          
        </div>
      </div>
    </div>
  
    {/* Slide 3 */}
    <div className="w-full min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/JxHMv6K/pexels-alina-vilchenko-3363111.jpg)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-black mt-7 md:ml-4 lg:ml-28">
        <div className="max-w-md">
          <h1 className="mb-5 text-xl md:text-lg font-popi font-semibold text-[#EC6623]">COULD YOU BE NEXT WINNER ?</h1>
          <h1 className="mb-5 font-jost text-4xl md:text-7xl font-bold">The Power of <br /> the Pen</h1>
          <p className='font-jost text-white'>Are you a wordsmith who loves to express your thoughts and ideas through writing? Then this article writing contest is for you!</p>
          <div className='mt-10'>
            <button className='bg-orange-400 p-2 text-white' onClick={handleClick}>GET STARTED</button>
          </div>
        </div>
      </div>
    </div>
  
  </AwesomeSlider>
  
    <PopularContest></PopularContest>
    <Creator></Creator>
    <Wineer></Wineer>
    <DataShow></DataShow>
    <TimeLineVisualization></TimeLineVisualization>
    </div>

  );
};

export default Home;