import React from 'react'
import Empdashboard from './emp_dashboard';
import OutingForm from './Outing_form';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; // Import custom CSS
export const Dashboard = () => {
  return (
    <div className='emp_dashboard'>
      <Empdashboard />
      <OutingForm />
      
      
      
    
      

    </div>
  );
};

export default Dashboard;




