import React from 'react'
import "./App.css"
import LandingPage from './Components/LandingPage'
import Info1 from './Components/Info1'
import Navigation from './Components/Navigation'
const App = () => {
  return (<>
      <Navigation/>
    <div className='relative'>
      <LandingPage/>
      <Info1/>
    </div>
  </>
  )
}

export default App
