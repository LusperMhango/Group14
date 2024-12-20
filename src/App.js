
// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';



import Login from './components/login';
import { BankDetails } from './components/bankDetails';
import { PersonalDetails } from './components/personalDetails';
import Logout from './components/ending';
import { ParentDetails } from './components/parentDetails';
import ApprovedLoanDetails from './components/amount';
import LandingPage from './components/landing';
import TermsAndConditionsPage from './components/terms';
import SuccessPage from './components/congrats';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/landingpage" element={<LandingPage/>} />
      <Route path="/personal" element={<PersonalDetails/>} />
      <Route path="/loan" element={<ApprovedLoanDetails/>} />
      <Route path="/bank" element={<BankDetails/>} />
      <Route path="/parent" element={<ParentDetails/>} />
      <Route path="/ending" element={<Logout />} />
      <Route path="/congrats" element={<SuccessPage />} />
      <Route path="/terms" element={<TermsAndConditionsPage />} />
    
 
    </Routes>
  );
}

export default App;
