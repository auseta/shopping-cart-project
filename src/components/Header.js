import React from 'react';
import logo from '../images/logo.png'

const Header = ({ cart, events }) => {
  return (
    <div className='header'>
      <div className='moving-header'>
        <h4>FREE SHIPPING OVER $500.00</h4>
        <h4>UP TO 6 INSTALLMENTS WITHOUT INTEREST ON CLOTHES</h4>
      </div>
      <div className='main-header'>
        <div className='header-name'>
          <img className='logo' src={ logo } />
          <h1>SETA<b>GAMING</b></h1>
        </div>
        <i class="fa-sharp fa-solid fa-cart-shopping" onClick={ events } >
          { cart === 0 ? null : <span>{ cart }</span> }
        </i>
      </div>
      <div className='main-navbar'>
        <ul>
          <li><i class="fa-sharp fa-solid fa-bag-shopping"></i>Shop</li>
          <li><i class="fa-solid fa-suitcase"></i>About Us</li>
          <li><i class="fa-solid fa-message"></i>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;