import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signup } from '../services/user-service';

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup({ username, email, password });

      if (response.data.success) {
        toast.success('Sign Up Successful! 🎉', {
          autoClose: 1000,
          onClose: () => navigate("/loginPage"),
        });
      }
    } catch (error) {
      console.log("Signup error:", error);
      toast.error(error?.response?.data?.message || "Failed to sign up");
    }
  };

  return (
    <div className="flex h-screen pt-20">
      <ToastContainer />
      <div className="w-1/2 bg-gradient-to-br from-red-500 to-orange-500 flex flex-col justify-center items-center text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
        <p className="text-center mb-6">To keep connected with us please login with your personal info</p>
        <Link to="/LoginPage">
          <button className="px-8 py-2 border-2 border-white rounded-full text-lg hover:bg-white hover:text-red-500 transition duration-300">
            SIGN IN
          </button>
        </Link>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <h1 className="text-4xl font-bold mb-4">Create Account</h1>
        <form className="flex flex-col space-y-4 w-3/4" onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" className="p-3 border rounded-lg focus:ring-orange-500" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="email" name="email" placeholder="Email" className="p-3 border rounded-lg focus:ring-orange-500" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" name="password" placeholder="Password" className="p-3 border rounded-lg focus:ring-orange-500" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600">SIGN UP</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
