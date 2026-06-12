import React from 'react'
import "./styles/Generation.css"
import App from '../App'
const Generation = ({handleClick}) => {
    return (
        <section className='generation-container'>
            <h1 className='generation-heading'>Generation</h1>
            <div className='generation-button-container'>
                <button className="gen-button" onClick={handleClick} value="Future">Future gen</button>
                <button className="gen-button" onClick={handleClick} value="5th">5th gen</button>
                <button className="gen-button" onClick={handleClick} value="4.5th">4.5th gen</button>
                <button className="gen-button" onClick={handleClick} value="4th">4th gen</button>
                <button className="gen-button" onClick={handleClick} value="3rd">3rd gen</button>
                <button className="gen-button" onClick={handleClick} value="Older">Older gen</button>
                
            </div>
        </section>
    )
}

export default Generation
