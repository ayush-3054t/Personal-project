import React, { useState } from 'react'
import Navigation from './Components/Navigation'
import Sidebar from './Components/Sidebar'
import Generation from './Components/Generation'
import CardLoader from './Components/CardLoader'
import "./index.css"
import LandingPage from './Components/LandingPage'
import planes from "./Components/database/db"
import Card from './Components/Small Components/Card'

const App = () => {

  const [query, setQuery] = useState("")
  const [category, setCategory] = useState(null)

  const handleChange = (e) => {
    setCategory(e.target.value)
    console.log(category)
  }

  const handleClick = (e) => {
    setCategory(e.target.value)
    console.log(category)
  }

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const filteredPlanes = planes.filter((p) => (
    p.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  ))

  const filterer = (planes, category, query) => {
    let filteredData = planes

    if (query) {
      filteredData = filteredPlanes
    }

    if (category) {
      filteredData = filteredPlanes.filter(({ name, type, generation, country }) =>
        name.toLowerCase() === category.toLowerCase() || type.toLowerCase() === category.toLowerCase() || generation.toLowerCase() === category.toLowerCase() || country.toLowerCase() === category.toLowerCase()
      )
    }

    return filteredData.map(({ img, name, type, content, generation, country }) => (

      <Card
        img={img}
        name={name}
        type={type}
        content={content}
        generation={generation}
        country={country} />

    ))
  }
 
  const result = filterer(planes, category, query)



  const [displayLanding, setDisplayLanding] = useState({ display: "block" })
  const [displayContent, setDisplayContent] = useState({ display: "none" })
  const [buttonText , setButtonText] = useState("To Project"); 

  const [truthValue, setTruthValue] = useState(true)
  const handleSlideChange = () => {
    setTruthValue(prev => !prev)

    if (truthValue === false) {
      setDisplayLanding({ ...displayLanding, display: "block" })
      setDisplayContent({ ...displayContent, display: "none" })
      setButtonText("To Project")
    }
    else {
      setDisplayLanding({ ...displayLanding, display: "none" })
      setDisplayContent({ ...displayContent, display: "block" })
      setButtonText("Landing Page")
    }


  }

  return (
    <div style={{ position: "relative" }}>
      <button className="slide-changer" onClick={handleSlideChange} >{buttonText}</button>
      <div style={displayLanding}>
        <LandingPage handleSlideChange={handleSlideChange} />
      </div>
      <div style={displayContent}>
        <Sidebar handleChange={handleChange} />
        <Navigation query={query} setQuery={setQuery} handleInputChange={handleInputChange} />
        <Generation handleClick={handleClick} />
        <CardLoader result={result} />
      </div>
    </div>
  )
}

export default App
