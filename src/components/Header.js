import React from "react";
import logo from "../images/logo.png";
import { Link } from 'react-router-dom'

const Header = () => {

  const linkStyles = {
    textDecoration : 'none',
    color : 'inherit'
  }

  return (
    <div className="header">
      <div className="moving-header">
        <h4>FREE SHIPPING OVER $500.00</h4>
        <h4>UP TO 6 INSTALLMENTS WITHOUT INTEREST ON CLOTHES</h4>
      </div>
      <div className="main-header">
        <div className="header-name">
          <img className="logo" src={logo} alt="logo" />
          <Link to='/' style={ linkStyles } >
            <h1>
              SETA<b>GAMING</b>
            </h1>
          </Link>
        </div>
        <Link to="/shopping-cart" style={ linkStyles } >
          <i className="fa-sharp fa-solid fa-cart-shopping">
          </i>
        </Link>
      </div>
      <div className="main-navbar">
        <ul>
          
            <li>
              <Link to='/shop' style={ linkStyles } >
                <i className="fa-sharp fa-solid fa-bag-shopping"></i>Shop
              </Link>
            </li>
          <li>
            <i className="fa-solid fa-suitcase"></i>About Us
          </li>
          <li>
            <i className="fa-solid fa-message"></i>Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
