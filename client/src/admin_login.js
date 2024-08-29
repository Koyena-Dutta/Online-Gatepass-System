import React, { useState } from 'react';
import './App.css'; // Import custom CSS

function Adminlogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Implement login logic here
    alert(`Logging in as ${username}`);
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-purple vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <form onSubmit={handleLogin}>
          <div className='mb-3'>
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
          <button type='button' className='btn btn-default border w-100 bg-light'>Forgot Password?</button>
        </form>
      </div>
    </div>
  );
}

export default Adminlogin;
