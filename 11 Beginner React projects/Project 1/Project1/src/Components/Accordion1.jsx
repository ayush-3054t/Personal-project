import React from 'react'
import {accordionData} from "../utils/content"
import Accordion from './Accordion'
const Accordion1 = () => {
    return (
        <div className="accordion">
            {accordionData.map(({title, content})=>(
                <Accordion title={title} content={content} key={Math.random()}/>
            ))}
        </div>
    )
}

export default Accordion1
