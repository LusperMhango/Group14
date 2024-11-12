import React, { useState } from 'react';

const personalDetails = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    sex: '',
    phoneNumber: '',
    homeVillage: '',
    ta: '',
    nationalId: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, surname, sex, phoneNumber, homeVillage, ta, nationalId } = formData;
    
    if (!firstName || !surname || !sex || !phoneNumber || !homeVillage || !ta || !nationalId) {
      setError('Please fill out all fields.');
      return;
    }
    setError('');
    alert('Proceeding to next form...');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-black">Bonding In Progress</h2>
          <p className="text-sm font-semibold text-gray-500">1st: Enter Personal Details</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <input
            type="text"
            name="firstName"
            placeholder="Firstname"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border border-black rounded-md"
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={formData.surname}
            onChange={handleChange}
            className="w-full p-2 border border-black rounded-md"
          />
          <input
            type="text"
            name="sex"
            placeholder="Sex"
            value={formData.sex}
            onChange={handleChange}
            className="w-full p-2 border border-black rounded-md"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border border-black rounded-md"
          />
          <input
            type="text"
            name="homeVillage"
            placeholder="Home village"
            value={formData.homeVillage}
            onChange={handleChange}
            className="w-full p-2 border border-black rounded-md"
          />
          <input
            type="text"
            name="ta"
            placeholder="T/A"
            value={formData.ta}
            onChange={handleChange}
            className="w-full p-2 border border-black rounded-md"
          />
          <input
            type="text"
            name="nationalId"
            placeholder="National ID"
            value={formData.nationalId}
            onChange={handleChange}
            className="w-full p-2 border border-black rounded-md"
          />
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Proceed
          </button>
        </form>
        <p className="text-xs text-center text-gray-500 mt-4">
          2024 Higher Education Students' Grants & Loans Board
        </p>
      </div>
    </div>
  );
};

export default personalDetails;
