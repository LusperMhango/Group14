import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";
import Navbar from "./Navbar";
import PersonalNavbar from "./personalNav";

export const ParentDetails = () => {
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [relation, setRelation] = useState('');
  const [phonenumber, setPhone] = useState('');
  const [occupation, setOccupation] = useState('');
  const [homevillage, setHomevillage] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/parent/create', {
        firstname,
        surname,
        relation,
        phonenumber,
        occupation,
        homevillage,
      });

      // If the response is successful, save the token and navigate to the next page
      const token = response.data.accessToken;
      localStorage.setItem('accessToken', token);
      alert(`Parent details submitted successfully ${firstname}`);
      navigate('/bank');
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
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl p-6 sm:p-8 bg-white shadow-2xl rounded-lg mt-16 mb-16">
          <h2 className="text-center text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-sans">
            PARENT DETAILS FORM
          </h2>
          <p className="text-center text-gray-600 mb-6 sm:mb-8 font-sans">
            Please enter accurate parent details.
          </p>
          <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Firstname:</label>
              <input
                type="text"
                name="firstname"
                placeholder="Enter Firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Surname:</label>
              <input
                type="text"
                name="surname"
                placeholder="Enter Surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Relation:</label>
              <input
                type="text"
                name="relation"
                placeholder="Enter Relation"
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone Number:</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter Phone Number"
                value={phonenumber}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Home Village:</label>
              <input
                type="text"
                name="homeVillage"
                placeholder="Enter Home Village"
                value={homevillage}
                onChange={(e) => setHomevillage(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Occupation:</label>
              <input
                type="text"
                name="occupation"
                placeholder="Enter Occupation"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400"
              />
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <div className="flex justify-end mt-4 sm:mt-6">
              <button
                type="submit"
                className="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800"
              >
                Submit
              </button>
            </div>
          </form>

          <p className="text-center text-gray-600 text-sm mt-6 sm:mt-8 font-sans">
            &copy; 2024 Higher Education Students' Grants & Loans Board
          </p>
        </div>
      </div>
    </div>
  );
};
