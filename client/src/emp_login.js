import React, { useState } from 'react';
import './App.css'; // Import custom CSS
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmpLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/emp_login', {
        username,
        password,
      });
      console.log(response.data); // Handle successful login response
      // Redirect to dashboard or another page on successful login
      navigate('/emp_dashboard');
    } catch (error) {
      console.error('Error:', error.response.data); // Log error response
      let errorMessage = 'An error occurred. Please try again.';
      if (error.response && error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      }
      alert(errorMessage); // Display error message to the user
    }
  };



  return (
    <div className='d-flex justify-content-center align-items-center bg-purple vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <form onSubmit={handleLogin}>
          <div className='mb-3'>
            <h1><center>Login</center></h1>
            <label htmlFor='username'><strong>Username</strong></label>
            <input
              type='text'
              id='username'
              placeholder='Enter Username'
              className='form-control rounded-0'
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input
              type='password'
              id='password'
              placeholder='Enter Password'
              className='form-control rounded-0'
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type='submit' className='btn btn-success w-100'>Log in</button>
          <p className='text-center mt-2'>You agree to our terms and policies</p>
          <button type='button' className='btn btn-default border w-100 bg-light'>Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default EmpLogin;
