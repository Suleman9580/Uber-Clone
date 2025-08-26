import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'


function CaptainLogout() {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    console.log(token)
    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`,{
        headers: {
            Authorization: `beare ${token}`
        }
    }).then((response) => {
        if(response.status === 200) {
            localStorage.removeItem('token')
            navigate('/captain/login')
        }
    })


  return (
    <div>captainlogout</div>
  )
}

export default CaptainLogout