import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./footer";
import PersonalNavbar from "./personalNav";


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
      const response = await api.patch("personal/update/:id", formData, {
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
    navigate("/logout"); // Redirect to login page
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 text-white">

      <PersonalNavbar />
      <main className="flex flex-col lg:flex-row items-center justify-between flex-grow max-w-6xl mx-auto px-6 lg:px-12 py-12 font-sans">
        {/* File Upload Section */}
        <div className="flex flex-col text-center lg:text-left max-w-lg space-y-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-wide font-sans">
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
        </div>

        {/* Image Section */}
        <div className="mt-12 lg:mt-0 lg:ml-8">
          <img
            src="k.png" 
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
