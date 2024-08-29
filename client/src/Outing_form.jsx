import React, { useState } from 'react';
import './styles/OutingForm.css';
import axios from 'axios';

const OutingForm = () => {
  const [formData, setFormData] = useState({
    employeeName: '',
    employeeID: '',
    designation: '',
    section: '',
    purpose: '',
    location: '',
    dateOfOuting: '',
    outTime: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = JSON.stringify({
        employeeName: formData.employeeName,
        employeeID: formData.employeeID,
        designation: formData.designation,
        section: formData.section,
        purpose: formData.purpose,
        location: formData.location,
        dateOfOuting: formData.dateOfOuting,
        outTime: formData.outTime
      });

      const response = await axios.post('http://localhost:4000/Outing_form', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        alert('Form submitted successfully');
        // Optionally, clear the form after successful submission
        setFormData({
          employeeName: '',
          employeeID: '',
          designation: '',
          section: '',
          purpose: '',
          location: '',
          dateOfOuting: '',
          outTime: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form', error.response.data);
      // Handle error states as needed
    }
  };

  return (
    <form className="outing-form" onSubmit={handleSubmit}>
      <h2>Outing Form</h2>
      <div className="form-group">
        <label>Employee Name</label>
        <input
          type="text"
          name="employeeName"
          value={formData.employeeName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Employee ID</label>
        <input
          type="text"
          name="employeeID"
          value={formData.employeeID}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Designation</label>
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Section</label>
        <input
          type="text"
          name="section"
          value={formData.section}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Purpose</label>
        <input
          type="text"
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Location</label>
        <input
          type="text"
          name="location"
          placeholder='eg.Ranchi,Bangalore'
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Date of Outing</label>
        <input
          type="date"
          name="dateOfOuting"
          value={formData.dateOfOuting}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Out Time</label>
        <input
          type="time"
          name="outTime"
          value={formData.outTime}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default OutingForm;
