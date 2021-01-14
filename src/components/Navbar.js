import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCrow, faSearch } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <nav>
      <p className="logo">Pura</p>
      <div className="nav-links">
        <li className="nav-link">
          <a href="#hero-container">Home</a>
        </li>
        <li className="nav-link">
          <a href="#about-container">About</a>
        </li>
        <li className="nav-link">
          <a href="#team-container">Team</a>
        </li>
        <li className="nav-link">
          <a href="#services-container">Services</a>
        </li>
        <li className="nav-link">
          <a href="#contact-container">Contact</a>
        </li>
      </div>
      <div className="nav-contact">
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faBook} />
        <FontAwesomeIcon icon={faCrow} />
      </div>
    </nav>
  );
}

export default Navbar;
