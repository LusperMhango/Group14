import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="font-sans  text-white flex justify-between items-center px-6 py-3 w-full fixed font-bold text-md leading-tight tracking-wide ">
      <div className="flex items-center">
    <img src="logo.png" alt="Logo" className="w-16 h-16 mx-auto rounded-full"/>
      </div>

      <div className="hidden md:flex space-x-6 ml-20">
      <button
              type="submit"
              className="hover:text-orange-800"
              onClick={() => navigate('/landingpage')}
            >
              Home
            </button>
      <button
              type="submit"
              className="hover:text-orange-800"
              onClick={() => navigate('/personal')}
            >
              Personal Details
            </button>

            <button
              type="submit"
              className="hover:text-orange-800"
              onClick={() => navigate('/parent')}
            >
              Parents Details
            </button>
        <button
              type="submit"
              className="hover:text-orange-800"
              onClick={() => navigate('/loan')}
            >
              Loan Amount
            </button>
            <button
              type="submit"
              className="hover:text-orange-800"
              onClick={() => navigate('/bank')}
            >
              Bank Details
            </button>
        
        
        <a href="/" className="hover:text-orange-800">Terms</a>
      </div>

      <div className="flex items-center space-x-4">

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 hover:text-orange-800"
          >
            <FaUserCircle className="text-xl" />
            <span>Student Name</span>
            {dropdownOpen ? (
              <MdKeyboardArrowUp className="text-lg" />
            ) : (
              <MdKeyboardArrowDown className="text-lg" />
            )}
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-600 rounded-lg shadow-lg">
              <a
                href="/create-account"
                className="block px-4 py-2 hover:bg-gray-200 rounded-lg"
              >
                Account settings
              </a>
              <button
              type="submit"
              className="block py-2 hover:bg-gray-200 rounded-lg px-4 w-full pr-40"
              onClick={() => navigate('/login')}
            >
              Logout
            </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
