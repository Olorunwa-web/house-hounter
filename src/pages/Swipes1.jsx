import React from 'react'
import { house } from '../db'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Virtual, Navigation,Mousewheel, FreeMode } from 'swiper/modules';
import 'swiper/css';
import { useSwiperController } from '../components/useSwiperController';




const Swipes1 = () => {


     const { currentSwiperRef } = useSwiperController();


  return (

    <>
     <div>

      <Swiper
       onSwiper={(swiper) => (currentSwiperRef.current = swiper)}
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
        {house.map ((houses, index) => (
            <SwiperSlide key={houses.id} className={` ${index === 0 ?'xl:ml-30 md:ml-8 lg:ml-17 ': "" }`} >
                <div className='borde w-[90%] mx-auto lg:w-[94% lg:w-[92%]'>
                    <div className='relative w-full h-full'>
                        <img src={houses.estateImage} alt="" className='object-cover rounded-3xl w-full h-[350px] ' />
                       <div className={`absolute flex gap-2 bottom-5 left-4 ${houses.fameClassNAME} px-4 py-[7px] rounded-full items-center`}>
                          <img src={houses.fame} alt="" />
                          <span className={`text-sm font-medium ${houses.fameTextClassNAME}`}>{houses.famename}</span>
                       </div>
                    </div>
                    <div className='mt-4 flex flex-col gap-4'>
                        <div>
                          <p className='text-lg text-[#0E1735] font-medium'>{houses.houseName}</p>
                          <span className='text-base text-[#3C4563] text-medium'>{houses.amount}</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-9 h-9 rounded-full overflow-hidden'>
                                <img src={houses.ownerimage} alt="" className='w-full h-full'  />
                            </div>
                            <div className=' flex flex-col'>
                                <p className='text-base text-[#0E1735] font-medium '>{houses.name}</p>
                                <span className='mt-[-1px] text-sm text-[#888B97] font-medium'>{houses.location}</span>
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

export default Swipes1