

// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';

// const BankDetails = () => {
//     const [, setaccountnumber] = useState("");
//     const navigate = useNavigate();
//   // return (
//   //   <div className="min-h-screen flex flex-col items-center bg-white py-10 px-4">
//   //     {/* Header */}
//   //     <header className="w-full max-w-md text-center mb-4">
//   //       <img src="logo.jpg" alt="Logo" className="h-12 mx-auto mb-4" />
//   //       <nav className="flex justify-center space-x-4 mb-6">
//   //         <button className="bg-yellow-700 text-white px-4 py-2 rounded" onClick={() => navigate('/Landing')}>Home</button>
//   //         {/* <button className="bg-yellow-700 text-white px-4 py-2 rounded">Bonding Tutorial</button> */}
//   //       </nav>
//   //       <h1 className="text-xl font-bold text-gray-800">Bonding in Progress</h1>
//   //       <h2 className="text-lg font-semibold text-gray-700 mt-2">Stage 3: Bank Details</h2>
//   //     </header>


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
// <h4 className='text-center text-gray-600 '>3RD: ENTER BANK DETAILS</h4>
// <div className='w-full h-0.5 bg-gray-800 my-5'></div>


//       {/* Form */}
//       {/* <div className="w-full max-w-md bg-white p-6 border border-yellow-700 rounded-lg shadow-md"> */}
//         <form className="space-y-4">
//           <div>
//             <input
//               type="text"
//               placeholder="Bank name:"
//               className="w-full p-1 bg-gray-300 border border-yellow-800 rounded-lg focus:outline-none"
//               required
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Branch:"
//               className="w-full p-1 border bg-gray-300 border-yellow-700 rounded-lg focus:outline-none"
//               required
//               />
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Account name:"
//               className="w-full p-1 bg-gray-300 border border-yellow-700 rounded-lg focus:outline-none"
//               required
//               />
//           </div>
//           <div>
//             <input
//               type="number"
//               placeholder="Account number:"
//               className="w-full p-1 bg-gray-300 border border-yellow-700 rounded-lg focus:outline-none"
//               onChange={(e) => setaccountnumber(e.target.value)}
//               required
//                />
//           </div>
//           <div className='w-full h-0.5 bg-gray-800 my-5'></div>

//           <div className="flex justify-between mt-6">
//             <button
//               type="button"
//               className="bg-orange-300 text-gray-900 font-semibold py-2 px-6 rounded-lg hover:bg-yellow-800 transition"
//               onClick={() => navigate('/parent-details')}>
//               Previous
//             </button>
//             <button
//               type="submit"
//               className="bg-orange-300 text-gray-900 font-semibold py-2 px-6 rounded-lg hover:bg-yellow-800 transition"
//               onClick={() => navigate('/loan-details')}>
//               Next
//             </button>
//           </div>
//         </form>
//       {/* </div> */}

//       {/* Footer */}
//       <footer className="mt-6 text-center text-gray-500 ">
//       <p className="text-gray-900 text-center ">2024 Higher Education </p>
//       <p className='text-gray-900 text-center '> Students' Grants & Loans board</p>
       
//       </footer>
//     </div>
//   );
// };

// export default BankDetails;
