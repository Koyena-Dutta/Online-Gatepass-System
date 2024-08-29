import React, { useState } from 'react';
import './styles/OutingForm.css';
import './App.css'; // Import custom CSS
import axios from 'axios';

const Vis_form = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        designation: '',
        organisation: '',
        purpose: '',
        aadhar_no: '',
        date: ''
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
              name: formData.name,
              phone: formData.phone,
              designation: formData.designation,
              organisation: formData.organisation,
              purpose: formData.purpose,
              aadhar_no: formData.aadhar_no,
              date: formData.date
          });

          const response = await axios.post('http://localhost:4000/Vis_form', data, {
              headers: {
                  'Content-Type': 'application/json'
              }
          });

          if (response.status === 201) {
              alert('Form submitted successfully');
              // Optionally, clear the form after successful submission
              setFormData({
                  name: '',
                  phone: '',
                  designation: '',
                  organisation: '',
                  purpose: '',
                  aadhar_no: '',
                  date: ''
              });
          }
      } catch (error) {
          console.error('Error submitting form', error.response.data);
          // Handle error states as needed
      }
  };

    return (
        <form className="outing-form" onSubmit={handleSubmit}>
            <h2>Visitor Requisition Form</h2>
            <div className="form-group">
                <label>Visitor Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
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
                <label>Organisation</label>
                <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
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
                <label>Aadhar No.</label>
                <input
                    type="text"
                    name="aadhar_no"
                    placeholder='Last 4-digit XXXX'
                    value={formData.aadhar_no}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Date</label>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Vis_form;
