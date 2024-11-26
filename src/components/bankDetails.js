import React, { useState } from "react";
import Navbar from "./Navbar";
import PersonalNavbar from "./personalNav";
import api from "./api";
import { useNavigate } from "react-router-dom";

export const BankDetails = () => {
  const [bankname, setBankname] = useState('');
  const [branchName, setBranchname] = useState('');
  const [accountName, setAccountname] = useState('');
  const [accountNumber, setAccountnumber] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/bank/create', {
       bankname,
       branchName,
       accountName,
       accountNumber
      });

      // If the response is successful, save the token and navigate to the next page
      const token = response.data.accessToken;
      localStorage.setItem('accessToken', token);
      alert(`${bankname} details submitted successfully`)
      navigate('/logout');
    } catch (error) {
      console.error('Failed to post:', error);
      
      // Log the error to inspect the response
      if (error.response) {
        // Server responded with an error
        setError(`Error: ${error.response.status} - ${error.response.data.message || error.response.statusText}`);
      } else if (error.request) {
        // No response was received
        setError("No response from server. Please try again later.");
      } else {
        // Something else went wrong
        setError(`An error occurred: ${error.message}`);
      }
    }
  };



  return (
    <div>
      <PersonalNavbar />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 font-sans">
        <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-lg mt-16 mb-16">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
            BANK DETAILS FORM
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Please provide accurate banking details for bonding.
          </p>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Bank Name
              </label>
              <input
                type="text"
                name="bankname"
                placeholder="Enter your bank's name"
                value={bankname}
                onChange={(e) => setBankname(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Branch Name
              </label>
              <input
                type="text"
                name="branchName"
                placeholder="Enter your branch name"
                value={branchName}
                onChange={(e) => setBranchname(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Account Name
              </label>
              <input
                type="text"
                name="accountName"
                placeholder="Enter the account holder's name"
                value={accountName}
                onChange={(e) => setAccountname(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Account Number
              </label>
              <input
                type="text"
                name="accountNumber"
                placeholder="Enter your account number"
                value={accountNumber}
                onChange={(e) => setAccountnumber(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <div className="flex justify-end items-center mt-6">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800"
                onClick={() => navigate("/logout")} >
                Finish
              </button>
            </div>
          </form>
          <p className="text-center text-gray-600 text-sm mt-8">
            &copy; 2024 Higher Education Students' Grants & Loans Board
          </p>
        </div>
      </div>
    </div>
  );
};
