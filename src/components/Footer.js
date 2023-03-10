import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <div className='footer'>
      <div className='footer__links'>
        <i className="footer__i i fa-brands fa-instagram"></i>
        <i className="footer__i i fa-brands fa-facebook"></i>
        <i className="footer__i i fa-brands fa-twitter"></i> 
        <a className='footer__a' href='https://www.linkedin.com/in/augusto-seta/'>
          <i className="footer__i i fa-brands fa-linkedin"></i>
        </a>
      </div>
      <h4 className='footer__h4' >Project made it by Augusto Seta</h4>
    </div>
  )
}

export default Footer;