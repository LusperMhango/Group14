import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import personalDetails from './components/personalDetails';

function App() {
  return (
    <div className="App">
        <Navbar /> 
        <personalDetails />
    </div>
  );
}

export default App;
