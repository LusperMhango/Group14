

import React, { useState } from "react";
//import React from 'react';
import { useNavigate } from 'react-router-dom';

const BankDetails = () => {
    const [, setaccountnumber] = useState("");
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center bg-white py-10 px-4">
      {/* Header */}
      <header className="w-full max-w-md text-center mb-4">
        <img src="logo.jpg" alt="Logo" className="h-12 mx-auto mb-4" />
        <nav className="flex justify-center space-x-4 mb-6">
          <button className="bg-yellow-700 text-white px-4 py-2 rounded" onClick={() => navigate('/Landing')}>Home</button>
          {/* <button className="bg-yellow-700 text-white px-4 py-2 rounded">Bonding Tutorial</button> */}
        </nav>
        <h1 className="text-xl font-bold text-gray-800">Bonding in Progress</h1>
        <h2 className="text-lg font-semibold text-gray-700 mt-2">Stage 3: Bank Details</h2>
      </header>

      {/* Form */}
      <div className="w-full max-w-md bg-white p-6 border border-yellow-700 rounded-lg shadow-md">
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Bank name:"
              className="w-full p-3 border border-yellow-700 rounded-lg focus:outline-none"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Branch:"
              className="w-full p-3 border border-yellow-700 rounded-lg focus:outline-none"
              required
              />
          </div>
          <div>
            <input
              type="text"
              placeholder="Account name:"
              className="w-full p-3 border border-yellow-700 rounded-lg focus:outline-none"
              required
              />
          </div>
          <div>
            <input
              type="text"
              placeholder="Account number:"
              className="w-full p-3 border border-yellow-700 rounded-lg focus:outline-none"
              onChange={(e) => setaccountnumber(e.target.value)}
              required
               />
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              className="bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-800 transition"
              onClick={() => navigate('/parent-details')}>
              Previous
            </button>
            <button
              type="submit"
              className="bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-800 transition"
              onClick={() => navigate('/loan-details')}>
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

export default BankDetails;
