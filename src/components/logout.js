// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar'; // Import Navbar for consistency

// const Logout = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/login'); // Redirect to the home page
//   };

//   return (
//     <div>
//       {/* Navbar for the header */}
//       <Navbar />

//       {/* Main content */}
//       <div className="flex justify-center items-center min-h-screen bg-gray-400 font-sans">
//         <div className="w-full h-screen p-8 bg-gray-300 shadow-lg rounded-lg mt-16">
//           <h2 className="text-center text-xl font-semibold mb-4 shadow-lg font-sans">
//             SUCCESSFUL BONDING
//           </h2>
//           <p className="text-center mb-4 border-b-2 border-black w-full shadow-xl font-bold mt-4">
//             Congratulations! You have successfully bonded.
//           </p>

//           {/* Content Section */}
//           <div className="flex flex-col items-center font-sans mt-16 space-y-6">
//             <img
//               src="c.jpg"
//               alt="Congratulations"
//               className="mx-auto mb-6 h-60 rounded-2xl shadow-lg"
//             />
//             <p className="text-lg text-center font-bold">
//               Please check your email for feedback.
//             </p>

//             {/* Divider */}
//             <div className="w-full h-0.5 bg-gray-800 my-4"></div>
//             <div className="w-3/4 h-0.5 bg-gray-800 my-4 mx-auto"></div>

//             {/* Logout Button */}
//             <button
//               onClick={handleLogout}
//               className="w-40 items-center hover:bg-yellow-900 bg-yellow-500 text-gray-950 p-2 rounded-lg font-semibold"
//             >
//               Log out
//             </button>
//           </div>

//           {/* Footer */}
//           <p className="text-center text-sm mt-16 font-bold font-sans">
//             2024 Higher Education
//             <br />
//             Students' Grants & Loans Board
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Logout;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import Footer from "./footer";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://localhost:5000", // Correct baseURL for the backend
  headers: {
    "Content-Type": "application/json",
  },
});

const FileUploadPage = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploadMessage(null); // Reset message when a new file is selected
      setError(null); // Reset any previous errors
    }
  };

  // Handle file upload
  const handleFileUpload = async () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    setIsLoading(true); // Start loading
    setError(null); // Clear any previous errors

    const formData = new FormData();
    formData.append("file", file);

    try {
      // Make POST request to upload file
      const response = await api.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        setUploadMessage("File uploaded successfully.");
      } else {
        setError("File upload failed. Please try again.");
      }
    } catch (err) {
      console.error("File upload error:", err);
      setError("Failed to upload file. Please try again.");
    } finally {
      setIsLoading(false); // End loading
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-500 via-gray-600 to-gray-600 text-white">
      <Navbar />

      <main className="flex flex-col lg:flex-row items-center justify-between flex-grow max-w-6xl mx-auto px-6 lg:px-12 py-12 font-sans">
        {/* File Upload Section */}
        <div className="flex flex-col text-center lg:text-left max-w-lg space-y-6">
          <h1 className="text-4xl font-extrabold leading-tight tracking-wide font-sans">
            Upload Your Required Documents
          </h1>
          <p className="text-lg mt-4 font-medium">
            Upload the required file to proceed with the bonding process.
          </p>

          <div className="w-full mt-6">
            <input
              type="file"
              accept=".pdf, .jpg, .jpeg, .png"
              onChange={handleFileChange}
              className="mb-2 block w-full text-gray-700 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <button
              onClick={handleFileUpload}
              className="px-6 py-2 mt-2 text-lg font-medium text-white bg-orange-500 rounded-lg shadow-lg hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all duration-300 shadow-2xl disabled:bg-gray-400"
              disabled={isLoading}
            >
              {isLoading ? "Uploading..." : "Upload File"}
            </button>

            {uploadMessage && (
              <p className="text-green-500 text-sm mt-4 font-medium">{uploadMessage}</p>
            )}

            {error && (
              <p className="text-red-500 text-sm mt-4 font-medium">{error}</p>
            )}
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-40 items-center hover:bg-yellow-900 bg-yellow-500 text-gray-950 p-2 rounded-lg font-semibold mt-6"
            onClick={() => navigate("/exit")}
         >
           exit
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-12 lg:mt-0 lg:ml-8">
          <img
            src="c.jpg" // Replace with your image
            alt="Upload illustration"
           className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FileUploadPage;
