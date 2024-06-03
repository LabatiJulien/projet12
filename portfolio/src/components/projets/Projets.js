import React, { useState } from 'react';
import ohMyFoodImage from '../../img/oh-my-food.png';
import argentBank from '../../img/argentBank.png';
import kasa from '../../img/kasa.png'
import sophieBluel from '../../img/sophie-bluel.png'
import './Projets.css'; 

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
        },
        {
            nom: "Kasa",
            description: "Le projet 8 d'OpenClassroom: Kasa. Mon rôle consistait à concevoir une nouvelle plateforme web en utilisant React pour la partie front-end et Node.js pour le back-end, en m'appuyant sur les maquettes fournies par le designer.",
            competences: [
                "- Maîtrise de React",
                "- Compétence en Node.js",
                "- Capacité à travailler avec des maquettes "
            ],
            lien: "https://github.com/LabatiJulien/kasa.git",
            image: kasa
        },
        {
            nom: "Sophie Bluel",
            description: "Le projet 6 d'OpenClassroom: Sophie Bluel. Mon rôle a impliqué la conception de la page de présentation des travaux de l'architecte, offrant des options de filtrage par catégorie. De plus, j'ai développé la page de connexion sécurisée de l'administrateur en utilisant JWT (JSON Web Tokens) pour l'authentification. J'ai également conçu une modale permettant à l'architecte d'ajouter ou de supprimer des projets.",
            competences: [
                "- Développement Frontend",
                "- Gestion de l'Authentification",
                "- Intégration avec une API"
            ],
            lien: "https://github.com/LabatiJulien/Portfolio-architecte-sophie-bluel.git",
            image: sophieBluel
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div id="projets" className="projets">
            <h1>Les Projets sur lesquels j'ai pu travailler :</h1>
            <div className="cartes-projets">
                {projets.map((projet, index) => (
                    <CarteProjet 
                        key={index} 
                        projet={projet} 
                        isOpen={openIndex === index} 
                        onToggle={() => toggleOpen(index)} 
                    />
                ))}
            </div>
        </div>
    );
};

const CarteProjet = ({ projet, isOpen, onToggle }) => {
    return (
        <div className={`carte-projet ${isOpen ? 'ouverte' : ''}`} onClick={onToggle}>
            <h3>{projet.nom}</h3>
            <img src={projet.image} alt={projet.nom} className="projet-image" />
            {isOpen && (
                <div className="contenu">
                    <h4>Description</h4>
                    <p>{projet.description}</p>
                    <h4>Compétences développées</h4>
                    <ul>
                        {projet.competences.map((competence, index) => (
                            <li key={index}>{competence}</li>
                        ))}
                    </ul>
                    <h4>Lien</h4>
                    <a href={projet.lien} target="_blank" rel="noopener noreferrer">{projet.lien}</a>
                </div>
            )}
        </div>
    );
};

export default Projets;
