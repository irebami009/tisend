import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Componenet/NavBar'
import Homepage from './Pages/Homepage'

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        {/* HOME */}
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  )
}

export default App