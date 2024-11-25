
// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LandingPage from './components/landingpage';
import Create from './components/create';
import Login from './components/login';
import ApprovedLoanDetails from './components/LoanAmount';
import { BankDetails } from './components/bankDetails';
import ParentDetails from './components/parentDetails';

import { PersonalDetails } from './components/personalDetails';
import Logout from './components/logout'; 


function App() {
  return (
    <Routes>
      <Route path="/" element={<Create/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/landingpage" element={<LandingPage/>} />
      <Route path="/personal" element={<PersonalDetails/>} />
      <Route path="/loan" element={<ApprovedLoanDetails/>} />
      <Route path="/bank" element={<BankDetails/>} />
      <Route path="/parent" element={<ParentDetails/>} />
      <Route path="/logout" element={<Logout />} />


     
    </Routes>
  );
}

export default App;
