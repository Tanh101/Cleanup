import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <div className='Navbar'>
        <span className='navbar-logo'>Cleanup</span>
        <div className='navbar-items'>
          <a href="/home">Home</a>
          <a href="/intro">Introduction</a>
          <a href="/service">Service</a>
          <a href="/price">Price List</a>
          <a href="/contact">Contact</a>
        </div>
    </div>

  )
}

export default Navbar;