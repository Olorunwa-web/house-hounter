import React from 'react'
import { ReviewData } from '../db'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Virtual, Navigation,Mousewheel, FreeMode,Pagination } from 'swiper/modules';
import 'swiper/css';


const Swipes4 = () => {
  return (
    <>
    <div className='py-4 mt-1  relative'>
        <Swiper
            modules={[Virtual, Mousewheel, FreeMode, Navigation, Pagination]}
            mousewheel={true}
            freeMode= {true}
            centeredSlides={false}
            virtual
            
            breakpoints={{
              320: {
                  slidesPerView: 1,
                  spaceBetween: 25,
                },
                640: {
                    slidesPerView: 1.7,
                    spaceBetween: 25,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                },
                 1280: {
                    slidesPerView: 3,
                    spaceBetween: 45,
                },
                1536: {
                    slidesPerView: 2.7,
                    spaceBetween: 45,
                },
            }}
        >
            {ReviewData.map((review, index) => (
                <SwiperSlide key={review.id} className={`!overflow-visible ${index === 0 ?'ml-6 md:ml-0 ': "" }`} >
                    <div className='relative  w-[95%] mx-auto pb-40 md:pb-30 lg:pb-20 xl:pb-35  lg:w-[100%]'>
                        <div className='relativ w-full h-full'>
                            <div>
                               <img src={review.imagebg} alt="" className=' object-cover rounded-lg w-full h-[350px]'/>
                            </div>
                            <div className='absolute bottom-0 inset-0 z-10 left-1/2 w-full -translate-x-1/2  translate-y-2/5' >
                                <div className='mx-auto w-[85%] rounded-xl p-4 lg:p-6 bg-white shadow-lg '>
                                    <div>
                                    <h1 className='text-lg text-[#1B1C57] pb-1 leading-6 font-semibold '>{review.title}</h1>
                                    <p className='py-2 text-sm text-[#626687] font-normal '>{review.description}</p>
                                    <div className='mt-4 flex justify-between items-center'>
                                        <div className='flex items-center gap-3'>
                                            <div>
                                                <img src={review.image} alt="" className='w-10 h-10 rounded-full object-cover'/>
                                            </div>
                                            <div>
                                                <h2 className='text-[#0E1735] font-medium text-sm'>{review.name}</h2>
                                                <span className='mt-[-2px] text-sm font-medium text-[#888B97]'>{review.position}</span>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <div>
                                                <img src={review.star} alt="" className='w-5 h-5' />
                                            </div>
                                            <div>
                                                <span className='pt-3 text-lg text-[#3C4563] font-semibold'>{review.rating}</span>
                                            </div>
                                        </div>
                                    </div>

                                    </div>
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

export default Swipes4