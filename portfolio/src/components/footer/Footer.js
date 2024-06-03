import React from 'react';
import footerImage from '../../img/Vault boy.png';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <img src={footerImage} alt="Footer" className="footer-image" />
            <p>&copy; {new Date().getFullYear()} - Mon Portfolio</p>
            <p>Mentions légales - <a href="/politique-de-confidentialite">Politique de confidentialité</a></p>
        </footer>
    );
}

export default Footer;
