import React, { useState } from 'react'
import "./styles/Sidebar.css"
import Country from './Small Components/Country'
import Category from './Small Components/Category'



const Sidebar = ({handleChange}) => {


    return (
        <section className='sidebar-container' style={{ zindex:"600"}}>
            <div className="logo">
                <h1>FIND YOUR JET</h1>
            </div>
            <Country handleChange={handleChange}/>
            <Category handleChange={handleChange} />
            
        </section>
    )
}
 
export default Sidebar
