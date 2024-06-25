import { useForm } from "react-hook-form";
import './LoginForm.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LoginForm() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    try{
      const response = await axios.post('http://localhost:3000/auth/login',data,{withCredentials:true})
      console.log(response);
      navigate('/success')
    }
    catch(error){
      console.log(error);
    }
  };
  useEffect(() => {
    const verifyUser = async()=>{
        try{
          const response = await axios.get('http://localhost:3000/auth/verify',{withCredentials:true})
          const loggedIn = response.data.verified
          console.log(loggedIn);
        }
        catch(error){
          console.log(error)
        }
    }
    verifyUser()
  }, [navigate])

  return (
    <div className="lg:w-96 px-5 card ">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="flex flex-col bg-transparent  p-8 max-w-sm w-full"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-white">Login</h2>

        <label htmlFor="email" className="text-white mb-2">Email</label>
        <input 
          type="email" 
          {...register("email", { required: "Email is required" })} 
          className="p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}

        <label htmlFor="password" className="text-white mb-2">Password</label>
        <input 
          type="password" 
          {...register("password", { required: "Password is required" })} 
          className="p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && <span className="text-red-500">{errors.password.message}</span>}

        <input 
          type="submit" 
          value="Login" 
          className="bg-blue-500 text-white p-2 mb-2 rounded-lg hover:bg-blue-600 transition duration-200"
        />
      </form>
    </div>
  );
}
