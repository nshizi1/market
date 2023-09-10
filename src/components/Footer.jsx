import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="mainFooter">
        <div className="icons">
          <img src={require('../images/logo.png')} alt="" />
          <p>421st Kanombe-Remera Road</p>
          <p>kk 5av 29st Kigali, Nyarugunga</p>
          <div className="fas">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="links">
          <h3>useful links</h3>
          <ul>
            <li><a href="/">Payment & Tax</a></li>
            <li><a href="/">Terms of services</a></li>
            <li><a href="/">Your account</a></li>
            <li><a href="/">Privacy policy</a></li>
          </ul>
        </div>
        <div className="company">
          <h3>Our company</h3>
          <ul>
            <li><a href="/">About us</a></li>
            <li><a href="/">Media</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Contact us</a></li>
          </ul>
        </div>
        <div className="news">
          <h3>subscribe news</h3>
          <div className="input">
            <input type="email" name="" placeholder='Email address' id="" />
            <i class="fa-solid fa-paper-plane"></i>
          </div>
          <ul>
            <li>info@nbilanguages.com</li>
            <li>+250-791-847-408</li>
          </ul>
        </div>
      </div>
      <div className="copy">
        <p>2023 &copy; nshiziboi industry ltd</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
