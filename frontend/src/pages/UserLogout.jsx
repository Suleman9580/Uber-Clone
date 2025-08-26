import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'


function UserLogout() {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    console.log(token)
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`,{
        headers: {
            Authorization: `beare ${token}`
        }
    }).then((response) => {
        if(response.status === 200) {
            localStorage.removeItem('token')
            navigate('/user/login')
        }
    })


  return (
    <div>UserLogout</div>
  )
}

export default UserLogout