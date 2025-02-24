import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const ForgotPassword = () => {
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    
    if (passwords.newPassword.trim() === "" || passwords.confirmPassword.trim() === "") {
      toast.error("Both fields are required!");
      return;
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/reset-password`, {
        password: passwords.newPassword,
      });

      if (response.status === 200) {
        toast.success("Password reset successful. You can now log in.");
        navigate("/loginPage");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to reset password. Try again.");
    }
  };

  return (
    <div className="flex h-screen pt-20">
      {/* Left Side */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <h1 className="text-4xl font-bold mb-4">Reset Password</h1>
        <p className="text-gray-500 mb-4">Enter a new password for your account</p>

        <form className="flex flex-col space-y-4 w-3/4" onSubmit={handleResetPassword}>
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={passwords.newPassword}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={passwords.confirmPassword}
            onChange={handleChange}
          />
          <button className="px-8 py-3 bg-orange-500 text-white rounded-full text-lg hover:bg-orange-600 transition duration-300">
            Reset Password
          </button>
        </form>

        <p className="mt-4">
          <Link to="/loginPage" className="text-orange-500 hover:underline">Back to Login</Link>
        </p>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-gradient-to-br from-red-500 to-orange-500 flex flex-col justify-center items-center text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
        <p className="text-center mb-6">You can now create a new password and log in.</p>
        <Link to="/loginPage">
          <button className="px-8 py-2 border-2 border-white rounded-full text-lg hover:bg-white hover:text-red-500 transition duration-300">
            SIGN IN
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
