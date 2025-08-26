import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'




function CaptainLogin() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const {captain, setcaptain} = useContext(CaptainDataContext)

    const navigate = useNavigate()
     
    const submitHandler = async (e) => {
      e.preventDefault()
      const captain = {
        email: email,
        password
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

      if(response.status === 200) {
        const data = response.data
        setcaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain/home')
      }
      // console.log(captainData)
      setemail('')
      setpassword('') 
    }
    
  
    return (
      <div className='p-8 bg-black h-screen flex flex-col justify-between '>
        <div>
          <h1 className='font-semibold text-3xl text-zinc-300'> Uber</h1>
          <h1 className='font-medium text-xl text-zinc-400 mt-2'>Welcome to Captain Login</h1>
        </div>
        <div>
          <form 
          onSubmit={(e) => {submitHandler(e)}}
          className=''>
  
          <p className='text-xl font-semibold mb-2 text-zinc-400'>Enter your email</p>
  
          <input 
          value={email} 
          onChange={(e) => {
            setemail(e.target.value)
          }}
          className='bg-zinc-300 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base mb-4' type="email" placeholder='email@example.com' required/>
  
          <p className='text-xl font-semibold mb-2 text-zinc-400'>Enter password</p>
  
          <input 
          value={password} 
          onChange={(e) => {
            setpassword(e.target.value)
          }}
          className='bg-zinc-300 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base' type="password" placeholder='password' required/>
  
          <button className='text-zinc-400 text-center text-xl font-medium py-2 rounded-lg w-full bg-zinc-800 mt-6'> login</button>
          </form>
  
          <p className='text-zinc-400 text-right mt-4 font-medium'>New here? <Link to='/captain/signup' className='text-blue-800'>Create new account</Link></p>
  
        </div>
        <Link to='/user-login' className='inline-block text-zinc-400 text-center text-xl font-medium py-2 rounded-lg w-full bg-zinc-800'> Login as user </Link>
      </div>
  )
}

export default CaptainLogin