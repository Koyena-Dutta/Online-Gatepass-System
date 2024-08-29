//emp_dashboard.jsx
import React from 'react'
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Profile from './components/Profile';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; // Import custom CSS
export const Empdashboard = () => {
  return (
    
    
    <div className='dashboard'>
      <Sidebar />
      <div className='dasboard--content'>
        <Content />
        <Profile />
        {/* <Routes>
        <Route path="/OutingForm" element={<OutingForm />} />
        </Routes> */}
        
        
      </div>
      
      
    
      

    </div>
);
};
    
export default Empdashboard;
