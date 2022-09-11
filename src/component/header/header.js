import React from 'react';
import './header.css';

export const Header = () => {
  return (
    <div className='header-body'>
      <div>
        <div className='logo'></div>
        <p className='logo-para'>SA Infrastructure Consultation Pvt. Ltd</p>
      </div>
      <div className='header-btn'>
        <div className='Login'>Employee Login</div>
        <div className='contact'>Contact</div>
        <div><i className="fa fa-navicon" style={{fontSize:"24px"}}></i></div>
      </div>
    </div>
  )
};
