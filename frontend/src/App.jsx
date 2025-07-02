import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
CaptainSignup


function App() {

  

  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/captain-login' element={<CaptainLogin />} />
      <Route path='/captain-signup' element={<CaptainSignup />} />
      <Route path='/user-login' element={<UserLogin />} />
      <Route path='/user-signup' element={<UserSignup />} />
    </Routes>
  )
}

export default App