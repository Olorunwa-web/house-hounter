import React from 'react'
import bedroomIcon from '../assets/svg/bedroomIcon.svg';
import bathroomIcon from '../assets/svg/bathroomIcon.svg';
import carport from '../assets/svg/carport.svg';
import floor from '../assets/svg/floor.svg';
import imagepost1 from '../assets/images/firstimage.jpg';
import call from '../assets/svg/call.svg';
import bgblur1 from '../assets/images/bg-blur-1.png';
import bgblur2 from '../assets/images/bg-blur-2.png';
import furniture1 from '../assets/images/furniture1.jpg';
import furniture2 from '../assets/images/furniture2.jpg';
import furniture3 from '../assets/images/furniture3.jpg';
import {motion as Motion } from 'framer-motion';


const HouseTour = () => {
  return (
    <>
      <section className='my-20 relative'>
        <section className='px-4 md:px-10 xl:px-15 max-w-screen-xl mx-auto'>
            <div className='flex md:flex-row flex-col gap-y-9 justify-between w-full h-full items-center'>
                <div className='w-full basis-1/2'>
                    <Motion.div
                      initial = {{ opacity: 0, x: -60 }}
                      whileInView={{ opacity: 1, x: 0}}
                      transition={{
                        duration: 0.6,
                        delay:0.3
                      }}
                      viewport={{once: true, amount:0.3}}
                    className="flex items-center gap-2">
                      <span className="bg-[#F59E0B] w-8 h-[2px] "></span>
                      <span className="text-sm text-[#F59E0B] font-medium ">Ready To Sell!</span>
                   </Motion.div>
                   <div className='mt-3 pl-10'>
                      <Motion.h1
                        initial = {{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0}}
                        transition={{
                         duration: 0.7,
                         delay:0.4
                        }}
                        viewport={{once: true, amount:0.3}}
                      className='mb-3 text-[#1B1C57] font-semibold text-xl lg:text-2xl'>Let's Tour And See Our House!</Motion.h1>
                      <Motion.p
                        initial = {{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0}}
                        transition={{
                         duration: 0.8,
                         delay:0.5
                        }}
                        viewport={{once: true, amount:0.3}}
                      className='lg:w-[400px] text-[#626687] text-sm font-normal  '>Houses recommended by our partners that have been curated to become the home of your dreams!</Motion.p>
                      <div className='mt-4'>
                        <h3 className='text-[#1B1C57] text-base font-semibold leading-[28px] '>House Detail</h3>
                        <div className='flex flex-col gap-5 mt-3'>
                            <div className='flex gap-7'>
                                <div className='flex gap-4 items-center'>
                                    <img src={bedroomIcon} alt="bedroom icon" className='w-5 h-5' />
                                    <span className='text-[#3C4563] text-base font-medium'>4 Bedrooms</span>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={bathroomIcon} alt="bathroom icon" className='w-5 h-5' />
                                    <span className='text-[#3C4563] text-base font-medium'>2 Bathrooms</span>
                                </div>
                            </div>
                            <div className='flex gap-12'>
                                <div className='flex gap-3 items-center'>
                                    <img src={carport} alt="carport icon" className='w-5 h-5' />
                                    <span className='text-[#3C4563] text-base font-medium'>1 Carport</span>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={floor} alt="floor icon" className='w-5 h-5' />
                                    <span className='text-[#3C4563] text-base font-medium'>2 Floors</span>
                                </div>
                             </div>
                        </div>
                        <div className='my-6 w-[80%] h-[2px] bg-[#F0F3FD]' ></div>
                        <div className='flex lg:flex-row flex-col  gap-x-10 gap-y-7 items-start lg:items-center'>
                           <div className='flex items-center gap-3'>
                              <div className='w-11 h-11 rounded-full overflow-hidden'>
                                  <img src={imagepost1} alt="" className='w-full h-full'  />
                              </div>
                              <div className=' flex flex-col'>
                                  <p className='text-base text-[#0E1735] font-medium '>Dianne Russel</p>
                                  <span className='mt-[-1px] text-sm text-[#888B97] font-medium'>Manager Director</span>
                              </div>
                          </div> 
                          <Motion.button 
                           whileHover={{scale: 1.2}}
                           whileTap={{scale: 0.8}}
                          className='flex items-center gap-2 px-4 py-3 bg-[#10B981] rounded-3xl'>
                              <img src={call} alt="" className='w-4 h-4' />
                              <span className='text-white text-sm font-semidbold '>Contact Now</span>
                          </Motion.button>
                        </div>
                      </div>
                   </div>

                </div>
                <Motion.div
                 initial = {{ opacity: 0, y: 70}}
                 whileInView = {{opacity: 1, y: 0}}
                 transition={{ 
                  duration: 0.8,
                  delay: 0.4,                  
                 }}
                 viewport={{ once: true, amount: 0.4 }}
                className='w-full relative basis-1/2 lg:basis-2/3'>  
                  <div className='w-full' >
                    <video autoPlay playsInline loop muted className='w-full h-full rounded-md ' ><source src='https://res.cloudinary.com/dyz6uugbr/video/upload/v1761678315/7578544-uhd_3840_2160_30fps_1_ioiplg.mp4' type='video/mp4' /></video>
                  </div>
                  <div className='absolute botto left-0 hidden lg:block  -translate-x-1/6 -translate-y-4/6  '>
                    <img src= {furniture1} alt="" className='w-ful xl:w-60 lg:w-50 md: rounded-md h-full ' />
                  </div>
                  <div className='absolute botto left-1/2 hidden lg:block  -translate-x-1/2 -translate-y-4/7 '>
                    <img src= {furniture2} alt="" className='w-ful xl:w-50 lg:w-36 lg:h-25 xl:h-30  rounded-md object-cover h-ful ' />
                  </div>
                  <div className='absolute botto right-5 hidden lg:block -translate-y-4/7 '>
                    <img src= {furniture3} alt="" className='w-ful xl:w-50  lg:w-36 lg:h-25 xl:h-30  rounded-md object-cover h-ful ' />
                  </div>
                </Motion.div>
            </div>
        </section>
        {/*  */}
        <div>
            <img src={bgblur1} alt="bg blur" className='absolute -translate-y-1/2 top-0 right-0 z-[-1] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] '/>
        </div>
        <div>
            <img src={bgblur2}  alt="" className='absolute  top-0 right-0 z-[-1] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] ' />
        </div>
      </section>
    </>
  )
}

export default HouseTour