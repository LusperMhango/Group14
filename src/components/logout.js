import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Import Navbar for consistency

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login'); // Redirect to the home page
  };

  return (
    <div>
      {/* Navbar for the header */}
      <Navbar />

      {/* Main content */}
      <div className="flex justify-center items-center min-h-screen bg-gray-400 font-sans">
        <div className="w-full h-screen p-8 bg-gray-300 shadow-lg rounded-lg mt-16">
          <h2 className="text-center text-xl font-semibold mb-4 shadow-lg font-sans">
            SUCCESSFUL BONDING
          </h2>
          <p className="text-center mb-4 border-b-2 border-black w-full shadow-xl font-bold mt-4">
            Congratulations! You have successfully bonded.
          </p>

          {/* Content Section */}
          <div className="flex flex-col items-center font-sans mt-16 space-y-6">
            <img
              src="c.jpg"
              alt="Congratulations"
              className="mx-auto mb-6 h-60 rounded-2xl shadow-lg"
            />
            <p className="text-lg text-center font-bold">
              Please check your email for feedback.
            </p>

            {/* Divider */}
            <div className="w-full h-0.5 bg-gray-800 my-4"></div>
            <div className="w-3/4 h-0.5 bg-gray-800 my-4 mx-auto"></div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="w-40 items-center hover:bg-yellow-900 bg-yellow-500 text-gray-950 p-2 rounded-lg font-semibold"
            >
              Log out
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-sm mt-16 font-bold font-sans">
            2024 Higher Education
            <br />
            Students' Grants & Loans Board
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logout;