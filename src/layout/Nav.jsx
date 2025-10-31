import houselogo from '../assets/svg/logo.svg'
import droparrow from '../assets/svg/Vector.svg'

const Nav = () => {
  return (

    <>
      <nav className="fixed z-99 top-2 right-0 left-0  w-full">
        <section className="py-3 borde px-4 xl:px-19  max-w-screen-2xl mx-auto">
            <div className="flex justify-between items-center">
                <div className='flex items-center gap-3'>
                    <img src= {houselogo} alt="" />
                    <span className='text-base font-bold text-[#1B1C57]'>Hounter</span>
                </div>
                <div className='flex items-center gap-10 hidden md:flex '>
                    <div className='flex items-center gap-5'>
                      <button className='border-1 border-[#FFFFFF4D] px-3 py-[6px] text-sm font-semibold text-[#F0F3FD] rounded-4xl'>About Us</button>
                      <button className='border-1 border-[#FFFFFF4D] px-3 py-[6px] text-sm font-semibold text-[#F0F3FD] rounded-4xl'>Article</button>
                      <button className='flex items-center justify-between gap-3 border-1 border-[#FFFFFF4D] px-5 py-[6px] text-sm font-semibold text-[#F0F3FD] rounded-4xl'><span>Property</span><img src= {droparrow} alt="" /></button>
                    </div>
                    <div>
                        <button className='bg-[#D1FAE5] px-5 py-[9px] rounded-4xl text-[#047857] text-sm leading-6  font-semibold   '>Sign Up!</button>
                    </div>
                </div>
            </div>
        </section>
      </nav>
    </>
  )
}

export default Nav