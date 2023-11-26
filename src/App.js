import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import MentalHealth from './MentalHealth'
import Header from './Header'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mentalHealth' element={<MentalHealth />} />
    </Routes>
    </>
  )
}

export default App
