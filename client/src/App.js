//App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Role from './role';
import EmpLogin from './emp_login';
import AdminLogin from './admin_login';
import Dashboard from './Dashboard';
import Empdashboard from './emp_dashboard';
import OutingForm from './Outing_form';
import Vis_form from './Vis_form';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Role />} />
        <Route path="/emp_login" element={<EmpLogin />} />
        <Route path="/admin_login" element={<AdminLogin />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/emp_dashboard" element={<Empdashboard />} />
        <Route path="/Outing_form" element={<OutingForm />} />
        <Route path='/Vis_form' element={<Vis_form />} />
        
      </Routes>

    </Router>
      
  );
}

export default App;
