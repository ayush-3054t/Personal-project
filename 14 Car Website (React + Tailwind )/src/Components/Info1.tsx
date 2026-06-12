import React from 'react'
import Flex1 from './Flex1'
import Flex2 from './Flex2'
import Flex3 from './Flex3'
import { IoArrowForward } from 'react-icons/io5'

const Info1 = () => {
    return (
        <div className='relative bg-black text-[#CFCFCF] w-full flex flex-col justify-center gap-30 text-center items-center px-40 pt-30'>

            <div>
                <h1 className='text-5xl font-bold text-center'>The Grand Design</h1>
                <p className='mt-6 w-[400px] text-center'>The new safari showcaeses an artistic sensibility that's spophisticated, assertive and wat ahead of its,s time</p>
            </div>
            <div className='flex flex-col gap-5'>

                <Flex1 />
                <Flex2 />
                <Flex3 />
            </div>
            <div className="last-button mb-60">
                <h1 className='text-5xl font-bold text-center mb-10'>The all new Safari!</h1>
                <button className=' text-lg font-bold pt-3 pb-3 pl-7 pr-7 border-2 border-white mx-auto flex items-center gap-6'>Book Now <IoArrowForward className='font-bold text-black bg-white rounded-full'/></button>
            </div>
        </div>
    )
}

export default Info1
