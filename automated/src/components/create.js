// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Create = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
//       <div >
//         {/* Header */}
//         <header className="text-center ">
//           <img src="/logok.jpg" alt="Logo"  />
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
//               className="bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 transition"
//               onClick={() => navigate('/login')}
//             >
//               Log in
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
//             >
//               Create Account
//             </button>
//           </div>
//         </form>

//         {/* Footer */}
//         <footer className="mt-10 text-center text-gray-500 text-sm">
//           <p>All Rights Reserved.</p>
//           <p>Sample Web Application to digitize the student account creation process</p>
//           <p>A COM311/COM312 Project 2023</p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Create;




import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 py-10 px-4">
      <div className="w-full max-w-md bg-gray p-8 border border-gray-300 rounded-xl shadow-lg">
        {/* Header */}
        <header className="text-center mb-8">
          <img src="logo.jpg" alt="Logo" className="w-24 h-24 mx-auto mb-4 rounded-full"/>
          <h2 className="text-2xl font-bold text-gray-800">SFMIS - Create account</h2>
        </header>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="Firstname"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Surname"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="RegNumber"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm password"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              className="bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-700 transition"
              onClick={() => navigate('/landingpage')}
            >
              Log in
            </button>
            <button
              type="submit"
              className="bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-700 transition"
              onClick={() => navigate('/landingpage')}
            >
              Create Account
            </button>
          </div>
        </form>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-500 text-sm">
          
        </footer>
      </div>
    </div>
  );
};

export default CreateAccount;
