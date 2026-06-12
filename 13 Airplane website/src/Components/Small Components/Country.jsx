import React from 'react'
import Buttons from './Buttons'

const Country = ({handleChange}) => {
    return (
        <div className='sidebar-card'>
            <h3 className='category-heading'>
                Country
            </h3>
            <div>
                <label onChange={handleChange} className='sidebar-label-container' >
                    <input type="radio" value="" name='test' />
                    <span className='checkmark'></span>All
                </label> 
                <Buttons handleChange={handleChange} value="USA" name="test" title="USA"/>
                <Buttons handleChange={handleChange} value="Russia" name="test" title="Russia"/>
                <Buttons handleChange={handleChange} value="India" name="test" title="India"/>
                <Buttons handleChange={handleChange} value="Europe" name="test" title="Europe"/>
                <Buttons handleChange={handleChange} value="Rest" name="test" title="Rest"/>
            </div>
        </div>
    )
}

export default Country
