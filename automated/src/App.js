
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BankDetails from './components/bankDetails';
import LandingPage from './components/landingPage';
import LoanDetails from './components/loanDetails';
import Login from './components/login';
import LogOut from './components/logOut';
import ParentDetails from './components/parentDetails';
import PersonalDetails from './components/personalDetails';
import Create from './components/create';
// Optional Navigation Component
function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="/login">Login</a></li> {/* Move login to be the first item */}
        <li><a href="/">Home</a></li>
        <li><a href="/bank-details">Bank Details</a></li>
        <li><a href="/loan-details">Loan Details</a></li>
        <li><a href="/logout">Log Out</a></li>
        <li><a href="/parent-details">Parent Details</a></li>
        <li><a href="/personal-details">Personal Details</a></li>
        <li><a href="/Create ">Create</a></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> Optional Navbar */}
        
        <Routes>
          <Route path="/" element={<Create />} /> {/* Change default route to Login */}
          <Route path="/bank-details" element={<BankDetails />} />
          <Route path="/loan-details" element={<LoanDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/parent-details" element={<ParentDetails />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="/create" element={<Create />} />
          <Route path="/landing" element={<LandingPage />} /> {/* Optional route for LandingPage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
