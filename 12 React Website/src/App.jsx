import { useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'
import "./index.css"

import products from "./DB/data"
import { LuSquareFunction } from 'react-icons/lu'
import { PiFunnelSimpleDuotone } from 'react-icons/pi'
import Card from './components/card'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  // ---------input filler---------
  const [query, setQuery] = useState("")

  const handleInputChange = (event) => setQuery(event.target.value)

  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  )

  // ---------Radio filler---------
  const handleChange = event => {
    setSelectedCategory(event.target.value)
    console.log(selectedCategory)
  }
  // ---------Button filler---------
  const handleClick = event => {
    setSelectedCategory(event.target.value)
    console.log(selectedCategory)
  }

  function filteredData(products, selected, query) {
    let filteredProduct = products
    //filtering 

    if (query) {
      filteredProduct = filteredItems
    }

    //selected filter
    if (selected) {
      filteredProduct = filteredProduct.filter(({ category, color, company, newPrice, title }) =>
        category === selected || color === selected || company === selected || newPrice == selected || title === selected)
    }
    return filteredProduct.map(({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Card key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ))
  }


  const result = filteredData(products , selectedCategory , query)

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} setQuery={setQuery} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>

    </>
  )
}

export default App
