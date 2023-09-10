import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header>
        <img src={require('../images/logo.png')} alt='LogoImage'/>
        <label htmlFor="toggler"><i class="fa-solid fa-bars"></i></label>
        <input type="checkbox" id="toggler" />
        <div className="menu">
          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Pages</a></li>
              <li><a href="/">Services</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Shop</a></li>
              <li><a href="/">About</a></li>
          </ul>
        </div>
    </header>
  )
}

export default Header;
