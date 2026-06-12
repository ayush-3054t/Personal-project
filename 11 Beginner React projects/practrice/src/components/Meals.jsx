import React, { useEffect, useState } from 'react'

const Meals = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            const data = await response.json()
            console.log(data)

            setItems(data.meals)
        }
        getData();


        console.log("meals")
    }, [])
    
    console.log(typeof items)
    return (
        <div>
            <ul>
                {items.map(({strMeal,strMealThumb,idMeal})=>(
                    <li key={idMeal}>
                        <div>
                            <img src={strMealThumb} alt="" />
                            <section>
                                <p>{strMeal}</p>
                                <p>{idMeal}</p>
                            </section>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Meals
