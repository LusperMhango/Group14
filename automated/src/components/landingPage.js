
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function LandingPage() {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuClick = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     // <div className="flex justify-center items-center h-screen bg-gray-200">
//       <div className="bg-gray-300 shadow-md rounded-lg p-8 max-w-md w-full text-center mx-auto md:p-6 lg:p-8">
        
//         <header className="flex items-center justify-between mb-4">
//           <div className="flex items-center">
//             <img
//               src="logo.jpg" // Ensure the path is correct
//               alt="Logo"
//               className="h-20 mr-4 rounded-full"
//             />
//             <div className="flex space-x-2">
//               <button className="text-sm text-black bg-orange-300 py-2 px-10 rounded-lg hover:bg-gray-200">Terms</button>
//               <button className="text-sm text-black bg-orange-300 py-2 px-10 rounded-lg hover:bg-gray-200">Help</button>
//             </div>
//           </div>
//           <button onClick={handleMenuClick} className="text-orange-600 bg-orange-400 rounded-3xl p-2">
//             <div className="flex flex-col space-y-1">
//               <div className="h-1 w-6 bg-white"></div>
//               <div className="h-1 w-6 bg-white"></div>
//               <div className="h-1 w-6 bg-white"></div>
//             </div>
//           </button>
//         </header>

//         {/* Dropdown Menu */}
//         {isMenuOpen && (
//           // <div className="bg-orange -400 p-4 rounded-lg shadow-md mb-4  ">
//             <ul className="text-right">
//               <li><button onClick={() => navigate('/page1')} className="text-gray-900 hover:underline">Page 1</button></li>
//               <li><button onClick={() => navigate('/page2')} className="text-gray-900 hover:underline">Page 2</button></li>
//               <li><button onClick={() => navigate('/page3')} className="text-gray-900 hover:underline">Page 3</button></li>
//               <li><button onClick={() => navigate('/page4')} className="text-gray-900 hover:underline">Page 4</button></li>
//               <li><button onClick={() => navigate('/page5')} className="text-gray-900 hover:underline">Page 5</button></li>
//               <li><button onClick={() => navigate('/page6')} className="text-gray-900 hover:underline">Page 6</button></li>
//               <li><button onClick={() => navigate('/page7')} className="text-gray-900 hover:underline">Page 7</button></li>
//               <li><button onClick={() => navigate('/page8')} className="text-gray-900 hover:underline">Page 8</button></li>
//               <li><button onClick={() => navigate('/page9')} className="text-gray-900 hover:underline">Page 9</button></li>
//             </ul>
//           // </div>
//         )}

//         <h1 className="text-2xl font-bold  mb-3">WELCOME TO ONLINE BONDING SYSTEM</h1>
        
//         <img
//           src="s.png"
//           alt="Handshake illustration"
//           className="mx-auto mb-8 h-60 rounded-2xl "
//         />
// <div className='w-full h-1 bg-gray-800 my-4'></div>
// <div className='w-3/4 h-1 bg-gray-800 my-4 mx-auto'></div>
//         <button className=" bg-orange-400 text-black  rounded-lg font-semibold text-sm px-10 py-2" onClick={() => navigate('/personal-details')}>
//           Start Bonding
//         </button>

//         <footer className="mt-6 p-4">
//           <p className="text-gray-900 text-center my-6">2024 Higher Education </p>
//           <p className='text-gray-900 text-center '> Students' Grants & Loans board</p>
//         </footer>
//       </div>
//     // </div>
//   );
// }

// export default LandingPage;
