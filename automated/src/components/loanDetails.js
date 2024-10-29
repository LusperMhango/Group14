


import React from 'react';
import { useNavigate } from 'react-router-dom';
const ApprovedLoanDetails = () => {
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
        <h2 className="text-lg font-semibold text-gray-700 mt-2">Stage 4: Approved Loan Details</h2>
      </header>

      {/* Form */}
      <div className="w-full max-w-md bg-white p-6 border border-yellow-700 rounded-lg shadow-md">
        <form className="space-y-4">
          <div>
            <label htmlFor="tuition" className="sr-only">Tuition</label>
            <select
              id="tuition"
              className="w-full p-3 border border-yellow-700 rounded-lg focus:outline-none"
              required
              >
              <option value="">Tuition:</option>
              <option value="full">Full</option>
              <option value="partial">Partial</option>
              <option value="none">None</option>
            </select>
          </div>
          <div>
            <label htmlFor="upkeep" className="sr-only">Upkeep</label>
            <select
              id="upkeep"
              className="w-full p-3 border border-yellow-700 rounded-lg focus:outline-none"
              
              required>
              <option value="">Upkeep:</option>
              <option value="full">Full</option>
              <option value="partial">Partial</option>
              <option value="none">None</option>
            </select>
          </div>
          <div>
            <label htmlFor="equipment" className="sr-only">Equipment and Books</label>
            <select
              id="equipment"
              className="w-full p-3 border border-yellow-700 rounded-lg focus:outline-none"
            >
              <option value="">Equipment and Books:</option>
              <option value="full">Full</option>
              <option value="partial">Partial</option>
              <option value="none">None</option>
            </select>
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              className="bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-800 transition"
              onClick={() => navigate('/bank-details')}>
              Previous
            </button>
            <button
              type="submit"
              className="bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-800 transition"
              onClick={() => navigate('/logout')}>
              Finish
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

export default ApprovedLoanDetails;
