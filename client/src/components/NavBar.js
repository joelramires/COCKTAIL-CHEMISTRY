import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">
      Home    
    </Link>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Random Drink
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/discover">
          tba
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/search">
            tba
          </Link>
        </li>
        <li>
        li className="nav-item">
          <Link className="nav-link" to="/search">
            tba
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
};

export default Navbar;