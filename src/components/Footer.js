import React from "react";
import "../style/App.css";
import { Link } from "react-router-dom";



function Footer() {
  return (
    <footer className="footer">
      <div className="global-container footer-wrapper" data-aos="fade-up">
        <ul className="bottom-nav">
          <li><Link to="/art">Art</Link></li>
          <li><Link to="/photo">Photo</Link></li>
          <li><Link to="/music">Music</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/bio">Bio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <ul className="social-links">
          <li><a>
            <i className="fab fa-facebook-f"></i>
          </a></li>
          <li><a>
            <i className="fab fa-twitter"></i>
          </a></li>
          <li><a>
            <i className="fab fa-instagram"></i>
          </a></li>
          <li><a>
            <i className="fab fa-youtube"></i>
          </a></li>
        </ul>
      </div>
      <p>Powered by Stone Malone</p>
    </footer>
  );
}

export default Footer;
