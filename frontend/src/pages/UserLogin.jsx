import React, { useState } from 'react'
import { Link } from 'react-router-dom'



function UserLogin() {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [userData, setuserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setuserData({
      email: email,
      password: password
    })
    // console.log(userData)
    setemail('')
    setpassword('')
  }
  

  return (
    <div className='p-8 bg-black h-screen flex flex-col justify-between '>
      <div>
        <h1 className='font-semibold text-3xl text-zinc-300'> Uber</h1>
        <h1 className='font-medium text-xl text-zinc-400 mt-2'>Welcome to User Login</h1>
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

        <p className='text-zinc-400 text-right mt-4 font-medium'>New here? <Link to='/user-signup' className='text-blue-800'>Create new account</Link></p>

      </div>
      <Link to='/captain-login' className='inline-block text-zinc-400 text-center text-xl font-medium py-2 rounded-lg w-full bg-zinc-800'> Login as captain </Link>
    </div>
  )
}

export default UserLogin