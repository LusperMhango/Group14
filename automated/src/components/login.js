

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email, "Password:", password);
    
    // After successful login, navigate to the landing page
    navigate('/landing'); // Redirects to the landing page
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <img
          src="logo.jpg" // Make sure this path is correct for your logo image
          alt="Logo"
          className="mx-auto mb-6 h-16"
        />
        <h2 className="text-2xl font-bold mb-6">SFMIS - Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-left text-gray-600 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-left text-gray-600 mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit" // Ensure the button submits the form
            className="w-full bg-black text-white p-3 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>

        <div className="mt-6">
          <a href="/reset-password" className="block text-blue-600 hover:underline mb-3">Lost your password?</a>
          <p className="text-gray-600">2024 Higher Education Students' Grants & Loans board</p>
        </div>
      </div>
    </div>
  );
}

export default Login;


