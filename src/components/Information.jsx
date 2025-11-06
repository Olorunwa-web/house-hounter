import React , {useState, useEffect, useMemo} from 'react'
import { information } from '../db';
import imgbg1 from '../assets/images/image11.jpg';
import imagepost from '../assets/images/imagepost9.jpg';
import time from '../assets/svg/time.svg';
import bgblur1 from '../assets/images/bg-blur1.png';
import bgblur2 from '../assets/images/bg-blur2.png';
import {motion as Motion } from 'framer-motion';


const Information = () => {

    const words = "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house";

  
const postDate = useMemo(() => new Date("2025-10-31T00:00:00"), []);


  const [displayTime, setDisplayTime] = useState("");

  const calcReadingTime = (text) => {
    const words = text.split(" ").length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  const getRelativeTime = (date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) return "just now";
    if (diffInSeconds < 3600)
      return `${Math.floor(diffInSeconds / 60)} min ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)} hr ago`;

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  useEffect(() => {
  const updateTime = () => {
    const formatted = `${calcReadingTime(words)} | ${getRelativeTime(postDate)}`;
    setDisplayTime(formatted);
  };

  updateTime();
  const interval = setInterval(updateTime, 60000);
  return () => clearInterval(interval);
}, [words, postDate]);





  return (
    <>
      <section className='relative'>
        <section className='relative z-10 px-4 md:px-10 xl:px-15 max-w-screen-xl mx-auto'>
            <div>
                <div className="flex flex-col items-center gap-2">
                   <span className="bg-[#F59E0B] w-8 h-[2px] "></span>
                   <span className="text-sm text-[#F59E0B] font-medium ">See Tips And Trick From Our Partnership</span>
               </div>
               <div className='pb-4 flex flex-col items-center mb-3 gap-3'>
                  <h1 className="w-full md:w-[330px] py-2 text-center text-[#1B1C57] font-semibold text-xl lg:text-2xl">Find Out More About Selling And Buying Homes</h1>
                  <button className='mx-auto bg-[#10B981] px-3 py-3 text-sm text-white font-semibold rounded-3xl '>More Artikel</button>
               </div>
            </div>
            {/*  */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-7 mb-10'>
                <div className=''>
                    <div className='grid grid-cols-1 gap-9 md:gap-9'>
                        {information.map((info, index) =>(
                            <div key={info.id} className='flex sm:flex-row flex-col gap-5'>
                                <div className='flex-shrink- h-full'>
                                    <Motion.img 
                                       initial = {{ opacity: 0, x: -60 }}
                                       whileInView={{ opacity: 1, x: 0}}
                                       transition={{
                                         duration: 0.7,
                                         delay: index * 0.3
                                       }}
                                       viewport={{once: true, amount:0.3}}
                                    src={info.infoimage} alt="infoimage" className='w-full h-full sm:h-[130px] object-cover rounded-xl'/>
                                </div>
                                <Motion.div
                                 initial = {{ opacity: 0, y: 50 }}
                                 whileInView={{ opacity: 1, y: 0}}
                                 transition={{
                                   duration: 0.8,
                                   delay: index * 0.4
                                 }}
                                 viewport={{once: true, amount:0.3}}
                                >
                                    <div className='flex items-center gap-2 mb-2'>
                                        <img src={info.personImg} alt="personImg" className='w-8 h-8 rounded-full object-cover'/>
                                        <span className='text-sm font-normal text-[#3C4563]'>{info.name}</span>
                                    </div>
                                    <p className='sm:w-[300px] text-base font-medium text-[#1B1C57] mb-2'>{info.words}</p>
                                    <div className='flex items-center gap-[6px]'>
                                        <div className='flex items-center gap-2'>
                                            <img src={info.timeicon} alt="timeicon" className='w-4 h-4'/>
                                            <span className='text-sm font-normal text-[#888B97]'>{info.time}</span>
                                        </div>
                                        <span className='text-sm font-normal text-[#888B97] '>|</span>
                                        <span className='text-sm font-normal text-[#888B97]'>{info.date}</span>
                                    </div>
                                </Motion.div>
                            </div>
                        ))}
                    </div>
                </div>
                <Motion.div
                 initial = {{ opacity: 0, y: 70 }}
                 whileInView={{ opacity: 1, y: 0}}
                 transition={{
                  duration: 0.8,
                  delay: 0.4
                 }}
                 viewport={{once: true, amount:0.3}}
                className='flex flex-col gap-5 '>
                    <div className='w-full sm:h-[270px]'>
                        <img src= {imgbg1} alt="" className='w-full object-cover rounded-xl h-full ' />
                    </div>
                    <div className=''>
                        <div className=' flex items-center gap-2 mb-2'>
                            <img src={imagepost} alt="personImg" className='w-8 h-8 rounded-full object-cover'/>
                            <span className='text-sm font-normal text-[#3C4563]'>Cameron Williamson</span>
                        </div>
                        <h1 className='py-1 text-lg font-medium text-[#1B1C57] '>12 Things to Know Before Buying a House</h1>
                        <p className='text-sm font-normal leading-[23px] text-[#626687]'>Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house</p>
                        <div className='mt-4 flex items-center gap-[6px]'>
                            <img src={time} alt="timeicon" className='w-4 h-4'/>
                            <span className='text-sm font-normal text-[#888B97]'>{displayTime}</span>
                        </div>
                    </div>
                </Motion.div>
            </div>
        </section>
        {/*  */}
        <div className='absolute top-0 -tran w-full'>
            <img src= {bgblur1} alt="" />
        </div>
        <div className='absolute bottom-0 w-full'>
            <img src= {bgblur2} alt="" />
        </div>
      </section>

    </>
  )
}

export default Information