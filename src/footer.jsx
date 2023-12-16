import React from 'react';
import './footer.css'; 

export default function Footer() {
  return (
    <footer className="stickyfooter">
      <p className="footer-item" id="stickyfooterText">Visit my GitHub profile:</p>
      <a className="footer-item" id="stickyfooterLink" href="https://github.com/Dashx7/Startup">https://github.com/Dashx7/Startup</a>
      {/* ... */}
    </footer>
  );
}