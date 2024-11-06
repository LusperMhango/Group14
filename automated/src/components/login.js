// //code ya victoria 

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Create = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-300 py-10 px-4">
//       <div className="w-full max-w-md bg-gray p-8 border border-gray-300 rounded-xl shadow-lg">
//         {/* Header */}
//         <header className="text-center mb-8">
//           <img src="logo.jpg" alt="Logo" className="w-24 h-24 mx-auto mb-4 rounded-full"/>
//           <h2 className="text-2xl font-bold text-gray-800">SFMIS - Create account</h2>
//         </header>

//         {/* Form */}
//         <form className="space-y-5">
//           <div>
//             <input
//               type="text"
//               placeholder="Firstname"
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Surname"
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="RegNumber"
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           <div>
//             <input
//               type="email"
//               placeholder="Email"
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               placeholder="Password"
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               placeholder="Confirm password"
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div className="flex justify-between items-center mt-6">
//             <button
//               type="button"
//               className="bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-700 transition"
//               onClick={() => navigate('/landingpage')}
//             >
//               Log in
//             </button>
//             <button
//               type="submit"
//               className="bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-700 transition"
//               onClick={() => navigate('/landingpage')}
//             >
//               Create Account
//             </button>
//           </div>
//         </form>

//         {/* Footer */}
//         <footer className="mt-8 text-center text-gray-500 text-sm">
          
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Create;


// for back up






















import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email, "Password:", password);
    
    // After successful login, navigate to the landing page
    navigate('/landing'); // Redirects to the landing page
  };

  return (
    // <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-gray-300 shadow-md rounded-lg p-8 max-w-md w-full mx-auto md:p-6 lg:p-8">
        <img
          src="logo.jpg" // Make sure this path is correct for your logo image
          alt="Logo"
          
          className="mx-auto mb-2 h-48 rounded-full"
        />
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900 ">SFMIS - Login</h2>
<div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
           
            <input
              type="email"
              id="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          
          <div>
            
            <input
              type="password"
              id="password"
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit" // Ensure the button submits the form
            className="w-full bg-black text-white p-3 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>
{/* <horizontaline/> */}
<div className='w-full h-1 bg-gray-800 my-4'></div>
        <div className="mt-6">
          <a href="/reset-password" className="block text-blue-800 hover:underline mb-3  text-center ">create account</a>
          <a href="/reset-password" className="block text-blue-800 hover:underline mb-3 text-center">Lost your password?</a>
          <p className="text-gray-600 text-center ">2024 Higher Education </p>
          <p className=" text-gray-600 text-center "> Students' Grants & Loans board</p>
        </div>
      </div>
      </div>
    // </div>
  );
}

export default Login;


