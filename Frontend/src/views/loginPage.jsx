import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../services/user-service'; // Assuming your login service is properly set

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });

      // Handle successful login response
      if (response?.message === 'Login successful!') {
        toast.success('Login Successful! 🎉', {
          autoClose: 1000,
          onClose: () => navigate("/"),  // Redirect to the homepage or dashboard
        });
      } else {
        toast.error("Login failed, please check your credentials.");
      }
    } catch (error) {
      console.log("Login error:", error);
      toast.error(error?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex h-screen pt-20">
      <ToastContainer />
      
      {/* Left Side (Signup Prompt) */}
      <div className="w-1/2 bg-gradient-to-br from-red-500 to-orange-500 flex flex-col justify-center items-center text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Hello, Friend!</h1>
        <p className="text-center mb-6">Enter your details and start your journey with us</p>
        <Link to="/SignUpPage">
          <button className="px-8 py-2 border-2 border-white rounded-full text-lg hover:bg-white hover:text-red-500 transition duration-300">
            SIGN UP
          </button>
        </Link>
      </div>

      {/* Right Side (Login Form) */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <h1 className="text-4xl font-bold mb-4">Sign In</h1>

        {/* Social Login Icons */}
        <div className="flex space-x-4 mb-4">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300">
            <i className="fab fa-facebook-f"></i>
          </div>
          <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300">
            <i className="fab fa-google"></i>
          </div>
          <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300">
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>

        <p className="text-gray-500 mb-4">or use your email to sign in</p>

        {/* Login Form */}
        <form className="flex flex-col space-y-4 w-3/4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <button
            type="submit"
            className="px-8 py-3 bg-orange-500 text-white rounded-full text-lg hover:bg-orange-600 transition duration-300"
          >
            SIGN IN
          </button>
        </form>

        {/* Forgot Password Link */}
        <Link to="/ForgotPassword" className="mt-4 text-sm text-orange-500 hover:underline">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
