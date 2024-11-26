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
    navigate('/personal')
  };
    


  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 text-white">
      <Navbar />
      <main className="flex flex-col lg:flex-row items-center justify-between flex-grow max-w-6xl mx-auto px-6 lg:px-12 py-12 font-sans">
        {/* Text Section */}
        <div className="flex flex-col text-center lg:text-left max-w-lg">
          <h1 className="text-4xl font-extrabold leading-tight tracking-wide font-sans whitespace-nowrap border-r-4 border-white animate-typewriter overflow-hidden">
            Your Effortless Bonding
          </h1>
          <p className="text-lg mt-4 font-medium animate-bounceOnce">
            Start your journey toward higher education with ease and assurance.
          </p>
          <div className="mt-8">
            <button
              onClick={handleLanding}disabled={isLoading}
              className="px-4 py-2 mt-8 text-lg font-md font-extrabold font-sans font-semibold text-gray-300 bg-orange-700 rounded-lg shadow hover:bg-orange-800 focus:outline-none focus:ring-1  transition-all duration-300 shadow-2xl"
               // Disable button while loading
            >
                 {isLoading ? "Loading..." : "Start Bonding"}
            </button>
            {error && (
              <p className="text-red-500 text-sm mt-4 font-medium">{error}</p>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-12 lg:mt-0 lg:ml-20">
          <img
            src="shake.jpg"
            alt="Handshake illustration"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate-bounceOnce"
          />
     
        </div>
      </main>
      <div>
      <Footer/>
      </div>
      </div>
      
  );
}

export default LandingPage;
