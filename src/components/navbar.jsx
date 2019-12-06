import React from 'react';
import '../styles/navbar.css';

const NavBar = () => (
  <div className="NavBar">
    <div className="imageContainer">
      <img
        // eslint-disable-next-line global-require
        src={require('../images/surrealestate.png')}
        alt="Logo should be here"
        height="200"
        width="300"
      />
      <ul className="nav">
        <li className="item"> View Properties </li>
        <li className="item"> Add a Property </li>
      </ul>
    </div>
  </div>
);

export default NavBar;
