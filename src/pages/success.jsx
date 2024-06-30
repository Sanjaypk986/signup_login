import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  const [isLoggedIn,setLoggedIn] = useState(false)
  useEffect(() => {
    const verifyUser = async()=>{
        try{
          const response = await axios.get(`${import.meta.env.VITE_BASE_API}/auth/verify`,{withCredentials:true})
          const loggedIn = response.data.verified
          setLoggedIn(loggedIn)
          console.log(loggedIn);
        }
        catch(error){
          console.log(error)
        }
    }
    verifyUser()
  }, [])
  return (
    <>
    {isLoggedIn ? (
      <div className='flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-white text-lg md:text-2xl font-semibold'>Login successful</h1>
        <Link to={'/logout'} className='bg-blue-500 text-white p-2 mb-2 rounded-lg hover:bg-blue-600 transition duration-200'>
          Logout
        </Link>
      </div>
    ) : (
      <div className='flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-white text-lg md:text-2xl font-semibold'>Login Unsuccessful</h1>
      </div>
    )}
  </>
  )
}

export default Success
