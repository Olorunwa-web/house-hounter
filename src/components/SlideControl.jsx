import React from 'react'
import { useSwiperController } from './useSwiperController';
import prevIcon from '../assets/svg/prev2.svg';

const SlideControl = () => {

     const { currentSwiperRef } = useSwiperController();

      const handlePrev = () => {
    const swiper = currentSwiperRef.current;
    if (swiper && swiper.slidePrev) swiper.slidePrev();
  };

  const handleNext = () => {
    const swiper = currentSwiperRef.current;
    if (swiper && swiper.slideNext) swiper.slideNext();
  };

  return (

    <>
      <div className='flex gap-3 '>
        <button onClick={handlePrev} className='bg-[#E0E3EB] w-10 h-9 flex justify-center items-center rounded-3xl cursor-pointer'><img src= {prevIcon} alt="" className='w-[6px]' /></button>
        <button onClick={handleNext} className='bg-[#E0E3EB] w-10 h-9 flex justify-center items-center rounded-3xl cursor pointer' ><img src={prevIcon} alt="" className='scale-x-[-1] w-[6px]' /></button>
      </div>
    </>
  )
}

export default SlideControl