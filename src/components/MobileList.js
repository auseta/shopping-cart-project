import React from 'react';

const MobileList = ({ state }) => {

  state()

  return(
    <ul className={`header__ul--mobile ${ state() }`} >
      <li className='header__li--mobile' >Home</li>
      <li className='header__li--mobile' >Shop</li>
      <li className='header__li--mobile' >Cart</li>
    </ul>
  )
}

export default MobileList;