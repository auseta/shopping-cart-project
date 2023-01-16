import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link } from 'react-router-dom'
import MobileList from './MobileList';
const Header = ({ amount }) => {

  const [ mobileState, setMobileState ] = useState({
    active: false,
  })

  const linkStyles = {
    textDecoration : 'none',
    color : 'inherit'
  }

  const setMobileMenuState = (classes) => {
    setMobileState({active: !mobileState.active})
    mobileState.active ? classes.toggle('open') : classes.toggle('open');
  }

  const handleMobileMenu = (e) => {
    const $MOBILE__LIST = e.currentTarget;
    const mobileClasses = $MOBILE__LIST.classList
    setMobileMenuState(mobileClasses)
  }

  const handleMenuDisplay = () => {
    if (mobileState.active) {
      return 'enabled'
    } else {
      return 'disabled'
    }
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
          <h1 className="header__h1">
            SETA<b>GAMING</b>
          </h1>
        </div>
        <div className="header__nav">
          <ul className="header__ul">
            <Link to='/' style={ linkStyles } >
              <li className="header__li">
                <i className="header__i fa-solid fa-message"></i>Home
              </li>
            </Link>
            <Link to='/shop' style={ linkStyles } >
              <li className="header__li" >
                <i className="header__i fa-sharp fa-solid fa-bag-shopping"></i>Shop
              </li>
            </Link>
            <Link to="/shopping-cart" style={ linkStyles } >
              <li className="header__li" style={{ border: 'none' }} >
                <i className="header__i fa-sharp fa-solid fa-cart-shopping">
                  <span className={ amount !== 0 ? "header__span" : "" }>{ amount !== 0 ? amount : null }</span>
                </i>
              </li>
            </Link>
          </ul>
        </div>
        <div className="header__mobile" onClick={ (e) => handleMobileMenu(e) } >
          <span className="header__span--mobile" ></span>
          <span className="header__span--mobile" ></span>
          <span className="header__span--mobile" ></span>
          <span className="header__span--mobile" ></span>
          <MobileList state={ handleMenuDisplay } linkStyles={ linkStyles } />
        </div>
      </div>
    </div>
  );
};

export default Header;
