import React, { useEffect, useState } from 'react';
import Title from '../Components/Title';
import Card from '../Components/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import autoprefixer from 'autoprefixer';



const PopularContest = () => {
  const [datas, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/items.json')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err)); // Add error handling
  }, []);

  return (
    <div className='text-center my-20'>
      <Title className='text-center' text={'POPULAR'} win={'CONTEST'}></Title>
      <div className=' bg-slate-50 my-20'>
      <Swiper
        
        spaceBetween={30}
    
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,EffectCoverflow,Autoplay]}
    
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // Allow user interaction to pause autoplay
        }}
        breakpoints={
          {
            640:{
              slidesPerView:1,
              spaceBetween:20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            
          }
        }
      >
          {error ? (
            <p>Error fetching data: {error.message}</p>
          ) : (
            datas.slice(0, 6).map((data) => (
              <SwiperSlide key={data.id}>
                <Card data={data} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularContest;
