import React, { useState } from 'react';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="font-sans text-white flex justify-between items-center px-6 py-3 w-full fixed font-bold text-md leading-tight tracking-wide bg-gradient-to-r from-blue-700 via-blue-800 to-blue-700 z-50">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="w-16 h-16 mx-auto rounded-full" />
      </div>

      {/* Desktop Navigation */}
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
        <a href="/" className="hover:text-orange-800">
          Terms
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-xl">
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-600 text-white flex flex-col items-start px-6 py-4 space-y-4 md:hidden z-40">
          <button
            type="submit"
            className="hover:text-orange-800"
            onClick={() => {
              navigate('/landingpage');
              setMobileMenuOpen(false);
            }}
          >
            Home
          </button>
          <button
            type="submit"
            className="hover:text-orange-800"
            onClick={() => {
              navigate('/personal');
              setMobileMenuOpen(false);
            }}
          >
            Personal Details
          </button>
          <button
            type="submit"
            className="hover:text-orange-800"
            onClick={() => {
              navigate('/parent');
              setMobileMenuOpen(false);
            }}
          >
            Parents Details
          </button>
          <button
            type="submit"
            className="hover:text-orange-800"
            onClick={() => {
              navigate('/loan');
              setMobileMenuOpen(false);
            }}
          >
            Loan Amount
          </button>
          <button
            type="submit"
            className="hover:text-orange-800"
            onClick={() => {
              navigate('/bank');
              setMobileMenuOpen(false);
            }}
          >
            Bank Details
          </button>
          <a
            href="/"
            className="hover:text-orange-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Terms
          </a>
        </div>
      )}

      {/* User Dropdown */}
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
