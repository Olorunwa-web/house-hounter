import React, {useState} from 'react'
import { useSwiperController } from './useSwiperController';
import prevIcon from '../assets/svg/prev2.svg';
import {motion as Motion } from 'framer-motion';
import next from '../assets/svg/prev.svg';

const SlideControl = () => {

     const { currentSwiperRef } = useSwiperController();

     const [activeButton, setActiveButton] = useState(null);

      const handlePrev = () => {
    const swiper = currentSwiperRef.current;
    if (swiper && swiper.slidePrev) swiper.slidePrev();
    setActiveButton('prev');
  };

  const handleNext = () => {
    const swiper = currentSwiperRef.current;
    if (swiper && swiper.slideNext) swiper.slideNext();
    setActiveButton('next');
  };

  return (

    <>
      <div className='flex gap-3 '>
        <Motion.button
         whileTap={{ scale: 0.9 }}
         initial={false}
        onClick={handlePrev} className={` ${activeButton === 'prev'? 'bg-[#10B981]': 'bg-[#E0E3EB]'} w-10 h-9 flex justify-center items-center rounded-3xl cursor-pointer`}><img src= {activeButton === 'prev' ? next : prevIcon} alt="" className={`w-[6px] ${activeButton === 'prev' ? 'scale-x-[-1]': '' }`} /></Motion.button>
        <Motion.button 
        initial={false}
        whileTap={{ scale: 0.9 }}
        onClick={handleNext} className={` ${activeButton === 'next'? 'bg-[#10B981]': 'bg-[#E0E3EB]'} w-10 h-9 flex justify-center items-center rounded-3xl cursor-pointer`}><img src= {activeButton === 'next' ? next : prevIcon} alt="" className={`w-[6px]  ${activeButton === 'next' ? '': 'scale-x-[-1]' }`} /></Motion.button>
        {/* <button onClick={handleNext} className='bg-[#E0E3EB] w-10 h-9 flex justify-center items-center rounded-3xl cursor pointer' ><img src={prevIcon} alt="" className='scale-x-[-1] w-[6px]' /></button> */}
      </div>
    </>
  )
}

export default SlideControl