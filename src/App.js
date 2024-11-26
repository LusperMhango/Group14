
// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Create from './components/create';
import Exit from './components/exit';
import Terms from './components/terms';
import Login from './components/login';
import { BankDetails } from './components/bankDetails';
import { PersonalDetails } from './components/personalDetails';
import Logout from './components/logout';
import { ParentDetails } from './components/parentDetails';
import ApprovedLoanDetails from './components/amount';
import LandingPage from './components/landing';



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
      <Route path="/exit" element={<Exit />} />
      <Route path="/terms" element={<Terms />} />
    


     
    </Routes>
  );
}

export default App;
