//Content.jsx
import React from 'react'
import ContentHeader from './ContentHeader';
import Card from './Card';
import VisitorList from'./VisitorList';
import '../styles/content.css';
export const Content = () => {
  return (
    <div className='content'>
        <ContentHeader />
        <Card />
        <VisitorList />
    </div>
  )
}
export default Content;