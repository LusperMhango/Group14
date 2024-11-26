import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import PersonalNavbar from "./personalNav";
import api from "./api";

const ApprovedLoanDetails = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [Tuition, setTuition] = useState('');
  const [Upkeep, setUpkeep] = useState('');
  const [Totalamount, setTotal] = useState('');
  const [error, setError] = useState(null);
  

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/loan/create', {
       Tuition,
       Upkeep,
       Totalamount,
      });

      // If the response is successful, save the token and navigate to the next page
      const token = response.data.accessToken;
      localStorage.setItem('accessToken', token);
      alert(`${Tuition} and ${Upkeep} confirmed successfully`)
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

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <PersonalNavbar />
      <div className="flex justify-center items-center min-h-screen  bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700  font-sans">
        <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded tracking-wide reading-tight font-sans ">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
          LOAN AMOUNT FORM
          </h2>
          <p className="text-center text-gray-600 mb-8">
          Please provide accurate loan Amount for bonding.
          </p>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label htmlFor="tuition" className="block text-gray-700 font-medium mb-2 tracking-wide reading-tight font-sans">
                Tuition:
              </label>
              <select
                type="text"
                name="tuition"
                value={Tuition}
                onChange={(e) => setTuition(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none opacity-50"
                required
              >
                <option value="">Select Tuition Amount</option>
                <option value="full">MWK 650,000</option>
                <option value="partial">MWK 325,000</option>
                <option value="none">None</option>
              </select>
            </div>
            <div>
              <label htmlFor="upkeep" className="block text-gray-700 font-medium mb-2 tracking-wide reading-tight font-sans">
                Upkeep:
              </label>
              <select
                id="upkeep"
                type="text"
                name="upkeep"
                value={Upkeep}
                onChange={(e) => setUpkeep(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none opacity-50"
                required
              >
                <option value="">Select Upkeep Amount</option>
                <option value="full">MWK 590,000</option>
                <option value="partial">MWK 270,000</option>
                <option value="none">None</option>
              </select>
            </div>
            <div>
              <label htmlFor="totalAmount" className="block text-gray-800 font-medium mb-2 tracking-wide reading-tight font-sans ">
                Total Amount:
              </label>
              <select
                id="totalAmount"
                type="text"
                name="Totalamount"
                value={Totalamount}
                onChange={(e) => setTotal(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-200 focus:outline-none opacity-50"
                required
              >
                <option value="">Select Total Amount</option>
                <option value="full">MWK 1,250,000</option>
                <option value="partial">MWK 650,000</option>
                <option value="none">None</option>
              </select>
            </div>

            <div className="flex justify-between items-center mt-6">
              <button
                type="button"
                className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
                onClick={() => navigate("/parent")}
              >
                Previous
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800"
              >
                Proceed
              </button>
            </div>
          </form>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <p className="text-center text-gray-600 text-sm mt-8 font-sans">
            &copy; 2024 Higher Education Students' Grants & Loans Board
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApprovedLoanDetails;
