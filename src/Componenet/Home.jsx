import React from 'react'

const Home = () => {
  return (
    <div className='w-full px-12 py-7'>
        {/* FIRST SECTION */}
       <div className='flex items-center justify-between gap-50 py-5'>
    {/* FIRST TEXT */}
    <div className=''>
      <h1 className='text-[2.3rem] font-bold mb-4'>
        Building The Future with Precision & Excellence
      </h1>

      <p className='text-[20px] text-black-600 font-semi-bold mb-6 font-poppins'>
        We deliver high-quality residential, commercial, and industrial
        construction projects with innovation, safety and reliability at
        the core.
      </p>
    </div>

    {/* FIRST IMAGE */}
    <div className='w-[50%]'>
      <img src="./images/Group 40.png" alt="" />
    </div>

</div>
        {/* END OF FIRST SECTION */}

        {/* SECOND SECTION */}
        <div className='flex'>
            {/* second image */}
            <div className='w-[100%]'>
        <img src="./images/Rectangle.png" alt="" />
            </div>
            {/* end of second image */}

            {/* second text */}
            <div className=' py-4 px-7'>
        <p className='mt-5 mb-10 text-[20px] text-black-600 font-semi-bold font-poppins'>
            With over 15 years of industry experience, our team specializes
     in delivering durable and modern structures tailored to client
     needs. From planning to execution, we ensure every project
     meets the highest standards.
        </p>
        <img src="./images/Group 22.png" alt="" />
        {/* second text links */}
        <div className='flex gap-20 mt-30'>
        <button className='bg-[#fbbf24] text-black px-6 py-2 rounded-2xl text-[15px] font-medium cursor-pointer'>GET A FREE QUOTE</button>
        <button className='border border-[#fbbf24] text-black px-6 py-2 rounded-2xl text-[15px] font-medium cursor-pointer'>BOOK NOW</button>

        </div>
        {/* end od second text links */}
            </div>
            {/* end of second text */}
        </div>
        {/* END OF SECOND SECTION */}

        {/* third section */}
        <div className='flex items-center justify-between gap-10 px-10 py-10'>
            {/* third text */}
            <div className=' items-center text-center font-semibold'>
                <h3>250+</h3>
                <h4>project completed</h4>
            </div>
            {/* end of third text */}
            {/* third text */}
            <div className=' items-center text-center font-semibold'>
                <h3>120+</h3>
                <h4>skilled professionals</h4>
            </div>
            {/* end of third text */}
            {/* third text */}
            <div className=' items-center text-center font-semibold'>
                <h3>15+</h3>
                <h4>years experience</h4>
            </div>
            {/* end of third text */}
            {/* third text */}
            <div className=' items-center text-center font-semibold'>
                <h3>90%</h3>
                <h4>client satisfaction</h4>
            </div>
            {/* end of third text */}
        </div>
        {/* end of third section */}
    </div>
  )
}

export default Home