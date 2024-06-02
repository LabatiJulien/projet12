import React from 'react';
import footerImage from '../../img/Vault boy.png';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <img src={footerImage} alt="Footer" className="footer-image" />
            <p>&copy; {new Date().getFullYear()} - Mon Portfolio</p>
        </footer>
    );
}

export default Footer;
