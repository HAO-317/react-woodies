import React from 'react';
import footerImage from '../assets/img/Footer.png'; 
import logo from '../assets/img/Logo.png'; 
import '../styles/Footer.css';


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="overlap">
        <div className="overlap-group">
          <img className="pexels-photo" src={footerImage} alt="Decorative background image" />
          <div className="frame">
            <div className="contact-info">
              <div className="group">
                <h2 className="text-wrapper"></h2>
                <img className="logo" src={logo} alt="WOODIES Logo" />
              </div>
              <address>
                <p className="text-wrapper-2">
                  <a href="tel:+0128967453">(012) 8967453</a>
                </p>
                <p className="text-wrapper-2">
                  <a href="mailto:woodies@gmail.com">woodies@gmail.com</a>
                </p>
                <p className="text-wrapper-2">Jakarta, Indonesia</p>
              </address>
            </div>
          </div>
          <hr className="line" />
        </div>
        <p className="text-wrapper-3">© 2020 WOODIES</p>
      </div>
    </footer>
  );
};

export default Footer;