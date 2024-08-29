//role.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Import custom CSS
import img1 from './images/meconlogo.jpg';


function Role() {
  const [selects, setSelects] = useState('');
  const navigate = useNavigate();
  const handleSelectChange = (event) => {
    setSelects(event.target.value);
  };

  const handleButtonClick = () => {
    if (selects === 'Employee') {
      navigate('/emp_login');
    } else if (selects === 'Visitor') {
      navigate('/Vis_form');
    } else {
      alert('Please select a role');
    }
  };

  return (
    <div className="app">
      <div className="container p-5 box">
        <h2>Online Gatepass Management System</h2>
        <div>
          <img src={img1} alt="mecon-logo" className="img1" />
        </div>
        <h2>Select a Role</h2>
        <div className="mb-3">
          <select className="custom-select" value={selects} onChange={handleSelectChange}>
            <option value="">--Select Role--</option>
            <option value="Employee">Employee</option>
            <option value="Visitor">Visitor</option>
          </select>
        </div>
        <div>
          <button className="btn btn-primary p-3" onClick={handleButtonClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Role;










