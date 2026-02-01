import React from 'react'
import Navbar from './components/Navbar'
import { Banner } from './components/Banner'
import Buy from './components/Buy'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Buy/>
    </div>
  )
}

export default App