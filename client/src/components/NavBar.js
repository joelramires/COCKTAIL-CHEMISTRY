import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/Home">
      Home    
    </Link>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/RandomCocktail">
            Random Drink
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/CocktailSearch">
          Cocktail Search
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Form">
            Login/Saved Drinks
          </Link>
        </li>
       
      </ul>
    </div>
  </nav>
);
};

export default Navbar;