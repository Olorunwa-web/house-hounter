import React from 'react'
import { Apartment } from '../db';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Virtual, Navigation,Mousewheel, FreeMode } from 'swiper/modules';
import 'swiper/css';
import { useSwiperController } from '../components/useSwiperController';


const Swipes3 = () => {

    const { currentSwiperRef } = useSwiperController();
    

  return (
    <>
        <div>
        <Swiper
         onSwiper={(swiper) => (currentSwiperRef.current = swiper)}
         direction= {'horizontal'}
            modules={[Virtual, Mousewheel, FreeMode, Navigation]}
            mousewheel={true}
            freeMode= {true}
            virtual
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                 1280: {
                    slidesPerView: 4,
                }, 
                1536: {
                    slidesPerView: 4,
                },
                1920: {
                    slidesPerView: 5,
                }
            }}
        >
            {Apartment.map ((apartment, index) =>(
                <SwiperSlide key={apartment.id} className={` ${index === 0 ?'xl:ml-30 md:ml-8 lg:ml-17 ': "" }`} >
                    <div className='w-[90%] mx-auto lg:w-[94% lg:w-[92%]'>
                      <div className='relative w-full h-full'>
                         <img src={apartment.estateImage} alt="" className='object-cover rounded-3xl w-full h-[350px] ' />
                         <div className={`absolute flex gap-2 bottom-5 left-4 ${apartment.fameClassNAME} px-4 py-[7px] rounded-full items-center`}>
                            <img src={apartment.fame} alt="" />
                            <span className={`text-sm font-medium ${apartment.fameTextClassNAME}`}>{apartment.famename}</span>
                         </div>
                      </div>
                      <div className='mt-4 flex flex-col gap-4'>
                         <div>
                            <p className='text-lg text-[#0E1735] font-medium'>{apartment.houseName}</p>
                            <div className='mt-2'>
                               <span className='text-base text-[#3C4563] text-medium'>{apartment.amount}</span>
                               <span className='text-xs text-[#3C4563] '>{apartment.days}</span>
                            </div>
                         </div>
                         <div className='mb-1 flex items-center  gap-6'>
                            <div className='flex items-center gap-2'>
                                <img src={apartment.bedroomicon} className='w-4 h-4' alt="" />
                                <span className='text-[#3C4563] text-sm text-medium '>{apartment.bedroom} Bedrooms</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={apartment.bathroomicon} className='w-4 h-4' alt="" />
                                <span className='text-[#3C4563] text-sm text-medium '>{apartment.bathroom} Bathroom</span>
                            </div>
                         </div>
                         <div className='flex items-center gap-3'>
                             <div className='w-9 h-9 rounded-full overflow-hidden'>
                                <img src={apartment.ownerimage} alt="" className='w-full h-full'  />
                             </div>
                             <div className=' flex flex-col'>
                                <p className='text-base text-[#0E1735] font-medium '>{apartment.name}</p>
                                <span className='mt-[-1px] text-sm text-[#888B97] font-medium'>{apartment.location}</span>
                             </div>
                         </div> 
                      </div>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
            
        </div>
    </>
  )
}

export default Swipes3