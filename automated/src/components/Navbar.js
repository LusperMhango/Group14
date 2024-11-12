import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { AiFillMail } from 'react-icons/ai';
import logo from './logo.png';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-gray-800 text-white flex justify-between items-center px-6 py-3">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-10" />
      </div>

      <div className="hidden md:flex space-x-6">
        <a href="/" className="hover:text-yellow-400">Home</a>
        <a href="/" className="hover:text-yellow-400">Personal Details</a>
        <a href="/" className="hover:text-yellow-400">Parents Details</a>
        <a href="/" className="hover:text-yellow-400">Bank Details</a>
        <a href="/" className="hover:text-yellow-400">Loan Amount Details</a>
        <a href="/" className="hover:text-yellow-400">Terms</a>
      </div>

      <div className="flex items-center space-x-4">
        {/*<div className="relative">
          <AiFillMail className="text-yellow-400 text-xl cursor-pointer" />
          <span className="absolute top-0 right-0 bg-orange-500 text-xs rounded-full px-1">3</span>
        </div>*/}

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 hover:text-yellow-400"
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
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
              <a
                href="/dashboard"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Dashboard
              </a>
              <a
                href="/user-guide"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                User Guide
              </a>
              <a
                href="/create-account"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Create Account
              </a>
              <a
                href="/logout"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
