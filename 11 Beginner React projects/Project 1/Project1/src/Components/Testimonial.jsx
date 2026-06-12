import React, { useState } from 'react'
// import "../styles/styleTestimonial.css"
const Testimonial = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            quote: "This is the best product I've ever used!",
            author: "Jane Doe",
        },
        {
            quote: "I highly recommend this product to everyone!",
            author: "John Smith",
        },
        {
            quote: "This product has completely changed my life!",
            author: "Bob Johnson",
        },
    ];

    const handlePrev = () =>{
        if(currentIndex == 0)
            setCurrentIndex(testimonials.length - 1)
        else
            setCurrentIndex(currentIndex - 1)
    }
    const handleNext = () =>{
        if(currentIndex == testimonials.length - 1)
            setCurrentIndex(0)
        else
            setCurrentIndex(currentIndex + 1)
    }

    return (
        <div className="testimonials">
            <div className="testimonials-quote">
                {testimonials[currentIndex].quote}
            </div>
            <div className="testimonials-author">
                - {testimonials[currentIndex].author}
            </div>

            <div className="testimonials-nav">
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>

        </div>
    )
}

export default Testimonial
