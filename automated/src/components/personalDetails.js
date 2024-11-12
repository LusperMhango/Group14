import React, { useState } from "react";

const PersonalDetails = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    surname: "",
    sex: "",
    phoneNumber: "",
    homeVillage: "",
    ta: "",
    nationalId: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    const isEmptyField = Object.values(formData).some((field) => field === "");
    if (isEmptyField) {
      setError("Please fill out all fields before proceeding.");
      return;
    }
    setError("");
    alert("Form uploaded successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 font-sans">
      <div className="w-full h-screen p-8 bg-white shadow-lg rounded-lg mt-16">
        <h2 className="text-center text-xl font-semibold mb-4 shadow-lg font-sans">
          BONDING IN PROGRESS
        </h2>
        
       <p className="text-center mb-4 border-b-2 border-black w-full shadow-xl font-bold mt-4">Enter Personal Details</p>
       <div className="flex justify-center items-center font-sans mt-2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text"
            name="firstname"
            placeholder="Firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            className="w-80 p-2 border border-yellow-800 border-solid rounded-md placeholder:text-black flex justify-center items-center "
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={formData.surname}
            onChange={handleInputChange}
            className="w-80 p-2 border border-yellow-800 rounded-md placeholder:text-black flex justify-center item-center"
          />
          <select
            name="sex"
            value={formData.sex}
            onChange={handleInputChange}
            className="w-80 p-2 border border-yellow-800 rounded-md text-black flex justify-center items-center "
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="w-80 p-2 border border-yellow-800 rounded-md placeholder:text-black flex justify-center items-center "
          />
          <input
            type="text"
            name="homeVillage"
            placeholder="Home Village"
            value={formData.homeVillage}
            onChange={handleInputChange}
            className="w-80 p-2 border border-yellow-800 rounded-md placeholder:text-black flex justify-center items-center "
          />
          <input
            type="text"
            name="ta"
            placeholder="T/A"
            value={formData.ta}
            onChange={handleInputChange}
            className="w-80 p-2 border border-yellow-800 rounded-md placeholder:text-black flex justify-center items-center "
          />
          <input
            type="text"
            name="nationalId"
            placeholder="National ID"
            value={formData.nationalId}
            onChange={handleInputChange}
            className="w-80 p-2 border border-yellow-800 rounded-md placeholder:text-black flex justify-center items-center "
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="flex bottom-2 right-2 w-full-3/4 p-2 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Proceed
          </button>
          
        </form>
        </div>
        <p className="text-center text-sm mt-12 font-bold font-sans">
          2024 Higher Education<br></br>Students' Grants & Loans Board
        </p>
      </div>
    </div>
  );
};

export default PersonalDetails;
