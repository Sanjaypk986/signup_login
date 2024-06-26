import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

    const navigate = useNavigate()
    useEffect(() => {
     
        const loggingOut = async()=>{
           try{
            const response = await axios(`${import.meta.env.VITE_BASE_API}/auth/logout` ,{withCredentials:true})
            navigate('/')
           }
           catch(error){
            console.log(error);
           }
        }
        loggingOut()
    }, [])
    
  return (
    <div>
        <h1>Loging out...</h1>
    </div>
  )
}

export default Logout