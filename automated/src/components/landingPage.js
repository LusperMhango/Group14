





// import React from 'react';
// //import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// function LandingPage() {
//     const navigate = useNavigate();
//   const handleMenuClick = () => {
//     // Add your menu toggle logic here
//     console.log("Menu clicked!");
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-200">
//       <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        
//         <header className="flex items-center justify-between mb-4">
//           <div className="flex items-center">
//             <img
//               src="logo.jpg" // Make sure this path is correct for your logo image
//               alt="Logo"
//               className="h-12 mr-2" // Adjust height and margin as needed
//             />
//             <div className="flex space-x-2">
//               <button className="text-sm text-gray-600 bg-gray-100 py-2 px-4 rounded-lg hover:bg-gray-200">Terms</button>
//               <button className="text-sm text-gray-600 bg-gray-100 py-2 px-4 rounded-lg hover:bg-gray-200"> Help</button>
//             </div>
//           </div>
//           <button onClick={handleMenuClick} className="text-gray-600 p-2">
//             <div className="flex flex-col space-y-1">
//               <div className="h-1 w-6 bg-gray-600"></div>
//               <div className="h-1 w-6 bg-gray-600"></div>
//               <div className="h-1 w-6 bg-gray-600"></div>
//             </div>
//           </button>
//         </header>

//         <h1 className="text-3xl font-bold mb-4">WELCOME TO ONLINE BONDING SYSTEM</h1>
        
//         <img
//           src="s.png"
//           alt="Handshake illustration"
//           className="mx-auto mb-6 h-40"
//         />

//         {/* <Link to="/start-bonding">
//           <button className="w-full bg-orange-500 text-white p-3 rounded-lg font-semibold">Start Bonding</button>
//         </Link> */}

// <button className="w-full bg-orange-500 text-white p-3 rounded-lg font-semibold" onClick={() => navigate('/personal-details')}>
//         Start Bonding
//       </button>

//         <footer className="mt-6">
//           <p className="text-gray-600">2024 Higher Education Students' Grants & Loans board</p>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default LandingPage;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        
        <header className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src="logo.jpg" // Ensure the path is correct
              alt="Logo"
              className="h-12 mr-2"
            />
            <div className="flex space-x-2">
              <button className="text-sm text-gray-600 bg-gray-100 py-2 px-4 rounded-lg hover:bg-gray-200">Terms</button>
              <button className="text-sm text-gray-600 bg-gray-100 py-2 px-4 rounded-lg hover:bg-gray-200">Help</button>
            </div>
          </div>
          <button onClick={handleMenuClick} className="text-gray-600 p-2">
            <div className="flex flex-col space-y-1">
              <div className="h-1 w-6 bg-gray-600"></div>
              <div className="h-1 w-6 bg-gray-600"></div>
              <div className="h-1 w-6 bg-gray-600"></div>
            </div>
          </button>
        </header>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4  ">
            <ul className="text-left">
              <li><button onClick={() => navigate('/page1')} className="text-blue-500 hover:underline">Page 1</button></li>
              <li><button onClick={() => navigate('/page2')} className="text-blue-500 hover:underline">Page 2</button></li>
              <li><button onClick={() => navigate('/page3')} className="text-blue-500 hover:underline">Page 3</button></li>
              <li><button onClick={() => navigate('/page4')} className="text-blue-500 hover:underline">Page 4</button></li>
              <li><button onClick={() => navigate('/page5')} className="text-blue-500 hover:underline">Page 5</button></li>
              <li><button onClick={() => navigate('/page6')} className="text-blue-500 hover:underline">Page 6</button></li>
              <li><button onClick={() => navigate('/page7')} className="text-blue-500 hover:underline">Page 7</button></li>
              <li><button onClick={() => navigate('/page8')} className="text-blue-500 hover:underline">Page 8</button></li>
              <li><button onClick={() => navigate('/page9')} className="text-blue-500 hover:underline">Page 9</button></li>
            </ul>
          </div>
        )}

        <h1 className="text-3xl font-bold mb-4">WELCOME TO ONLINE BONDING SYSTEM</h1>
        
        <img
          src="s.png"
          alt="Handshake illustration"
          className="mx-auto mb-6 h-40"
        />

        <button className="w-full bg-orange-500 text-white p-3 rounded-lg font-semibold" onClick={() => navigate('/personal-details')}>
          Start Bonding
        </button>

        <footer className="mt-6">
          <p className="text-gray-600">2024 Higher Education Students' Grants & Loans board</p>
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
