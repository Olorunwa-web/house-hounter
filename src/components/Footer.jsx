import React from 'react'
import houselogo from '../assets/svg/logo.svg';
import facebookIcon from '../assets/svg/facebookIcon.svg';
import twitterIcon from '../assets/svg/twitterIcon.svg';
import instagramIcon from '../assets/svg/instagramIcon.svg';
import { footerLink } from '../db'
import {motion as Motion } from 'framer-motion';


const Footer = () => {
  return (
    <>
      <section className='mt-7 pb-14'>
        <section className='px-4 md:px-10 max-w-screen-xl mx-auto'>
            <div className='flex flex-col justify-between gap-y-8 md:gap-6 lg:gap-0 md:flex-row'>
                <div className='w-full md:w-1/2  lg:w-1/4 '>
                    <div className='flex items-center gap-3'>
                        <img src={houselogo} className='w-8' alt="" />
                        <span className='text-[#1B1C57] font-bold text-base  '>Hounter</span>
                    </div>
                    <p className='my-3 leading-[23px] lg:w-[300px] text-[#626687] text-sm font-normal '>We provide information about properties such as houses, villas and apartments to help people find their dream home</p>
                    <div className='mt-4 flex gap-6'>
                        <img src={facebookIcon} alt="" className='w-5 h-5' />
                        <img src={twitterIcon} alt="" className='w-5 h-5' />
                        <img src={instagramIcon} alt="" className='w-5 h-5' />
                    </div>
                </div>
                <div className='w-full  lg:w-3/5 '>
                    <div className='flex flex-col md:flex-row md:gap-0 gap-8 justify-between '>
                        {footerLink.map((foot) => (
                            <div key={foot.id} className='flex flex-col gap-5'>
                                <h1 className='text-[#0E1735] text-[17px] font-semibold'>{foot.title}</h1>
                                <div className='flex flex-col gap-4'>
                                    {foot?.link.map((lik) =>(
                                        <Motion.a
                                         whileHover={{x: 17}}
                                         transition={{
                                           duration: 0.27,
                                           
                                       }}
                                        href="" className='text-sm text-[#888B97] font-normal '>{lik.link1}</Motion.a>
                                    ))}
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
      </section>
    </>
  )
}

export default Footer