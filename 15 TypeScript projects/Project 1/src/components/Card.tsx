import React from 'react'

interface CardProps {
    key: number,
    title: string,
    description: string,
    image: string
}


const Card = ({ key, title, description, image }: CardProps) => {
    return (
        <div className='max-w-sm mx-auto m-[3rem]  rounded-lg shadow-md overflow-hidded'>
            <img src={image} alt={title} className='w-full h-40 object-cover' />


            <div className='p-6'>
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700 mb-4">{description}</p>


                <a href="" className='inline-block px-4 py-2 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-600 hover:text-white transition duration-200'>Learn more</a>
            </div>
        </div>
    )
}

export default Card
