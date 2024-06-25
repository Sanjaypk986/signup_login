import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <h1 className='text-white text-lg md:text-2xl font-semibold'>Login succesfully</h1>
      <Link to={'/logout'} className='bg-blue-500 text-white p-2 mb-2 rounded-lg hover:bg-blue-600 transition duration-200' >Logout</Link>
    </div>
  )
}

export default Success
