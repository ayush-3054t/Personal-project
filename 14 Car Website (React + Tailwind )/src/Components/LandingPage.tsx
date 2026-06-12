import React from 'react'
import back from "../assets/landing_image.png"
const LandingPage = () => {
    return (
        <div className='w-full md:h-screen relative  '>
            <div className="background-image w-[100%] md:h-[100%] absolute top-0 left-0 -z-10 overflow-hidden h-[600px]">
                <img src={back} className='object-cover w-[100%] md:h-[1200px] h-[600px]' />
            </div>
            <div className='relative z-1 md:w-[600px] md:left-50 md:top-[40%] md:text-white flex flex-col justify-center md:items-start items-center gap-10  top-[600px] md:mx-0 mx-10'>
                <h1 className='font-sora  font-bold text-7xl  md:text-start text-center'>The New Safari</h1>
                <p className='font-sora text-xl font-thin md:text-start text-center'>The New Safari carries on the legendary lineage with contemporary and premium updates. The New Safari is a compelling combination of Grand Design, Cutting-edge Technology & Luxurious Comfort</p>
                <button className=' text-lg font-bold pt-3 pb-3 pl-7 pr-7 border-2 md:border-white border-black'>
                    Book Now
                </button>
            </div>
        </div>
    )
}

export default LandingPage
