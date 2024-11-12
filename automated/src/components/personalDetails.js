import React, { useState } from "react";

const personalDetails = () => {
  // State for form data
  const [formData, setFormData] = useState({
    firstname: "",
    surname: "",
    sex: "",
    phoneNumber: "",
    homeVillage: "",
    ta: "",
    nationalId: "",
  });

  const [error, setError] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(false);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const isFormValid = Object.values(formData).every((field) => field.trim() !== "");

    if (isFormValid) {
      // Proceed to next step
      alert("Form submitted successfully!");
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white rounded-lg shadow-md p-6"
      >
        <h2 className="text-center text-xl font-semibold mb-4">
          Bonding In Progress
        </h2>
        <p className="text-center text-gray-600 mb-6">
           Enter Personal Details
        </p>

        {/* Input fields */}
        <div className="space-y-4">
          <input
            type="text"
            name="firstname"
            placeholder="Firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="w-full p-3 border border-yellow-400 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={formData.surname}
            onChange={handleChange}
            className="w-full p-3 border border-yellow-400 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <select
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            className="w-full p-3 border border-yellow-400 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          >
            <option value="">Select Sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-3 border border-yellow-400 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <input
            type="text"
            name="homeVillage"
            placeholder="Home village"
            value={formData.homeVillage}
            onChange={handleChange}
            className="w-full p-3 border border-yellow-400 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <input
            type="text"
            name="ta"
            placeholder="T/A"
            value={formData.ta}
            onChange={handleChange}
            className="w-full p-3 border border-yellow-400 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <input
            type="text"
            name="nationalId"
            placeholder="National ID"
            value={formData.nationalId}
            onChange={handleChange}
            className="w-full p-3 border border-yellow-400 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        {/* Error message */}
        {error && (
          <p className="text-red-500 text-center mt-4">
            Please fill in all the required fields.
          </p>
        )}

        {/* Navigation buttons */}
        <div className="flex justify-between items-center mt-6">
          <button
            type="button"
            className="text-gray-600 hover:text-yellow-500 text-2xl"
          >
            &#x2190;
          </button>
          <button
            type="submit"
            className="text-2xl text-gray-600 hover:text-yellow-500"
          >
            &#x2192;
          </button>
        </div>

        <p className="text-center text-gray-600 mt-6 text-sm">
          2024 Higher Education Students' Grants & Loans Board
        </p>
      </form>
    </div>
  );
};

export default personalDetails;
