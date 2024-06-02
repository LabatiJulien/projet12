import React, { useState } from 'react';
import './Projets.css'; 
import ohMyFoodImage from '../../img/oh-my-food.png';
import argentBank from '../../img/argentBank.png';

const Projets = () => {
    const projets = [
        {
            nom: "Ohmyfood",
            description: "Le projet 4 d'OpenClassroom: Ohmyfood. J'ai conçu un menu alimentaire totalement adaptable à tous les appareils, en priorisant d'abord le mobile. J'ai développé un système de chargement ainsi que quelques animations CSS pour permettre la sélection d'un menu et l'utilisation du bouton 'j'aime'.",
            competences: [
                "Capacité à créer des interfaces web mobile-first",
                "Maîtrise de Sass pour structurer et optimiser le CSS",
                "Capacité à utiliser Git et GitHub pour la gestion de version et la collaboration sur des projets"
            ],
            lien: "https://github.com/LabatiJulien/P4-Ohmyfood.git",
            image: ohMyFoodImage
        },
        {
            nom: "ArgentBank",
            description: "Le projet 11 d'OpenClassroom: ArgentBank. Ma mission principale était de créer un tableau de bord utilisateur avec un système d'authentification en utilisant React et Redux, en migrant un site web existant en HTML/CSS vers cette nouvelle plateforme.",
            competences: [
                "Développement d'interfaces utilisateur avec React et Redux",
                "Gestion de l'authentification et des appels API sécurisés",
                "Conception et documentation des API avec Swagger"
            ],
            lien: "https://github.com/LabatiJulien/ArgentBank-website.git",
            image: argentBank
        }
    ];

    return (
        <div id="projets" className="projets">
            <h2>Projets</h2>
            <div className="cartes-projets">
                {projets.map((projet, index) => (
                    <CarteProjet key={index} projet={projet} />
                ))}
            </div>
        </div>
    );
};

const CarteProjet = ({ projet }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`carte-projet ${isOpen ? 'ouverte' : ''}`} onClick={toggleOpen}>
            <h3>{projet.nom}</h3>
            <img src={projet.image} alt={projet.nom} />
            {isOpen && (
                <div className="contenu">
                    <p>{projet.description}</p>
                    <ul>
                        {projet.competences.map((competence, index) => (
                            <li key={index}>{competence}</li>
                        ))}
                    </ul>
                    <a href={projet.lien} target="_blank" rel="noopener noreferrer">{projet.lien}</a>
                </div>
            )}
        </div>
    );
};

export default Projets;
