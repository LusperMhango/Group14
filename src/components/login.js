import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './api'; // Ensure you import your API instance

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your login API endpoint
      const response = await api.post('/auth/login', { email, password });
      
      // Assuming the response contains the access token
      const token = response.data.accessToken;
      
      // Store the access token in localStorage
      localStorage.setItem('accessToken', token);
      
      // Redirect the user to the landing page after successful login
      navigate('/landingpage');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="font-sans flex items-center justify-center min-h-screen bg-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl rounded p-6 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        <div className="h-32 mb-8 text-center">
          <img
            src="logo.png" 
            alt="Logo"
            className="mx-auto mb-6 h-28 w-28 sm:h-32 sm:w-32 rounded"
          />
        </div>
        <h2 className="font-sans text-lg sm:text-xl font-semibold mb-4 text-center text-gray-500">
          SFMIS - Login
        </h2>
        <div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex justify-center">
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="font-sans w-full max-w-xs sm:max-w-sm p-2 border border-yellow-800 rounded-md py-1 shadow-sm"
              />
            </div>

            <div className="flex justify-center">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="font-sans w-full max-w-xs sm:max-w-sm p-2 border border-yellow-800 rounded-md py-1 shadow-sm"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="font-sans w-full max-w-xs sm:max-w-sm bg-gray-700 text-white p-2 font-semibold rounded-md py-1 hover:bg-gray-900 shadow-md"
              >
                Login
              </button>
            </div>

            {error && (
              <p className="text-center text-red-500 text-sm">{error}</p>
            )}
          </form>
        </div>

        <div className="flex justify-center">
          <div className="w-3/4 h-px bg-gray-800 my-4"></div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="button"
            className="font-sans text-gray-500 hover:underline font-medium mr-4"
            onClick={() => navigate('/')}
          >
            Signup
          </button>
          <a
            href="/reset-password"
            className="font-medium font-sans text-gray-500 hover:underline"
          >
            Lost your password?
          </a>
        </div>
        <p className="font-sans text-gray-600 text-center mt-4 text-sm">
          @ 2024 Higher Education Students' Grants & Loans Board
        </p>
      </div>
    </div>
  );
}

export default Login;
