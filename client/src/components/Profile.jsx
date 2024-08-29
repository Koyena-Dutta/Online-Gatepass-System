// Profile.jsx
import React from 'react';
import '../styles/profile.css';
import userImage from '../images/visitor.jpeg';
import ProfileHeader from './ProfileHeader';
import { BiBook } from 'react-icons/bi';
import { BiRupee } from "react-icons/bi";
import { BiSolidBrain } from "react-icons/bi";

const courses = [
  {
    title: 'IT Department',
    duration: '2 years',
    icon: <BiBook />,
  },
  {
    title: 'Salary',
    duration: '50,00,000 rs.',
    icon: <BiRupee />,
  },
  {
    title: 'Work experience',
    duration: '10 years in Software Development',
    icon: <BiSolidBrain />
  }
  
];

export const Profile = () => {
  return (
    <div className="profile">
      <ProfileHeader />

      <div className="user--profile">
        <div className="user--details">
          <img src={userImage} alt="" />
          <h3 className="username">John Doe</h3>
          <span className="profession">Software Engineer</span>
        </div>
        <div className="user-courses">
          {courses.map((course, index) => (
            <div className="course" key={index}>
              <div className="course-details">
                <div className="course-cover">{course.icon}</div>
                <div className="course-name">
                  <h5 className="title">{course.title}</h5>
                  <span className="duration">{course.duration}</span>
                </div>
                

              </div>
              <div className="action">:</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
