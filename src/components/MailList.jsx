import React from 'react'
import imagechair from '../assets/images/imageChair.jpg';
import imagepost12 from '../assets/images/image12.jpg';
import houseimage from '../assets/images/house.jpg';
import imagepost1 from '../assets/images/firstimage.jpg';
import bgimage2 from '../assets/images/bgimage2.png';
import emailicon from '../assets/svg/emailIcon.svg';
import imagehouse from '../assets/images/imagehouse.jpg';
import imagepost13 from '../assets/images/imagepost13.jpg';
import imagechair2 from '../assets/images/imagechair (2).jpg';
import imagepost14 from '../assets/images/imagepost8.jpg';
import {motion as Motion } from 'framer-motion';






const MailList = () => {
  return (
    <>
      <section className='my-18'>
        <section className='px-4 md:px-10 xl:px-15 max-w-screen-xl mx-auto '>
            <div className=' bg-cover bg-center sm:py-14 py-17  rounded-4xl bg-no-repeat w-full ' style={{ backgroundImage: `url(${bgimage2})`}}>
                <div className='relative w-11/12 mx-auto'>
                 <div className=''>
                      <div className='mx-auto  w-full sm:w-[320px]'>
                         <h1 className=' py-2 text-center text-[#1B1C57] font-semibold text-xl lg:text-2xl'>Subscribe For More Info And Update From Hounter</h1>
                      </div>
                      <div className='mt-3 relative mx-auto w-full sm:w-[400px] md:w-[410px] flex justify-center items-center'>
                         <input type="email" name="" id="" placeholder='Your email is here' className='w-full pl-10 pr-35 sm:pl-12 text-sm font-medium text-[#888B97]  bg-white outline-none py-4 rounded-3xl ' />
                         <div className='absolute left-3 sm:left-4'>
                            <img src={emailicon} alt="" className='w-4 h-4 ' />
                         </div>
                         <div className='absolute right-1'>
                            <button className='text-white text-sm rounded-3xl font-semibold px-3 py-3 bg-[#10B981] '>Subscribe Now</button>
                         </div>
                      </div>
                 </div>
                 {/*  */}
                 <Motion.div
                   initial = {{ opacity: 0, x:-40 }}
                   whileInView={{ opacity: 1, x: 0}}
                   transition={{
                     duration: 0.6,
                     delay: 0.2
                   }}
                 className='absolute hidden lg:block top-0 -translate-y-1/2  left-0 w-16 h-16 border-2 rounded-3xl  border-white '>
                    <img src={imagechair}  className='w-full h-full rounded-3xl' alt="" />
                 </Motion.div>
                 <Motion.div
                   initial = {{ opacity: 0, y:-40 }}
                   whileInView={{ opacity: 1, y: 0}}
                   transition={{
                     duration: 0.7,
                     delay: 0.4
                   }}
                 className='absolute hidden lg:block top-0 -translate-x-1/2 -translate-y-1/4  left-1/6 w-10 h-10 border-2 rounded-3xl  border-white '>
                    <img src={imagepost12}  className='w-full h-full rounded-3xl' alt="" />
                 </Motion.div>
                 <Motion.div 
                  initial = {{ opacity: 0, x: 30 }}
                   whileInView={{ opacity: 1, x: 0}}
                   transition={{
                     duration: 0.7,
                     delay: 0.4
                   }}
                 className='absolute hidden lg:block top-1/2  left-0 w-10 h-10 border-2 rounded-3xl  border-white '>
                    <img src={imagepost1}  className='w-full h-full rounded-3xl' alt="" />
                 </Motion.div>
                 <Motion.div 
                  initial = {{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0}}
                   transition={{
                     duration: 0.6,
                     delay: 0.2
                   }}
                 className='absolute hidden lg:block bottom-0 -translate-x-1/2 -translate-y-1/4  left-1/6 w-14 h-14 border-2 rounded-3xl  border-white '>
                    <img src={houseimage}  className='w-full h-full rounded-3xl' alt="" />
                 </Motion.div>
                  <Motion.div
                    initial = {{ opacity: 0, x:-40 }}
                    whileInView={{ opacity: 1, x: 0}}
                    transition={{
                     duration: 0.6,
                     delay: 0.2
                   }}
                  className='absolute hidden lg:block top-0 -translate-x-1/2 -translate-y-1/2 left-5/6  w-16 h-16 border-2 rounded-3xl  border-white '>
                    <img src={imagehouse}  className='w-full h-full rounded-3xl' alt="" />
                 </Motion.div>
                  <Motion.div
                    initial = {{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0}}
                    transition={{
                     duration: 0.7,
                     delay: 0.4
                   }}
                  className='absolute hidden lg:block top-1/4 -translate-x-1/2 -translate-y-1/2  right-0 w-10 h-10 border-2 rounded-3xl  border-white '>
                    <img src={imagepost13}  className='w-full h-full rounded-3xl' alt="" />
                 </Motion.div>
                  <Motion.div
                    initial = {{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0}}
                    transition={{
                     duration: 0.7,
                     delay: 0.4
                   }}
                  className='absolute hidden lg:block top-1/2 -translate-x-1/2 -translate-y-1/2  left-6/7 w-10 h-10 border-2 rounded-3xl  border-white '>
                    <img src={imagepost14}  className='w-full h-full rounded-3xl' alt="" />
                 </Motion.div>
                 <Motion.div 
                   initial = {{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0}}
                   transition={{
                     duration: 0.6,
                     delay: 0.2
                   }}
                 className='absolute hidden lg:block top-full -translate-x-1/2 -translate-y-1/2  right-0 w-14 h-14 border-2 rounded-3xl  border-white '>
                    <img src={imagechair2}  className='w-full h-full rounded-3xl' alt="" />
                 </Motion.div>
                </div>
            </div>
        </section>
      </section>
    </>
  )
}

export default MailList