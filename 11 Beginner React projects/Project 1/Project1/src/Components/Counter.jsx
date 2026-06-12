import React, { useState } from 'react'
import '../styles/styleCounter.css'
const Counter = () => {

    const[count , setCount] =useState(0);

    const handleIncrement = () =>{
        setCount((prev)=>prev +1)
    }
    const handleDecrement = () => {
        setCount((prev) => {return prev -1})
    }
    const handleReset = () =>{
        setCount(0);
    }

    return (
        <div className='container'>
            <div>
                <h1 className='number'>{count}</h1>
            </div>
            <div className="btn-container">
                <button onClick={handleIncrement} className="increment">+</button>
                <button onClick={handleReset} className="reset">Reset</button>
                <button onClick={handleDecrement} className="decrement">-</button>
            </div>
           
        </div>
    )
}

export default Counter
