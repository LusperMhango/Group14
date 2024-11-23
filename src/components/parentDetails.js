// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";

// const ParentDetails = () => {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuClick = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="flex justify-center items-center min-h-screen bg-gray-400 font-sans">
//         <div className="w-full h-screen p-8 bg-gray-300 shadow-lg rounded-lg mt-16">
//           <h2 className="text-center text-xl font-semibold mb-4 shadow-lg font-sans">
//             BONDING IN PROGRESS
//           </h2>
//           <p className="text-center mb-4 border-b-2 border-black w-full shadow-xl font-bold mt-4">
//             2ND: ENTER PARENTS DETAILS
//           </p>
//           <div className="flex justify-center items-center font-sans mt-16">
//             <form className="space-y-4">
//               <label className="font-sans mb-4 font-light">
//                 <b>Full Name:</b>
//                 <input
//                   type="text"
//                   placeholder="Full name"
//                   className="w-80 p-2 border border-yellow-800 rounded-md placeholder:text-gray-400"
//                   required
//                 />
//               </label>
//               <label className="font-sans mb-4 font-light">
//                 <b>Postal Address:</b>
//                 <input
//                   type="text"
//                   placeholder="Postal Address"
//                   className="w-80 p-2 border border-yellow-800 rounded-md placeholder:text-gray-400"
//                   required
//                 />
//               </label>
//               <label className="font-sans mb-4 font-light">
//                 <b>Physical Address:</b>
//                 <input
//                   type="text"
//                   placeholder="Physical Address"
//                   className="w-80 p-2 border border-yellow-800 rounded-md placeholder:text-gray-400"
//                   required
//                 />
//               </label>
//               <label className="font-sans mb-4 font-light">
//                 <b>Home Village:</b>
//                 <input
//                   type="text"
//                   placeholder="Home Village"
//                   className="w-80 p-2 border border-yellow-800 rounded-md placeholder:text-gray-400"
//                   required
//                 />
//               </label>
//               <label className="font-sans mb-4 font-light">
//                 <b>District:</b>
//                 <input
//                   type="text"
//                   placeholder="District"
//                   className="w-80 p-2 border border-yellow-800 rounded-md placeholder:text-gray-400"
//                   required
//                 />
//               </label>
//               <label className="font-sans mb-4 font-light">
//                 <b>Occupation:</b>
//                 <input
//                   type="text"
//                   placeholder="Occupation"
//                   className="w-80 p-2 border border-yellow-800 rounded-md placeholder:text-gray-400"
//                   required
//                 />
//               </label>
//               <label className="font-sans mb-4 font-light">
//                 <b>Phone Number:</b>
//                 <input
//                   type="number"
//                   placeholder="Phone number"
//                   className="w-80 p-2 border border-yellow-800 rounded-md placeholder:text-gray-400"
//                   required
//                 />
//               </label>

//               <div className="flex justify-between mt-16">
//                 <button
//                   type="button"
//                   className="w-full-3/4 p-2 bg-yellow-600 text-white rounded-md hover:bg-gray-800"
//                   onClick={() => navigate("/personal-details")}
//                 >
//                   Previous
//                 </button>
//                 <button
//                   type="submit"
//                   className="w-full-3/4 p-2 bg-yellow-600 text-white rounded-md hover:bg-gray-800 ml-40"
//                   onClick={() => navigate("/bank-details")}
//                 >
//                   Next
//                 </button>
//               </div>
//             </form>
//           </div>
//           <p className="text-center text-sm mt-8 font-bold font-sans mt-40">
//             2024 Higher Education
//             <br />
//             Students' Grants & Loans Board
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ParentDetails;







import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const ParentDetails = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-400 font-sans">
        <div className="w-full max-w-md p-8 bg-gray-300 shadow-lg rounded-lg">
          <h2 className="text-center text-xl font-semibold mb-4 shadow-lg font-sans">
            BONDING IN PROGRESS
          </h2>
          <p className="text-center mb-4 border-b-2 border-black w-full shadow-xl font-bold">
            2ND: ENTER PARENTS DETAILS
          </p>
          <form className="space-y-6">
            <div>
              <label className="font-sans mb-4 font-light">
                <b>Full Name:</b>
              </label>
              <input
                type="text"
                placeholder="Full name"
                className="w-full p-2 border border-yellow-800 rounded-md placeholder:text-gray-400"
                required
              />
            </div>
            <div>
              <label className="font-sans mb-4 font-light">
                <b>Postal Address:</b>
              </label>
              <input
                type="text"
                placeholder="Postal Address"
                className="w-full p-2 border border-yellow-800 rounded-md placeholder:text-gray-400"
                required
              />
            </div>
            <div>
              <label className="font-sans mb-4 font-light">
                <b>Physical Address:</b>
              </label>
              <input
                type="text"
                placeholder="Physical Address"
                className="w-full p-2 border border-yellow-800 rounded-md placeholder:text-gray-400"
                required
              />
            </div>
            <div>
              <label className="font-sans mb-4 font-light">
                <b>Home Village:</b>
              </label>
              <input
                type="text"
                placeholder="Home Village"
                className="w-full p-2 border border-yellow-800 rounded-md placeholder:text-gray-400"
                required
              />
            </div>
            <div>
              <label className="font-sans mb-4 font-light">
                <b>District:</b>
              </label>
              <input
                type="text"
                placeholder="District"
                className="w-full p-2 border border-yellow-800 rounded-md placeholder:text-gray-400"
                required
              />
            </div>
            <div>
              <label className="font-sans mb-4 font-light">
                <b>Occupation:</b>
              </label>
              <input
                type="text"
                placeholder="Occupation"
                className="w-full p-2 border border-yellow-800 rounded-md placeholder:text-gray-400"
                required
              />
            </div>
            <div>
              <label className="font-sans mb-4 font-light">
                <b>Phone Number:</b>
              </label>
              <input
                type="number"
                placeholder="Phone number"
                className="w-full p-2 border border-yellow-800 rounded-md placeholder:text-gray-400"
                required
              />
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-gray-800"
                onClick={() => navigate("/personal")}
              >
                Previous
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-gray-800"
                onClick={() => navigate("/bank")}
              >
                Next
              </button>
            </div>
          </form>
          <p className="text-center text-sm mt-8 font-bold font-sans">
            2024 Higher Education
            <br />
            Students' Grants & Loans Board
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParentDetails;
