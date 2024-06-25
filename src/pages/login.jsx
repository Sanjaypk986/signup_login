import React, { useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  
  
  return (
    <main className=' flex items-center justify-center '>
    <section className='grid justify-center items-center'>
    <LoginForm />
    </section>
  </main>
  )
}

export default Login
