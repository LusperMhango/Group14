// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import BankDetails from './components/bankDetails';
// import LandingPage from './components/landingPage';
// import LoanDetails from './components/loanDetails';
// import Login from './components/login';
// import LogOut from './components/logOut';
// // import ParentDetails from './components/parentDetails';
// import PersonalDetails from './components/personalDetails';


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* <Navbar /> Optional Navbar */}
        
//         <Routes>
//           <Route path="/" element={<Login />} /> {/* Change default route to Login */}
//           <Route path="/bank-details" element={<BankDetails />} />
//           <Route path="/loan-details" element={<LoanDetails />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/logout" element={<LogOut />} />
//           <Route path="/parent-details" element={<ParentDetails />} />
//           <Route path="/personal-details" element={<PersonalDetails />} />
//           <Route path="/landing" element={<LandingPage />} /> {/* Optional route for LandingPage */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;




///zosokoneza 



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BankDetails from './components/bankDetails';
import LandingPage from './components/landingPage';
import LoanDetails from './components/loanDetails';
import Login from './components/login';
import LogOut from './components/logOut';
import ParentDetails from './components/parentDetails';
import PersonalDetails from './components/personalDetails';



function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> Optional Navbar */}
        
        <Routes>
          <Route path="/" element={<Login />} /> {/* Change default route to Login */}
          <Route path="/bank-details" element={<BankDetails />} />
          <Route path="/loan-details" element={<LoanDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/parent-details" element={<ParentDetails />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="/landing" element={<LandingPage />} /> {/* Optional route for LandingPage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
