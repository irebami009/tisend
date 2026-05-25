import React from 'react'

const Service = () => {
  return (
    <div>
        {/* services */}
        <div className='flex flex-col items-center justify-center gap-10 px-15 py-6'>
            
            {/* sevices text */}
            <div>
                <h1 className='text-4xl font-semibold'>
                    Our Services
                </h1>
            </div>
            {/* end of services text */}

            {/* services cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-15'>
                
                {/* service card 1 */}
                <div className='bg-white px-4 text-center py-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-50 transition-all duration-300 flex flex-col items-center border border-gray-200'>
                    
                    <img 
                      src="./images/Vector (3).png" 
                      alt="" 
                      className='mb-4 hover:scale-110 transition-transform duration-300' 
                    />
                    <h2 className='text-[19px] font-bold mb-2 mt-4'>Residential Construction</h2>
                    
                    <p className='text-gray-600 text-[15px] leading-8 font-poppins'>
                        We build comfortable and modern homes designed to fit your life style and budget
                    </p>
                </div>

                {/* service card 2 */}
                <div className='bg-white px-1xl text-center py-7 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-50 transition-all duration-300 flex flex-col items-center border border-gray-200'>
                    
                    <img 
                      src="./images/Vector (1).png" 
                      alt="" 
                      className='mb-4 hover:scale-110 transition-transform duration-300' 
                    />
                    <h2 className='text-[19px] font-bold mb-2 mt-4'>Commercial Projects</h2>
                    <p className='text-gray-600 text-[15px] leading-8 font-poppins'>
                        Our commercial solutions combinefunctionality, aesthetics, and structural integrity.
                    </p>
                </div>

                {/* service card 3 */}
                <div className='bg-white text-center py-7 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-50 transition-all duration-300 flex flex-col items-center border border-gray-200'>
                    
                    <img 
                      src="./images/Vector (2).png" 
                      alt="" 
                      className='mb-4 hover:scale-110 transition-transform duration-300' 
                    />
                    <h2 className='text-[19px] font-bold mb-2 mt-4'>Rennovation Services</h2>
                    <p className='text-gray-600 text-[15px] leading-8 font-poppins'>
                        Transform existing spaces with smartrenovations and premium finishing solutions.
                    </p>
                </div>

                {/* service card 4 */}
                <div className='bg-white px-1 text-center py-7  rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-50 transition-all duration-300 flex flex-col items-center border border-gray-200'>
                    
                    <img 
                      src="./images/Vector (3).png" 
                      alt="" 
                      className='mb-4 hover:scale-110 transition-transform duration-300' 
                    />
                    <h2 className='text-[19px] font-bold mb-2 mt-4'>Project Supervision</h2>
                    <p className='text-gray-600 text-[15px] leading-8 font-popins'>
                        Professional oversight ensuring qualitydelivery, cost efficiency and timelycompletion.
                    </p>
                </div>

                {/* service card 5 */}
                <div className='bg-white px-1 text-center py-7 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-50 transition-all duration-300 flex flex-col items-center border border-gray-200'>
                    
                    <img 
                      src="./images/Vector (4).png" 
                      alt="" 
                      className='mb-4 hover:scale-110 transition-transform duration-300' 
                    />
                    <h2 className='text-[19px] font-bold mb-2 mt-4'>Roofing Solutions</h2>
                    <p className='text-gray-600 text-[15px] leading-8 font-poppins'>
                        Providing durable and innovativeroofing systems designed toprotect.
                    </p>
                </div>

                {/* service card 6 */}
                <div className='bg-white px-1xl text-center py-7 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-50 transition-all duration-300 flex flex-col items-center border border-gray-200'>
                    
                    <img 
                      src="./images/Vector (5).png" 
                      alt="" 
                      className='mb-4 hover:scale-110 transition-transform duration-300' 
                    />
                    <h2 className='text-[19px] font-bold mb-2 mt-4'>Interior Finishing</h2>
                    <p className='text-gray-600 text-[15px] leading-8 font-poppins'>
                        Delivering impeccable craftsmanship to enhance the beauty, comfort.
                    </p>
                </div>

            </div>

            {/* LEARN MORE BUTTON */}
            <div className='w-full flex justify-end px-15'>
                <button className='px-7 py-3 rounded-full bg-[#fbbf24] text-black font-medium hover:bg-black hover:text-white transition-all duration-300 cursor-pointer'>
                    Learn More
                </button>
            </div>

        </div>
        {/* end of services */}
    </div>
  )
}

export default Service