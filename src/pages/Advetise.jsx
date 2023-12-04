import React, { useState, useEffect } from 'react';
import Title from '../Components/Title';
import WinnerComp from '../Components/Winner/WinnerComp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import useData from '../Components/Hook/UseData';

const Wineer = () => {
  const[datas] = useData()

  return (
    <div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[ EffectCoverflow, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 1000,
          disableOnInteraction: false, // Allow user interaction to pause autoplay
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
      >
        {datas.map((data) => (
          <SwiperSlide key={data.id}>
            <img src={data.image} className='w-screen h-80 mx-52' alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Wineer;
