import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";

function LandingPage() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLanding = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    {
      setIsLoading(false);
    }
    navigate("/personal");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 text-white">
      <Navbar />
      <main className="flex mt-20 flex-col lg:flex-row items-center justify-between flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12 font-sans">
        {/* Text Section */}
        <div className="flex flex-col text-center lg:text-left max-w-lg">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-extrabold leading-tight tracking-wide font-sans whitespace-nowrap lg:border-r-4 border-white animate-typewriter overflow-hidden">
            Your Effortless Bonding
          </h1>
          <p className="text-base sm:text-lg md:text-lg mt-6 font-medium animate-bounceOnce">
            Start your journey toward higher education with ease and assurance.
          </p>
          <div className="mt-6 sm:mt-8">
            <button
              onClick={handleLanding}
              disabled={isLoading}
              className="px-2 py-1 sm:px-6 sm:py-3 text-sm sm:text-lg font-md font-extrabold font-sans font-semibold text-gray-300 bg-orange-700 rounded-lg shadow hover:bg-orange-800 focus:outline-none focus:ring-1 transition-all duration-300 shadow-xl"
            >
              {isLoading ? "Loading..." : "Start Bonding"}
            </button>
            {error && (
              <p className="text-red-500 text-sm mt-4 font-medium">{error}</p>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-8 lg:mt-0 lg:ml-12">
          <img
            src="shake.jpg"
            alt="Handshake illustration"
            className="w-3/4 sm:w-full max-w-full sm:max-w-md sm:mb-20 lg:max-w-lg rounded-lg shadow-4xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
