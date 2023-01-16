import React from 'react';
import { Link } from 'react-router-dom';

const MobileList = ({ state, linkStyles }) => {

  return(
    <ul className={`header__ul--mobile ${ state() }`} >
      <li className='header__li--mobile' >
        <Link to='/' style={ linkStyles } >Home</Link>
      </li>
      <li className='header__li--mobile' >
        <Link to='/shop' style={ linkStyles } >
          Shop
        </Link>
      </li>
      <li className='header__li--mobile' >
        <Link to='/shopping-cart' style={ linkStyles } >
          Cart
        </Link>
      </li>
    </ul>
  )
}

export default MobileList;