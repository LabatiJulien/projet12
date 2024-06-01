import React from 'react';
import smileyImage from '../img/Smiley transmetropolitan.png';
import cvPDF from '../Cv/CV_Labati_Julien.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Profil = () => {
    return (
        <div id="profil" className="profil">
            <div className="content">
                <h1 style={{ display: 'inline-block' }}>Bienvenue sur mon Profil</h1>
                <img src={smileyImage} alt="Smiley" className="bounce-icon" />
                <h2>Labati julien  </h2>
                <h2>Intégrateur Web</h2>
                <h2>Voici mon CV : <a href={cvPDF} download><button className="button-download"><FontAwesomeIcon icon={faDownload} /></button></a></h2>
                <h2>Compétences : </h2> 
                <p> Lors de mon apprentissage au sein de la plate-forme OpenClassroom j'ai pu réaliser une douzaine de projets
                    couvrant divers domaine de compétences. En voici quelques exemples :
                    HTML et CSS pour créer des sites web basiques :

    Balises sémantiques
    Centrer une division (flexbox)
    Site web responsive
    Media queries (mobile, tablette, ordinateur de bureau)
    Animation CSS (utilisation de keyframes)

JavaScript pour un site web dynamique :

    Faire des appels d'API (get, post, put, patch, delete)
    Fonction de connexion/déconnexion
    Fonction diaporama (carousel)

React pour créer une application monopage :

    React router (gestion des routes)
    Composant réutilisable (utilisation de props)
    Redux (gestion de l'état)
    SEO pour améliorer la visibilité du site web :

    Ajout d'un titre, d'une méta-description, d'opengraph et de Twitter
    Balises sémantiques correctes (h1, h2, h3...)
    Points de repère (nav, header, main)
    Utilisation de Lighthouse et de Wave (outils pour les performances, l'accessibilité et le référencement)
    </p>
            </div>
        </div>
    );
}

export default Profil;
