import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BiHome, BiBookAlt, BiMessage, BiSolidReport, BiStats, BiTask, BiHelpCircle } from 'react-icons/bi';
import '../styles/Sidebar.css'; 
import img2 from '../images/meconlogo.jpg';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <div className='menu'>
      <div className='logo'>
        
        <img src={img2} alt='Mecon logo' height='70' width='70'/>
        <h2>Mecon</h2>
      </div>

      <div className='menu--list'>
        <div
          className={`item ${location.pathname === '/emp_dashboard' ? 'active' : ''}`}
          onClick={() => handleNavigation('/emp_dashboard')}
        >
          <BiHome className='icon' />
          Dashboard
        </div>
        <div
          className={`item ${location.pathname === './Outing_form' ? 'active' : ''}`}
          onClick={() => handleNavigation('/Outing_form')}
        >
          <BiTask className='icon' />
          Outing Form
        </div>
        <div
          className={`item ${location.pathname === '/dashboard/report' ? 'active' : ''}`}
          onClick={() => handleNavigation('/dashboard/report')}
        >
          <BiSolidReport className='icon' />
          Report
        </div>
        <div
          className={`item ${location.pathname === '/dashboard/message' ? 'active' : ''}`}
          onClick={() => handleNavigation('/dashboard/message')}
        >
          <BiMessage className='icon' />
          Message
        </div>
        <div
          className={`item ${location.pathname === '/dashboard/stats' ? 'active' : ''}`}
          onClick={() => handleNavigation('/dashboard/stats')}
        >
          <BiStats className='icon' />
          Stats
        </div>
        <div
          className={`item ${location.pathname === '/' ? 'active' : ''}`}
          onClick={() => handleNavigation('/')}
        >
          <BiHelpCircle className='icon' />
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
