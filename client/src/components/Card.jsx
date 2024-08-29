//Card.jsx
import React from 'react'
import {BiGroup} from 'react-icons/bi';
const courses = [
  {
    title: 'Total pre-registers',
    icon: <BiGroup />,
  },
  {
    title: 'Total no. of visitors',
    duration: '2 Hours',
    icon: <BiGroup />,
  },
  /*{
    title: 'UI & UX',
    duration: '2 Hours',
    icon: <BiBuilding />,
  },*/
]
export const Card = () => {
  return (
    <div className='card--container'>
      {courses.map((item) => (
        <div className='card'>
          <div className='card--cover'>{item.icon}</div>
          <div className='card--title'>
            <h2>{item.title}</h2>

          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;