import React from 'react'
import logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa";
const Navigation = () => {
    return (
        <div className='w-full  fixed backdrop-blur-[450px]  flex justify-between items-center px-20 pt-3 pb-3'>
            <div className="logo-container">
                <img src={logo} alt="" />
            </div>
            <nav>
                <ul className='hidden md:flex gap-6 text-1 text-white'>
                    <li>Overview</li>
                    <li>Edition</li>
                    <li>Specs</li>
                    <li>Compare</li>
                    <li>Reviews</li>
                    <li>Price</li>
                </ul>
            </nav>
            <div className='flex justify-center items-center ' style={{color:'white'}}>
                <FaBars/>
            </div>
        </div>
    )
}

export default Navigation
