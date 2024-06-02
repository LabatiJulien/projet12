import React from 'react';
import smileyImage from '../../img/Smiley transmetropolitan.png';
import cvPDF from '../../Cv/CV_Labati_Julien.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './Profil.css';

const Profil = () => {
    return (
        <div id="profil" className="profil">
    <div className="content">
        <div className="title-container">
            <h1>Bienvenue sur mon Profil</h1>
            <img src={smileyImage} alt="Smiley" className="bounce-icon" />
        </div>
        <h2>Labati Julien</h2>
        <h2>Intégrateur Web</h2>
        <h2>Voici mon CV :
            <a href={cvPDF} download>
                <button className="button-download">
                    <FontAwesomeIcon icon={faDownload} />
                </button>
            </a>
        </h2>
        <h2>Compétences :</h2>
        <ul>
            <li>Balises sémantiques</li>
            <li>Centrer une division (flexbox)</li>
            <li>Site web responsive</li>
            <li>Media queries (mobile, tablette, ordinateur de bureau)</li>
            <li>Animation CSS (utilisation de keyframes)</li>
        </ul>
        <ul>
            <li>Faire des appels d'API (get, post, put, patch, delete)</li>
            <li>Fonction de connexion/déconnexion</li>
            <li>Fonction diaporama (carousel)</li>
        </ul>
        <ul>
            <li>React router (gestion des routes)</li>
            <li>Composant réutilisable (utilisation de props)</li>
            <li>Redux (gestion de l'état)</li>
        </ul>
        <ul>
            <li>Ajout d'un titre, d'une méta-description, d'opengraph et de Twitter</li>
            <li>Balises sémantiques correctes (h1, h2, h3...)</li>
            <li>Points de repère (nav, header, main)</li>
            <li>Utilisation de Lighthouse et de Wave (outils pour les performances, l'accessibilité et le référencement)</li>
        </ul>
    </div>
</div>
    );
}

export default Profil;
