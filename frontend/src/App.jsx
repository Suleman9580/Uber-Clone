import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import LandingPage from './pages/LandingPage'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'
import CaptainLogout from './pages/CaptainLogout'



function App() {

  

  return (

    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/captain/login' element={<CaptainLogin />} />
      <Route path='/captain/signup' element={<CaptainSignup />} />
      <Route path='/user/login' element={<UserLogin />} />
      <Route path='/user/signup' element={<UserSignup />} />

      <Route path='/home' element={<UserProtectedWrapper> <Home /></UserProtectedWrapper>} />

      <Route path='/user/logout' element={<UserProtectedWrapper> <UserLogout /></UserProtectedWrapper>} />

      <Route path='/captain/home' element={ 
        <CaptainProtectedWrapper>
          <CaptainHome />          
        </CaptainProtectedWrapper>
        } />

        <Route path='/captain/logout' element={
          <CaptainProtectedWrapper>
            <CaptainLogout />
        </CaptainProtectedWrapper>} 
        />


      
    </Routes>
  )
}

export default App