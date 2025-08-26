import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'



function CaptainSignup() {

  const navigate = useNavigate()

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [lastname, setlastname] = useState('')
  const [firstname, setfirstname] = useState('')
  const [vehicleColor, setvehicleColor] = useState('')
  const [vehiclePlate, setvehiclePlate] = useState('')
  const [vehicleCapacity, setvehicleCapacity] = useState('')
  const [vehicleType, setvehicleType] = useState('')
  
  const {captain, setcaptain} = useContext(CaptainDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    
    const captainData = {
        firstname: firstname,
        lastname: lastname,      
        email: email,
        password: password,
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType     
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

    if(response.status === 201){
      const data = response.data
      setcaptain(data.captain)
      localStorage.setItem('token', data.token)

      navigate('/captain/home')
    }


    // console.log(captainData)
    setemail('')
    setpassword('')
    setfirstname('')
    setlastname('')
    setvehicleCapacity('')
    setvehicleColor('')
    setvehiclePlate('')
    setvehicleType('')
  }
  

  return (
    <div className='p-8 bg-black h-screen flex flex-col justify-between '>
      <div>
        <h1 className='font-semibold text-3xl text-zinc-300'> Uber</h1>
        <h1 className='font-medium text-xl text-zinc-400 mt-2'>Welcome to Captain Signup</h1>
      </div>
      <div>
        <form 
        onSubmit={(e) => {submitHandler(e)}}>

          <p className='text-lg font-medium  text-zinc-400'>Enter your name</p>
          <div className='flex w-full gap-2'>
            <input 
            value={firstname} 
            onChange={(e) => {
              setfirstname(e.target.value)
            }}
            className='bg-zinc-300 rounded-lg  text-base placeholder:text-base w-1/2 px-2 py-2' type="text" placeholder='firstname' required/>

            <input 
            value={lastname} 
            onChange={(e) => {
              setlastname(e.target.value)
            }}
            className='bg-zinc-300 rounded-lg text-lg placeholder:text-base w-1/2 px-2 py-2' type="text" placeholder='lastname' required/>
          </div>
       

        <p className='text-lg font-medium  text-zinc-400'>Enter your email</p>

        <input 
        value={email} 
        onChange={(e) => {
          setemail(e.target.value)
        }}
        className='bg-zinc-300 rounded-lg text-lg placeholder:text-base w-full px-2 py-2' type="email" placeholder='email@example.com' required/>

        <p className='text-lg font-medium  text-zinc-400'>Enter password</p>

        <input 
        value={password} 
        onChange={(e) => {
          setpassword(e.target.value)
        }}
        className='bg-zinc-300 rounded-lg text-lg placeholder:text-base w-full px-2 py-2' type="password" placeholder='password' required/>

        <p className='text-lg font-medium  text-zinc-400'>Enter Vehicle Details</p>

        <div className='grid grid-cols-2 grid-rows-2 w-full gap-2'>
          <input 
            value={vehicleColor} 
            onChange={(e) => {
              setvehicleColor(e.target.value)
            }}
            className='bg-zinc-300 rounded-lg px-4 py-2 text-lg placeholder:text-base' type="text" placeholder='Color' required/>
        <input 
            value={vehicleCapacity} 
            onChange={(e) => {
              setvehicleCapacity(e.target.value)
            }}
            className='bg-zinc-300 rounded-lg px-4 py-2 text-lg placeholder:text-base' type="number" placeholder='Capacity' required/>
        <input 
            value={vehiclePlate} 
            onChange={(e) => {
              setvehiclePlate(e.target.value)
            }}
            className='bg-zinc-300 rounded-lg px-4 py-2 text-lg placeholder:text-base' type="text" placeholder='Plate no.' required/>
        <select
        required
        className='bg-zinc-300 rounded-lg px-4 py-2 text-lg placeholder:text-base'
        value={vehicleType}
        onChange={(e) => { setvehicleType(e.target.value)}}
        >
          <option value="" disabled>Select vehicle type</option>
          <option value="car" >Car</option>
          <option value="auto" >Auto</option>
          <option value="bike" >Bike</option>
        </select>
        </div>

        <button className='text-zinc-400 text-center text-xl font-medium py-2 rounded-lg w-full bg-zinc-800 mt-6'> Signup</button>
        </form>

        <p className='text-zinc-400 text-right mt-4 font-medium'>Already have an account? <Link to='/captain/login' className='text-blue-800'>Login here</Link></p>

      </div>
      <Link to='/captain-signup' className='inline-block text-zinc-400 text-center text-xl font-medium py-2 rounded-lg w-full bg-zinc-800'> Get started as User </Link>
    </div>
  )
}

export default CaptainSignup