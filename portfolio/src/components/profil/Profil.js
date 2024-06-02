import React, { useState } from 'react';
import smileyImage from '../../img/Smiley transmetropolitan.png';
import cvPDF from '../../Cv/CV_Labati_Julien.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Profil.css';

const Profil = () => {
    const [isCompetencesOpen, setIsCompetencesOpen] = useState(false);

    const toggleCompetences = () => {
        setIsCompetencesOpen(!isCompetencesOpen);
    };

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
                <h2 className="competences-title" onClick={toggleCompetences}>
                    Compétences
                    <FontAwesomeIcon 
                        icon={isCompetencesOpen ? faChevronUp : faChevronDown} 
                        className="chevron-icon"
                    />
                </h2>
                {isCompetencesOpen && (
                    <div className="competences">
                        <ul>
                            <li>Balises sémantiques
                                <p>Utilisation correcte des balises HTML5 pour améliorer l'accessibilité et le SEO.</p>
                            </li>
                            <li>Centrer une division (flexbox)
                                <p>Utilisation de Flexbox pour centrer des éléments horizontalement et verticalement.</p>
                            </li>
                            <li>Site web responsive
                                <p>Création de sites web qui s'adaptent à toutes les tailles d'écran.</p>
                            </li>
                            <li>Media queries (mobile, tablette, ordinateur de bureau)
                                <p>Adaptation des styles CSS en fonction des différents dispositifs.</p>
                            </li>
                            <li>Animation CSS (utilisation de keyframes)
                                <p>Création d'animations fluides et engageantes avec CSS.</p>
                            </li>
                        </ul>
                        <ul>
                            <li>Faire des appels d'API (get, post, put, patch, delete)
                                <p>Interaction avec des services web pour récupérer et envoyer des données.</p>
                            </li>
                            <li>Fonction de connexion/déconnexion
                                <p>Implémentation de l'authentification des utilisateurs.</p>
                            </li>
                            <li>Fonction diaporama (carousel)
                                <p>Création de carrousels d'images ou de contenus dynamiques.</p>
                            </li>
                        </ul>
                        <ul>
                            <li>React router (gestion des routes)
                                <p>Gestion de la navigation et des vues dans une application React.</p>
                            </li>
                            <li>Composant réutilisable (utilisation de props)
                                <p>Création de composants modulaires et réutilisables en React.</p>
                            </li>
                            <li>Redux (gestion de l'état)
                                <p>Gestion de l'état global de l'application avec Redux.</p>
                            </li>
                        </ul>
                        <ul>
                            <li>Ajout d'un titre, d'une méta-description, d'opengraph et de Twitter
                                <p>Optimisation des pages web pour le SEO et le partage sur les réseaux sociaux.</p>
                            </li>
                            <li>Balises sémantiques correctes (h1, h2, h3...)
                                <p>Utilisation appropriée des balises de titre pour structurer le contenu.</p>
                            </li>
                            <li>Points de repère (nav, header, main)
                                <p>Structuration des pages web avec des éléments de navigation clairs.</p>
                            </li>
                            <li>Utilisation de Lighthouse et de Wave (outils pour les performances, l'accessibilité et le référencement)
                                <p>Évaluation et amélioration des performances et de l'accessibilité des sites web.</p>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profil;
