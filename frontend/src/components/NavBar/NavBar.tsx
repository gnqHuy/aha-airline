import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

type Props = {};

const NavBar: React.FC<Props> = () => {
  return (
    <nav>
      <div id="logo">
        <Link to="/" style={{ display: 'block'}}>
          <span style={{ fontSize: '1.5rem' }}>AHA AIRLINE</span> <br/>
          <span style={{ fontSize: '0.7rem' }}>FLYING WITHOUT WINGS</span>
        </Link>
      </div>
      <div id="nav">
        <Link to="/booking">Book Flight</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/travelInformation">Travel Information</Link>
        <Link to="/experience">Experience</Link>
      </div>
      <div id="account">
        <Link to="/login">Login</Link>
        <Link to="/sign-up">Sign Up</Link>
      </div>
    </nav>
  );
};

export default NavBar;
