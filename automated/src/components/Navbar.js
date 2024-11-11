import React, { useState } from 'react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex items-center justify-between bg-gray-200 p-4 rounded-lg shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="/logo.png" 
          alt="Logo"
          className="w-12 h-12 rounded-full"
        />
      </div>

      {/* Buttons Section */}
      <div className="flex space-x-4">
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400">
          Terms
        </button>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400">
          Help
        </button>
      </div>

      {/* Menu Button */}
      <button
        onClick={toggleSidebar}
        className="bg-orange-400 p-2 rounded-lg hover:bg-orange-300"
      >
        <div className="w-6 h-1 bg-white mb-1"></div>
        <div className="w-6 h-1 bg-white mb-1"></div>
        <div className="w-6 h-1 bg-white"></div>
      </button>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-6 shadow-lg">
          <button
            onClick={toggleSidebar}
            className="text-white text-xl mb-4 hover:text-gray-300"
          >
            Close ✖
          </button>
          <ul className="space-y-4">
            {Array.from({ length: 7 }, (_, i) => (
              <li key={i}>
                <a
                  href={`#page${i + 1}`}
                  className="block p-2 hover:bg-gray-700 rounded"
                >
                  Page {i + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
