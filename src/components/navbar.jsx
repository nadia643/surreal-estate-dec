import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

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
    </div>
    <ul className="nav">
      <Link className="item" to="/">
        <button type="button" className="buttonText">View Properties</button>
      </Link>
      <Link className="item" to="/add-property">
        <button type="button" className="buttonText">Add a Property</button>
      </Link>
    </ul>
  </div>
);

export default NavBar;
