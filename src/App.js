import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Header from './Header'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </>
  )
}

export default App
