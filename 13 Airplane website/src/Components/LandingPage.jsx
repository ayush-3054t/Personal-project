import React from 'react'
import image from "../assets/firstImg.png"
import { FaRegCircle } from "react-icons/fa";
import "./styles/LandingPage.css"

const LandingPage = ({handleSlideChange}) => {
    console.log(handleSlideChange)
    return (
        <section className='landing-conatiner'>
            {/* <div className="circle-container">
                <FaRegCircle className='circle' />
            </div> */}
            <div className='img-container'>
                <img src={image} alt="" />
            </div>
            <div className="center-text">
                <h1>Find your <br /> jet</h1>
            </div>
            <div className="button-container" >
                <button className='button' onClick={handleSlideChange}  style={{cursor:"pointer"}}>Click Here</button>
            </div>
        </section>
    )
}

export default LandingPage
