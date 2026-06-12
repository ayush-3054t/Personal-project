import React, { useState } from 'react'
// import "../styles/styleToggleBackgroundColor.css"
const ToggleBackgroundColor = () => {

    const [backgroundColor , setBackgroundColor] = useState("white")
    const [textColor , setTextColor] = useState("#1b1b1b")
    const [buttonStyle , setButtonStyle] = useState("white")

    const handleClick = () =>{
        setBackgroundColor(backgroundColor=== "white" ? "#1b1b1b" : "white")
        setTextColor(textColor=== "#1b1b1b" ? "#ffa31a" : "#1b1b1b")

    }

    return (
        <div style={{backgroundColor:backgroundColor , color:textColor }}>
            hi
            hello
            <button style={{buttonStyle,color:textColor , border : `2px solid ${textColor}`}} onClick={handleClick}>
                {backgroundColor == "#1b1b1b" ? "Black theme" : "White theme"}
            </button>

            <section className="content">
                <h1>Welcome to a <br />
                real World...</h1>
            </section>
        </div>
    )
}

export default ToggleBackgroundColor
