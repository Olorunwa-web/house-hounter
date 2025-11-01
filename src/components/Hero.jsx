import bgImage from '../assets/images/bgimage.png';
import firstimage from '../assets/images/firstimage.jpg';
import secondimage from '../assets/images/secondimage.jpg';
import thirdimage from '../assets/images/thirdimage.jpg';
import fourthimage from '../assets/images/fourthimage.png';
import fifthimage from '../assets/images/fifthimage.jpg';
import locationicon  from '../assets/svg/Vector (2).svg';
import firstlogo from '../assets/images/firstlogo.png';
import secondlogo from '../assets/images/secondlogo.png';
import thirdlogo from '../assets/images/thirdlogo.png';
import fourthlogo from '../assets/images/fourthlogo.png';
import arrow from '../assets/svg/Vector (3).svg';
import {motion as Motion } from 'framer-motion';




const Hero = () => {


  return (
    <>
     <div className="absolute top-0 z-[-2] h-screen w-full bg-white bg-[radial-gradient(ellipse_50%_65%_at_0%_10%,#D1FAE5,rgba(255,255,255,0))]"></div>
      <section className=''>
        <section className='flex md:flex-row w-full h-auto md:h-[500px] lg:min-h-[680px] overflow-hidden flex-col items-center justify-between'>
            <div className='basis-1/2 w-full '>
             <div className='mt-[110px] lg:mt-0  px-4 xl:max-w-lg 2xl:px-0 mx-auto'>
                <Motion.div 
                 initial = {{ opacity: 0, y: 30}}
                 animate = {{opacity: 1, y: 0}}
                 transition={{ 
                  duration: 0.7,
                  delay: 0.3,                  
                 }}
                className=' flex flex-col gap-4 md:gap-5 mb-4 '>
                    <span className='text-2xl lg:text-4xl font-semibold text-[#1B1C57]'>Find The Place To Live <span className='' style={{WebkitTextStroke: '1px', WebkitTextFillColor: 'transparent',WebkitTextStrokeColor: '#1B1C57'}}>Your Dreams </span>Easily Here</span>
                    <p className='pt-2 font-normal text-base text-[#626687] '>Everything you need about finding your place to live will be here, where it will be easier for you</p>
                </Motion.div>
                <Motion.div 
                  initial = {{ opacity: 0, y: 30}}
                  animate = {{opacity: 1, y: 0}}
                  transition={{ 
                    duration: 0.7,
                    delay: 0.8,                  
                  }}
                className='relative my-8 '>
                    <input type="text" placeholder='Serach for the location you want!' className='w-full  py-3 pl-11 pr-[110px] outline-none  border-1 rounded-4xl border-[#E0E3EB] placeholder:text-[#888B97] placeholder:text-sm placeholder:font-medium placeholder:pl-4 '/>
                     <div className='absolute top-3.5 left-5 '>
                        <img src= {locationicon} alt="" className='w-5 h-5' />
                     </div>
                        <button  className='absolute right-1 top-1 bg-[#10B981] text-sm font-semibold text-white rounded-4xl flex items-center gap-3 px-3 py-[11px] '><span>Serach</span><img className='w-3 h-3' src= {arrow} alt="" /></button>
                </Motion.div>
                <div className='mt-4 pb-5 flex flex-col gap-4'>
                    <p className='text-base text-[#888B97] font-normal'>Our Partnership</p>
                    <div className='flex  gap-4'>
                        <div className='flex items-center justify-center'>
                          <Motion.img initial={{ opacity: 0,}} animate = {{opacity: 1}} transition={{duration: 1, delay: 1 }} src= {firstlogo} alt="" className='' />
                        </div>
                        <div className='flex items-center justify-center'>
                          <Motion.img initial={{ opacity: 0,}} animate = {{opacity: 1}} transition={{duration: 1, delay: 1 }} src= {secondlogo} alt="" className='' />
                        </div>
                        <div className='flex items-center justify-center'>
                          <Motion.img initial={{ opacity: 0,}} animate = {{opacity: 1}} transition={{duration: 1, delay: 1 }} src= {thirdlogo} alt="" className='' />
                        </div>
                        <div className='flex items-center justify-center'>
                          <Motion.img initial={{ opacity: 0,}} animate = {{opacity: 1}} transition={{duration: 1, delay: 1 }} src= {fourthlogo} alt="" className='' />
                        </div>
                    </div>
                </div>
             </div>
            </div>
            <div className='basis-1/2 w-full h-full ml-6 md:ml-0 relative'>
                  <img src= {bgImage} alt="" className='w-full h-[450px] md:h-full  object-cover aspect-3/2 rounded-bl-[50px]  md:rounded-bl-[70px]' />
                  <div className='absolute bottom-8 left-7 right- max-w-[calc(100vw-1.8rem)] '> 
                    <div className='flex items-center gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide '>
                    <div className='bg-white flex gap-3 items-center md:p-4 p-3 rounded-4xl  flex-shrink-0'>
                      <div className='flex -space-x-[22px] overflow-hidden'>
                        <img src= {thirdimage} alt="" className='w-12 h-12 border-3 border-white  rounded-full'/>
                        <img src= {secondimage} alt="" className='w-12 h-12 border-3 border-white  rounded-full'/>
                        <img src= {firstimage} alt="" className='w-12 h-12 border-3 border-white  rounded-full'/>
                      </div>
                      <div className='flex flex-col'>
                        <span className='text-base font-semibold text-[#1B1C57]'>1K+ People</span>
                        <span className='text-xs text-[#68799F] font-normal  '>Successfully Getting Home</span>
                      </div>
                    </div>
                    <div className='bg-white flex gap-3 items-center md:p-4 p-3 rounded-4xl min-w-max '>
                      <div className=''>
                        <img src= {fourthimage} alt="" className='w-12 h-12 border-3 border-white  rounded-3xl'/>
                      </div>
                      <div className='flex flex-col'>
                        <span className='text-base font-semibold text-[#1B1C57]'>56 Houses</span>
                        <span className='text-xs text-[#68799F] font-normal  '>Sold Monthly</span>
                      </div>
                    </div>
                    <div className='bg-white flex gap-3 items-center md:p-4 p-3 rounded-4xl min-w-max '>
                      <div className=''>
                        <img src= {fifthimage} alt="" className='w-12 h-12 border-3 border-white  rounded-3xl'/>
                      </div>
                      <div className='flex flex-col'>
                        <span className='text-base font-semibold text-[#1B1C57]'>4K+ Reviews</span>
                        <span className='text-xs text-[#68799F] font-normal  '>Trusted by Customers</span>
                      </div>
                    </div>
                    <div className='bg-white flex gap-3 items-center md:p-4 p-3 rounded-4xl min-w-max '>
                      <div className=''>
                        <img src= {fifthimage} alt="" className='w-12 h-12 border-3 border-white  rounded-3xl'/>
                      </div>
                      <div className='flex flex-col'>
                        <span className='text-base font-semibold text-[#1B1C57]'>4K+ Reviews</span>
                        <span className='text-xs text-[#68799F] font-normal  '>Trusted by Customers</span>
                      </div>
                    </div>
                    </div>
                  </div>
            </div>
        </section>
      </section>
    </>
  )
}

export default Hero