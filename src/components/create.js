import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './api';

const CreateAccount = () => {
  const [firstname, setFirstname] = useState('');
  const [surname, setsurname] = useState('');
  const [RegNumber, setRegnumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAccount = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/auth/create', {
        firstname,
        surname,
        RegNumber,
        email,
        password,
      });

      const token = response.data.accessToken;

      localStorage.setItem('accessToken', token);

      navigate('/login');
    } catch (error) {
      console.error('failed to create an account:', error);
      setError('incorrect input');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 py-10 px-4 sm:px-6 lg:px-8 scroll w-full overflow-y-auto transform transition">
      <div className="max-w-xl bg-white px-4 sm:px-6 md:px-8 center border border-gray-200 rounded shadow-lg w-full transition">
        <header className="text-center mb-6">
          <img
            src="logo.png"
            alt="Logo"
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 rounded-full mt-4 sm:mt-6"
          />
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-600 font-sans">
            SFMIS - Create Account
          </h2>
        </header>

        <form onSubmit={handleAccount} className="space-y-4">
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Firstname"
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="text-sm sm:text-md w-11/12 sm:w-3/4 p-2 sm:p-3 border border-yellow-700 shadow-lg rounded"
            />
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Surname"
              required
              value={surname}
              onChange={(e) => setsurname(e.target.value)}
              className="text-sm sm:text-md w-11/12 sm:w-3/4 p-2 sm:p-3 border border-yellow-700 shadow-lg rounded"
            />
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Regnumber"
              required
              value={RegNumber}
              onChange={(e) => setRegnumber(e.target.value)}
              className="text-sm sm:text-md w-11/12 sm:w-3/4 p-2 sm:p-3 border border-yellow-700 shadow-lg rounded"
            />
          </div>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-sm sm:text-md w-11/12 sm:w-3/4 p-2 sm:p-3 border border-yellow-700 shadow-lg rounded"
            />
          </div>
          <div className="flex justify-center">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-sm sm:text-md w-11/12 sm:w-3/4 p-2 sm:p-3 border border-yellow-700 shadow-lg rounded"
            />
          </div>
          <div className="flex justify-center">
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="text-sm sm:text-md w-11/12 sm:w-3/4 p-2 sm:p-3 border border-yellow-700 shadow-lg rounded"
            />
          </div>

          <div className="flex justify-center items-center mt-4">
            <button
              type="submit"
              className="bg-gray-700 text-white font-semibold py-2 px-6 rounded hover:bg-gray-900 transition text-sm sm:text-md"
            >
              Create Account
            </button>
          </div>
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              className="text-sm sm:text-md font-sans text-gray-500 hover:underline"
              onClick={() => navigate('/login')}
            >
              Already have an account?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
