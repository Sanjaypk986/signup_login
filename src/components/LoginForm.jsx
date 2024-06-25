import { useForm } from "react-hook-form";
import './LoginForm.css';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
