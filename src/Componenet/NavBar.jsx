import React from 'react'

const NavBar = () => {
  return (
    <div>
        {/* NAVBAR */}
        <nav className=' flex items-center justify-between px-6 py-4'>
            {/* LOGO */}
            <div className='flex items-center space-x-2'>
                <img src="./images/image 13.png" alt="" />
                <span className='text-3xl font-bold'>Renovex</span>
            </div>
            {/* END OF LOGO */}

            {/* LINKS */}
            <div className='flex space-x-10 font-medium text-black text-[13px]'>

  <a
    href="/"
    className='relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#fbbf24] after:transition-all after:duration-300 hover:after:w-full'
  >
    HOME
  </a>

  <a
    href="/service"
    className='relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#fbbf24] after:transition-all after:duration-300 hover:after:w-full'
  >
    SERVICES
  </a>

  <a
    href=""
    className='relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#fbbf24] after:transition-all after:duration-300 hover:after:w-full'
  >
    ABOUT US
  </a>

  <a
    href=""
    className='relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#fbbf24] after:transition-all after:duration-300 hover:after:w-full'
  >
    CONTACT
  </a>

  <a
    href=""
    className='relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#fbbf24] after:transition-all after:duration-300 hover:after:w-full'
  >
    BLOG
  </a>

</div>
            {/* END OF LINKS */}

            {/* SIGN UP */}
            <div>
                <button className='cursor-pointer bg-[#fbbf24] text-black px-6 py-2 rounded-2xl text-[15px] font-medium'>SIGN UP</button>
            </div>
            {/* END OF  SIGN UP*/}
        </nav>
    </div>
  )
}

export default NavBar