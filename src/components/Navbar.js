import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="font-sans text-white flex justify-between items-center px-6 py-3 w-full fixed font-bold text-md leading-tight tracking-wide bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 z-50">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="w-16 h-16 rounded-full" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
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
      <div
        className={`fixed top-0 left-0 h-1/2 w-60 bg-blue-600 text-white transform ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-40`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-4 py-4">
          <button
            onClick={toggleMobileMenu}
            className="text-xl text-white focus:outline-none"
          >
            <FaTimes />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-start px-6 py-4 space-y-4">
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
      </div>
    </div>
  );
};

export default Navbar;
