import React from 'react'
import Buttons from './Buttons'
const Category = ({handleChange}) => {
    return (
        <div className='sidebar-card'>
            <h3 className='category-heading'>
                Type
            </h3>
            <div>
                <label onChange={handleChange} className='sidebar-label-container' >
                    <input type="radio" value="" name='test1' />
                    <span className='checkmark'></span>All
                </label>
                <Buttons handleChange={handleChange} value="Fighter" name="test1" title="Fighter" />
                <Buttons handleChange={handleChange} value="Bomber" name="test1" title="Bomber" />
                <Buttons handleChange={handleChange} value="Transport" name="test1" title="Transport" />
                <Buttons handleChange={handleChange} value="Helicopter" name="test1" title="Helicopter" />
                <Buttons handleChange={handleChange} value="Others" name="test1" title="Others" />
            </div>
        </div>
    )
}

export default Category
