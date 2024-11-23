


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const PersonalDetails = () => {
//     const navigate = useNavigate();
  

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuClick = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     // <div className="flex justify-center items-center h-screen bg-gray-200">
//       <div className="bg-gray-300 shadow-md rounded-lg fixed-center p-8 max-w-md w-3/4 text-center gap-4 mx-auto md:p-6 lg:p-8">
        
//         <header className="flex items-center justify-between mb-4">
//           <div className="flex items-center">
//             <img
//               src="logo.jpg" // Ensure the path is correct
//               alt="Logo"
//               className="h-20 mr-4 rounded-full"
//             />
//             <div className="flex space-x-2">
              
//               <button className="text-sm text-black bg-orange-300 py-2 px-10 rounded-lg hover:bg-yellow-800" onClick={() => navigate('/Landing')}>home</button>
//               <button className="text-sm text-black bg-orange-300 py-2 px-10 rounded-lg hover:bg-yellow-800">Help</button>
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
// <h2 className='text-center text-black font-bold my-1'> BONDING IN PROGRESS</h2>
// <h4 className='text-center text-gray-600 '>1st: ENTER PERSONAL DETAILS</h4>
// <div className='w-full h-0.5 bg-gray-800 my-5'></div>

//       {/* Form */}
//       {/* <div className="w-full max-w-md bg-white p-6 border border-yellow-700 rounded-lg shadow-md"> */}
//         <form className="space-y-4 text-black">
//           <div className='text-black'>
//             <input
//               type="text"
//               placeholder="Firstname:"
//               className="w-full text-black p-1 border border-yellow-800 rounded-lg focus:outline-none bg-gray-300"
//               required/>
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Surname:"
//               className="w-full p-1 border border-yellow-800 rounded-lg bg-gray-300 focus:outline-none"
//               required/>
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Sex:"
//               size={6}
//               className="w-full p-1 border border-yellow-800 rounded-lg bg-gray-300 focus:outline-none"
//               required/>
//           </div>
//           <div>
//             <input
//               type="number"
//               placeholder="Phone number:"
//               className="w-full p-1 border border-yellow-800 rounded-lg bg-gray-300 focus:outline-none"
//               required/>
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Home Village:"
//               className="w-full p-1 border border-yellow-800 rounded-lg bg-gray-300 focus:outline-none"
//               required/>
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="T/A:"
//               className="w-full p-1 border border-yellow-800 rounded-lg  bg-slate-300 focus:outline-none"
//               required/>
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="National ID:"
//               className="w-full p-1 border border-yellow-800 rounded-lg bg-gray-300 focus:outline-none"
//               required/>
//           </div>
//           <div className='w-full h-0.5 bg-gray-800 my-5'></div>

//           <button  type="submit"
//             className="w-20 text-center float-right px-2 bg-orange-500 text-white font-semibold py-1 rounded-lg hover:bg-yellow-800 transition"onClick={() => navigate('/parent-details')}>Next</button>
//         </form>
//       {/* </div> */}

//       {/* Footer */}
//       <footer className="mt-6 text-center text-gray-500 text-sm  p-10">
//       <p className="text-gray-900 text-center">2024 Higher Education </p>
//       <p className='text-gray-900 text-center '> Students' Grants & Loans board</p>
//       </footer>
//     </div>
//   );
// };

// export default PersonalDetails;
