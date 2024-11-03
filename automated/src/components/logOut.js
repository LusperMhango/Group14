




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    
      setIsMenuOpen(!isMenuOpen);
    
  };

  const handleLogout = () => {
    
    localStorage.clear();
    
    
    navigate('/'); 
  };

  return (
    // <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className=" bg-gray-300 shadow-md rounded-lg fixed-center p-8 max-w-md w-3/4 text-center gap-4 mx-auto md:p-6 lg:p-8">
        <header className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src="logo.jpg"
             alt="Logo"
              className="h-20 mr-4 rounded-full" />
            <div className="flex space-x-2">
              <button className="text-sm text-gray-600 bg-orange-400 py-2 px-4 font-bold rounded-lg hover:bg-orange-500" onClick={() => navigate('/Landing')}>home</button>
              <button className="text-sm text-gray-600 bg-orange-400 py-2 px-4 rounded-lg hover:bg-orange-500" onClick={() => navigate('/personal-details')}>start bonding</button>
            </div>
          </div>
          <button onClick={handleMenuClick} className="text-orange-600 hover:bg-orange-600  bg-orange-300 rounded-2xl p-2">
            <div className="flex flex-col space-y-1">
              <div className="h-1 w-6 bg-gray-600"></div>
              <div className="h-1 w-6 bg-gray-600"></div>
              <div className="h-1 w-6 bg-gray-600"></div>
            </div>
          </button>
        </header>

{/* Dropdown Menu */}
{isMenuOpen && (
          // <div className="bg-orange -400 p-4 rounded-lg shadow-md mb-4  ">
            <ul className="text-right">
              <li><button onClick={() => navigate('/page1')} className="text-gray-900 hover:underline">Page 1</button></li>
              <li><button onClick={() => navigate('/page2')} className="text-gray-900 hover:underline">Page 2</button></li>
              <li><button onClick={() => navigate('/page3')} className="text-gray-900 hover:underline">Page 3</button></li>
              <li><button onClick={() => navigate('/page4')} className="text-gray-900 hover:underline">Page 4</button></li>
              <li><button onClick={() => navigate('/page5')} className="text-gray-900 hover:underline">Page 5</button></li>
              <li><button onClick={() => navigate('/page6')} className="text-gray-900 hover:underline">Page 6</button></li>
              <li><button onClick={() => navigate('/page7')} className="text-gray-900 hover:underline">Page 7</button></li>
              <li><button onClick={() => navigate('/page8')} className="text-gray-900 hover:underline">Page 8</button></li>
              <li><button onClick={() => navigate('/page9')} className="text-gray-900 hover:underline">Page 9</button></li>
            </ul>
          // </div>
        )}



        <h1 className="text-4xl font-bold mb-4 text-center  text-green-500">Good Job!!....</h1>
        <h1 className="text-2xl font-semibold mb-4 text-center text-black">You have successfully bonded.</h1>
        
        <img src="c.jpg" 
        alt="Handshake illustration" 
        className="mx-auto mb-6 h-60 rounded-2xl" />
<h4>please check your email for feedback</h4>
<div className='w-full h-0.5 bg-gray-800 my-4'></div>
<div className='w-3/4 h-0.5 bg-gray-800 my-4 mx-auto'></div>
        <button onClick={handleLogout} className="w-40 items-center hover:bg-orange-900 bg-orange-400 text-gray-950 p-1 rounded-lg font-semibold">Log out</button>

        <footer className="mt-6">
        <p className="text-gray-900 text-center">2024 Higher Education </p>
        <p className='text-gray-900 text-center '> Students' Grants & Loans board</p>
        </footer>
      </div>
    // </div>
  );
}

export default Logout;
