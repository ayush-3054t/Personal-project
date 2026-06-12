import React from 'react'
import "./styles/CardLoader.css"
import Card from './Small Components/Card'
const CardLoader = ({result}) => {
    return (
        <section className="cardloader-container">  
            <div className='all-cards'>
                {result}
                
            </div>
            
        </section>
    )
}

export default CardLoader
