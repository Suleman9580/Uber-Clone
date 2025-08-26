import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'



function UserSignup() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [lastname, setlastname] = useState('')
  const [firstname, setfirstname] = useState('')

  const navigate = useNavigate()

  const {user, setUser} = useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if(response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    // console.log(userData)
    setemail('')
    setpassword('')
    setfirstname('')
    setlastname('')
  }
  



  return (
    <div className='p-8 bg-black h-screen flex flex-col justify-between '>
      <div>
        <h1 className='font-semibold text-3xl text-zinc-300'> Uber</h1>
        <h1 className='font-medium text-xl text-zinc-400 mt-2'>Welcome to User Signup</h1>
      </div>
      <div>
        <form 
        onSubmit={(e) => {submitHandler(e)}}>

        <div className="flex w-full gap-2">
          <div className=''>
            <p className='text-xl font-semibold mb-2 text-zinc-400'>Firstname</p>

            <input 
            value={firstname} 
            onChange={(e) => {
              setfirstname(e.target.value)
            }}
            className='bg-zinc-300 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base mb-4' type="text" placeholder='firstname' required/>
          </div>

          <div>
            <p className='text-xl font-semibold mb-2 text-zinc-400'>Lastname</p>

          <input 
          value={lastname} 
          onChange={(e) => {
            setlastname(e.target.value)
          }}
          className='bg-zinc-300 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base mb-4' type="text" placeholder='lastname' />
          </div>
        </div>

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

        <button className='text-zinc-400 text-center text-xl font-medium py-2 rounded-lg w-full bg-zinc-800 mt-6'> Signup</button>
        </form>

        <p className='text-zinc-400 text-right mt-4 font-medium'>Already have an account? <Link to='/user-login' className='text-blue-800'>Login here</Link></p>

      </div>
      <Link to='/captain-signup' className='inline-block text-zinc-400 text-center text-xl font-medium py-2 rounded-lg w-full bg-zinc-800'> Get started as captain </Link>
    </div>
)}

export default UserSignup