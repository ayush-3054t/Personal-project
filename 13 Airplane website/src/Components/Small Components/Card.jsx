import React from 'react'

const Card = ({ img, name ,content ,type ,generation , country }) => {
    return (
        <div className="card">
            <img src={img} alt={name} />
            <div className="card-content">

                <h3>{name}</h3>
                <p>{content}</p>
                <p>Type : {type}</p>
                <p>Generation : {generation}</p>
                <p>Country : {country}</p>
            </div>
        </div>
    )
}

export default Card
