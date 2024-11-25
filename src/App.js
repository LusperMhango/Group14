
// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Create from './components/create';
import Login from './components/login';
import { BankDetails } from './components/bankDetails';
import { PersonalDetails } from './components/personalDetails';
import LandingPage from './components/landingPage';
import ApprovedLoanDetails from './components/loanAmount';

import Logout from './components/logout';
import { ParentDetails } from './components/parentDetails';


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
