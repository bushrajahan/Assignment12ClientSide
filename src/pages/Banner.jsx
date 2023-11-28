import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSliderStyle from 'react-awesome-slider/src/components/react-awesome-frame/index'
import Navbar from './Navbar';

// import 'react-awesome-slider/scss-builder'
// import 'react-awesome-slider/dist/autoplay'
const Banner = () => {
  return (
    <div className=''>
    <AwesomeSlider cssModule={AwesomeSliderStyle}>
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    <div data-src="https://i.ibb.co/Nt4ysB5/banner2.jpg" />
    <div data-src="https://i.ibb.co/2dN223R/banner3.jpg" />

  </AwesomeSlider>
    </div>
  );
};

export default Banner;