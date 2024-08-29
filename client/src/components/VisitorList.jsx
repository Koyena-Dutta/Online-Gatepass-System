import React, { useEffect, useState } from 'react';
import '../styles/VisitorList.css';
import axios from 'axios';
import defaultImage from '../images/visitor.jpeg';

const VisitorList = () => {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const response = await axios.get('http://localhost:4000/visitors');
        setVisitors(response.data);
      } catch (error) {
        console.error('Error fetching visitors', error);
      }
    };

    fetchVisitors();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`http://localhost:4000/visitor.status/${id}`, { status });
      setVisitors(prevVisitors => 
        prevVisitors.map(visitor => 
          visitor.id === id ? { ...visitor, status } : visitor
        )
      );
    } catch (error) {
      console.error('Error updating status', error);
    }
  };

  return (
    <div className='visitor--list'>
      <div className='list--header'>
        <h2>Visitors</h2>
        <select>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>
      <div className='list--container'>
        {visitors.map((visitor) => (
          <div className='list' key={visitor.id}>
            <div className="visitor--detail">
              <img src={visitor.profile_picture || defaultImage} alt={visitor.name} />
              <h2>{visitor.name}</h2>
            </div>
            <span>{visitor.purpose}</span>
            <span>{new Date(visitor.date).toLocaleDateString()}</span>
            <span>
              <select
                value={visitor.status}
                onChange={(e) => handleStatusChange(visitor.id, e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="accepted">Accepted</option>
                <option value="declined">Declined</option>
              </select>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitorList;
