import React from 'react'

const Flex3 = () => {
    return (
        <div className='w-[800px] relative flex flex-row flex-warp gap-5'>
            <div className='basis-1/3 '>

                <img src="https://images.91wheels.com/assets/c_images/gallery/tata/safari-2023/tata-safari-2023-2-1696664478.jpg?width=420&q=60?w=1080&q=60" className='w-full h-full object-cover' />
            </div>
            <div className='basis-2/3'>

                <img src="https://stat.overdrive.in/wp-content/uploads/2021/02/2021-tata-safari-review-10.jpg" className='w-full h-full object-cover basis-1/3' />
            </div>
        </div>
    )
}

export default Flex3
