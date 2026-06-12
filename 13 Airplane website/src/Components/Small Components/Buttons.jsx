import React from 'react'

const Buttons = ({ handleChange, value, name, title }) => {
    return (
        <label onChange={handleChange} className='sidebar-label-container' >
            <input type="radio" value={value} name={name} />
            <span className='checkmark'>{title}</span>
        </label>
    )
}

export default Buttons
