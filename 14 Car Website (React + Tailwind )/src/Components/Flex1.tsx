import React from 'react'

const Flex1 = () => {
    return (
        <div className='w-[800px] h-[500px] relative flex flex-row'>
            <img src="https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/138895/safari-facelift-exterior-front-view-6.jpeg?isig=0&q=80" className='w-[100%] h-[100%]' />
            <div className='text-white w-[400px] absolute bottom-3 right-3'>
                <h1 className='font-bold text-xl text-start mb-3'>New Parametric Grille</h1>
                <p className='font-thin text-start'>First impressions shuold always leave an indelible mark. The New Safari's Parametic Grille is designed to do just that. It makes the frontal stance bolder and masculine, captivating the onlooker instantly</p>
            </div>
        </div>
    )
}

export default Flex1
