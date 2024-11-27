import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";
import Navbar from "./Navbar";
import PersonalNavbar from "./personalNav";

export const PersonalDetails = () => {
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [gender, setGender] = useState('');
  const [phonenumber, setPhone] = useState('');
  const [homevillage, setHomevillage] = useState('');
  const [traditionalAuthority, setTA] = useState('');
  const [nationalID, setNationaId] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/personal/create', {
        firstname,
        surname,
        gender,
        phonenumber,
        homevillage,
        traditionalAuthority,
        nationalID,
      });

      // If the response is successful, save the token and navigate to the next page
      const token = response.data.accessToken;
      localStorage.setItem('accessToken', token);
      alert(`personal details submitted successfully ${firstname}`);
      navigate('/parent');
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
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 font-sans px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="w-full max-w-2xl p-6 sm:p-10 bg-white shadow-2xl rounded-lg mt-8 mb-8 sm:mt-10 sm:mb-10 md:mt-12 md:mb-12 lg:mt-16 lg:mb-16">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            PERSONAL DETAILS FORM
          </h2>
          <p className="text-center text-sm sm:text-base md:text-lg text-gray-600 mb-6 font-sans">
            Please enter accurate personal details.
          </p>
          <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Firstname</label>
              <input
                type="text"
                name="firstname"
                placeholder="Enter Firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Surname</label>
              <input
                type="text"
                name="surname"
                placeholder="Enter Surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Gender</label>
              <select
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md placeholder-gray-400"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter Phone Number"
                value={phonenumber}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Home Village</label>
              <input
                type="text"
                name="homeVillage"
                placeholder="Enter Home Village"
                value={homevillage}
                onChange={(e) => setHomevillage(e.target.value)}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Traditional Authority</label>
              <input
                type="text"
                name="traditional"
                placeholder="Enter T/A"
                value={traditionalAuthority}
                onChange={(e) => setTA(e.target.value)}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">National ID</label>
              <input
                type="text"
                name="nationalId"
                placeholder="Enter National ID"
                value={nationalID}
                onChange={(e) => setNationaId(e.target.value)}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md placeholder-gray-400"
              />
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <div className="flex justify-end mt-4 sm:mt-6">
              <button
                type="submit"
                className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800"
              >
                Submit
              </button>
            </div>
          </form>

          <p className="text-center text-sm sm:text-base text-gray-600 mt-6 sm:mt-8 font-sans">
            &copy; 2024 Higher Education Students' Grants & Loans Board
          </p>
        </div>
      </div>
    </div>
  );
};
