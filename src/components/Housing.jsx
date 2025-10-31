import React from 'react'
import { houseLink } from '../db'
import { NavLink, Outlet, useMatch } from 'react-router-dom'
import House from '../pages/House';
import SlideControl from '../components/SlideControl';

const Housing = () => {
     const match = useMatch("/housing")


  return (
    <>
      <section className="mt-14">
        {/*  */}
        <section className="px-4  md:px-10 xl:px-15  flex flex-col gap-2   max-w-screen-xl mx-auto">
            <div className="flex items-center gap-2">
                <span className="bg-[#F59E0B] w-8 h-[2px] "></span>
                <span className="text-sm text-[#F59E0B] font-medium ">Our Recomendation</span>
            </div>
            <div className="pl-9 flex justify-between items-center">
                <div>
                    <h1 className="text-[#1B1C57] font-semibold text-xl lg:text-2xl">Featured House</h1>
                </div>
                <div className='hidden md:block'>
                    <div className='flex gap-5 items-center'>
                        {houseLink.map((house)=> (
                            <NavLink key={house.id} to={house.path} end
                             className={({ isActive }) => `flex items-center gap-[5px] px-4 py-[7px] rounded-4xl  ${isActive ? "bg-[#D1FAE5] " : "border border-[#E0E3EB]"}`}>
                                {({isActive}) => (
                                  <>
                                    <img src= {isActive ? house.activeIcon : house.icon } className='w-5 h-5' alt="" />
                                    <span className= {`pt-[2px] text-[0.95rem] font-medium ${isActive ? 'text-[#10B981] ': 'text-[#888B97]'}`}>{house.title}</span>
                                  </>
                                )}
                            </NavLink>
                        ))}

                    </div>
                </div>
                <div>
                    <SlideControl/>
                </div>
            </div>
            <div className=''>
              <div className='flex mt-3 justify-center items-center md:hidden '>
                    <div className='flex gap-5 items-center'>
                        {houseLink.map((house)=> (
                            <NavLink key={house.id} to={house.path} end
                             className={({ isActive }) => `flex items-center gap-[4px] px-4 py-[7px] rounded-4xl  ${isActive ? "bg-[#D1FAE5] " : "border border-[#E0E3EB]"}`}>
                                {({isActive}) => (
                                  <>
                                    <img src= {isActive ? house.activeIcon : house.icon } className='w-4 h-4' alt="" />
                                    <span className= {`pt-[2px] text-sm font-medium ${isActive ? 'text-[#10B981] ': 'text-[#888B97]'}`}>{house.title}</span>
                                  </>
                                )}
                            </NavLink>
                        ))}

                    </div>
                </div>
            </div>
        </section>
        {/*  */}
         {match ? <House /> : <Outlet />}
      </section>
    </>
  )
}

export default Housing