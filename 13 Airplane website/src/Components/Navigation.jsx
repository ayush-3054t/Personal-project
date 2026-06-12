import React from 'react'
import { PiAirplaneTakeoff } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import "./styles/Navigation.css"
const Navigation = ({query , handleInputChange}) => {
    return (
        <nav className='navigation-container'>
            <div className="input-conatainer">
                <CiSearch className='search-icon'/>
                <input type="text" placeholder='Search you plane ... ' onChange={handleInputChange} value={query} />
            </div>
        </nav>
    )
}

export default Navigation
