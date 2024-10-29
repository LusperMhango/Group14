



import React from 'react';
import { useNavigate } from 'react-router-dom';
const ParentDetails = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center bg-white py-10 px-4">
      {/* Header */}
      <header className="w-full max-w-md text-center mb-4">
        <img src="logo.jpg" alt="Logo" className="h-12 mx-auto mb-4" />
        <nav className="flex justify-center space-x-4 mb-6">
          {/* <button className="bg-yellow-700 text-white px-4 py-2 rounded">Home</button> */}
          <button type="submit"
            className="w-full bg-yellow-700 text-white font-semibold py-3 rounded-lg hover:bg-yellow-80 transition" onClick={() => navigate('/Landing')}>
       home 
      </button>
          {/* <button className="bg-yellow-700 text-white px-4 py-2 rounded">Bonding Tutorial</button> */}
        </nav>
        <h1 className="text-xl font-bold text-gray-800">Bonding in Progress</h1>
        <h2 className="text-lg font-semibold text-gray-700 mt-2">Stage 2: Parents/Guardian Details</h2>
      </header>

      {/* Form */}
      <div className="w-full max-w-md bg-white p-6 border border-yellow-700 rounded-lg shadow-md">
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full name:"
              className="w-full p-3 border border-yellow-700 rounded-lg focus:outline-none"
              required/>
          </div>
          <div>
            <input
              type="text"
              placeholder="Postal Address:"
              className="w-full p-3 border border-yellow-700 rounded-lg focus:outline-none"
              required/>
          </div>
          <div>
            <input
              type="text"
              placeholder="Physical Address:"
              className="w-full p-3 border border-yellow-700 rounded-lg focus:outline-none"
              required/>
          </div>
          <div>
            <input
              type="text"
              placeholder="Home village:"
              className="w-full p-3 border border-yellow-700 rounded-lg focus:outline-none"
              required />
          </div>
          <div>
            <input
              type="text"
              placeholder="District:"
              className="w-full p-3 border border-yellow-700 rounded-lg focus:outline-none"
              required />
          </div>
          <div>
            <input
              type="text"
              placeholder="Occupation:"
              className="w-full p-3 border border-yellow-700 rounded-lg focus:outline-none"
              
              required/>
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone number:"
              className="w-full p-3 border border-yellow-700 rounded-lg focus:outline-none"
              required />
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              className="bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-800 transition"onClick={() => navigate('/personal-details')}
            >
              Previous
            </button>
            <button
              type="submit"
              className="bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-800 transition" onClick={() => navigate('/bank-details')}
            >
              Next
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-500 text-sm">
        <p>All Rights Reserved.</p>
        <p>Sample Web Application to digitize the bonding process</p>
        <p>A COM311/COM312 Project 2023</p>
      </footer>
    </div>
  );
};

export default ParentDetails;
