
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate



// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log("Email:", email, "Password:", password);
    
//     // After successful login, navigate to the landing page
//     navigate('/landing'); // Redirects to the landing page
//   };

//   return (
//     // <div className="flex justify-center items-center h-screen bg-gray-200">
//       <div className="bg-gray-300 shadow-md rounded-lg p-8 max-w-md w-full mx-auto md:p-6 lg:p-8">
//         <img
//           src="logo.jpg" // Make sure this path is correct for your logo image
//           alt="Logo"
          
//           className="mx-auto mb-2 h-48 rounded-full"
//         />
//         <h2 className="text-2xl font-bold mb-6 text-center text-blue-900 ">SFMIS - Login</h2>
// <div>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
           
//             <input
//               type="email"
//               id="email"
//               placeholder='Email'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
          
//           <div>
            
//             <input
//               type="password"
//               id="password"
//               placeholder='password'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           <button
//             type="submit" // Ensure the button submits the form
//             className="w-full bg-black text-white p-3 rounded-lg font-semibold"
//           >
//             Login
//           </button>
//         </form>
// {/* <horizontaline/> */}
// <div className='w-full h-1 bg-gray-800 my-4'></div>
//         <div className="mt-6">
//           <a href="/reset-password" className="block text-blue-800 hover:underline mb-3  text-center ">create account</a>
//           <a href="/reset-password" className="block text-blue-800 hover:underline mb-3 text-center">Lost your password?</a>
//           <p className="text-gray-600 text-center ">2024 Higher Education </p>
//           <p className=" text-gray-600 text-center "> Students' Grants & Loans board</p>
//         </div>
//       </div>
//       </div>
//     // </div>
//   );
// }

// export default Login;










import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 



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
   
    <div className="flex items-center shadow-md justify-center h-screen bg-gray-800">
      <div className="bg-white shadow-md rounded p-8 w-5/12 max-w-screen-3/4 mx-auto md:p-6 lg:p-8 ">
        <img
          src="logo.jpg" 
          alt="Logo"
          
          className="mx-auto mb-1 h-32 rounded-full"
        />
        <h2 className="text-1xl font-bold mb-1 text-center text-blue-900 ">SFMIS - Login</h2>
<div className='max-w-center-1/4 max-auto  '>
  <div >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className='flex justify-center'> 
           
            <input
              type="email"
              id="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-3/4  p-2 border border-gray-300 py-1"
            />
          </div>
          
          <div className='flex justify-center'>
            
            <input
              type="password"
              id="password"
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-3/4 p-2 border border-gray-400 py-1"
            />
          </div>

<div className='flex justify-center'>
          <button
            type="submit" 
            className="w-3/4 bg-gray-700 text-white p-2 font-semibold py-1 "
          >
            Login
          </button>
          </div>
        </form>
        </div>
{/* <horizontaline/> */}
<div className='flex justify-center'>
<div className='w-3/4 h-px bg-gray-800 my-3'></div>
</div>
        <div className="mt-6">
          <a href="/reset-password" className="block text-blue-800 hover:underline text-center mt-2">create account</a>
          <a href="/reset-password" className="block text-blue-800 hover:underline text-center">Lost your password?</a>
          <p className=" text-gray-500 text-center ">2024 Higher Education Students' Grants & Loans board</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Login;
