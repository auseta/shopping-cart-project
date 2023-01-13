import React from "react";
import logo from "../images/logo.png";
import { Link } from 'react-router-dom'

const Header = ({ amount }) => {

  const linkStyles = {
    textDecoration : 'none',
    color : 'inherit'
  }

  return (
    <div className="header">
      <div className="header__advertisement">
        <h4 className="header__h4" >FREE SHIPPING OVER $500.00</h4>
        <h4 className="header__h4" >UP TO 6 INSTALLMENTS WITHOUT INTEREST ON CLOTHES</h4>
      </div>
      <div className="header__main">
        <div className="header__title">
          <img className="header__img" src={logo} alt="logo" />
          <Link to='/' style={ linkStyles } >
            <h1 className="header__h1">
              SETA<b>GAMING</b>
            </h1>
          </Link>
        </div>
        <Link to="/shopping-cart" style={ linkStyles } >
          <i className="header__i fa-sharp fa-solid fa-cart-shopping">
            <span className={ amount !== 0 ? "header__span" : "" }>{ amount !== 0 ? amount : null }</span>
          </i>
        </Link>
      </div>
      <div className="header__nav">
        <ul className="header__ul" >
          <li className="header__li">
            <Link to='/shop' style={ linkStyles } >
              <i className="header__i fa-sharp fa-solid fa-bag-shopping"></i>Shop
            </Link>
          </li>
          <li className="header__li">
            <i className="header__i fa-solid fa-suitcase"></i>About Us
          </li>
          <li className="header__li">
            <i className="header__i fa-solid fa-message"></i>Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
