import React from 'react'
import Swipes4 from '../pages/Swipes4'

const Review = () => {
  return (
    <>
        <section className='md:mt-35 mb-4 mt-0  relative'>
            <section className='px-4 md:px-10 xl:px-15 max-w-screen-xl mx-auto'>
                <div className="flex flex-col items-center gap-2">
                   <span className="bg-[#F59E0B] w-8 h-[2px] "></span>
                   <span className="text-sm text-[#F59E0B] font-medium ">See Our Review</span>
               </div>
               <h1 className="py-2 text-center text-[#1B1C57] font-semibold text-xl lg:text-2xl">What Our User Say About Us</h1>
            </section>
            <Swipes4/>
        </section>
    </>
  )
}

export default Review