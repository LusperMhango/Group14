// import React from 'react';


import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600 py-10 px-4">
      <div className="fixed w-full max-w-3xl bg-gray-200 px-2 border border-gray-300 rounded-xl shadow-lg">
        {/* Header */}
        <header className="text-center mb-8">
          <img src="logo.jpg" alt="Logo" className="w-40 h-40 mx-auto mb-4 rounded-full mt-8"/>
          <h2 className="text-3xl font-bold text-gray-800 font-serrif">SFMIS - Create account</h2>
        </header>

        {/* Form */}
        <form className="space-y-5">
          <div className='flex justify-center'>
            <input
              type="text"
              placeholder="Firstname"
              required
              className="text-xl w-3/4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className='flex justify-center'>
            <input
              type="text"
              placeholder="Surname"
              required
              className="text-xl w-3/4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className='flex justify-center'>
            <input
              type="text"
              placeholder="RegNumber"
              required
              className="text-xl w-3/4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className='flex justify-center'>
            <input
              type="email"
              placeholder="Email"
              required
              className=" text-xl w-3/4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className='flex justify-center'>
            <input
              type="password"
              placeholder="Password"
              required
              className="text-xl w-3/4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className='flex justify-center'>
            <input
              type="password"
              placeholder="Confirm password"
              required
              className="text-xl w-3/4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex justify-between items-center mt-6 px-24">
            <button
              type="button"
              className="bg-yellow-600 text-white font-semibold py-1 px-2 rounded-lg hover:bg-yellow-700 transition"
              onClick={() => navigate('/landingpage')}
            >
              Log in
            </button>
            <button
              type="submit"
              className="bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-700 transition"
              onClick={() => navigate('/landingpage')}
            >
              Create Account
            </button>
          </div>
        </form>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-500 text-sm">
          
        </footer>
      </div>
    </div>
  );
};

export default CreateAccount;
