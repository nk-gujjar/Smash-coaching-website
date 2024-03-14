import React from 'react';
import './Welcomepage.css';

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <h1>SMA<span>SH</span></h1>
      </div>
      <ul>
        <li className="list-items"><a href="#">Home</a></li>
        <li className="list-items"><a href="#courses">Courses</a></li>
        <li className="list-items"><a href="#why-us">Why Us?</a></li>
        <li className="list-items"><a href="#results">Results</a></li>
        <li className="list-items"><a href="#Gallery">Gallery</a></li>
        <li className="list-items" ><a href=""><button className="btn-l">JOIN US</button></a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
