import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projets.css';
import ohMyFoodImage from '../../img/oh-my-food.png';

const Projets = () => {
    const projet = {
        nom: "Ohmyfood",
        description: "Projet 4 OpenClassroom: Ohmyfood. J'ai conçu un menu alimentaire totalement adaptable à tous les appareils, en priorisant d'abord le mobile. J'ai développé un système de chargement ainsi que quelques animations CSS pour permettre la sélection d'un menu et l'utilisation du bouton 'j'aime'.",
        competences: [
            "Capacité à créer des interfaces web mobile-first",
            "Maîtrise de Sass pour structurer et optimiser le CSS",
            "Capacité à utiliser Git et GitHub pour la gestion de version et la collaboration sur des projets"
        ],
        lien: "https://github.com/LabatiJulien/P4-Ohmyfood.git"
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const imageRef = useRef(null);

    const handleMouseEnter = () => {
        setIsModalOpen(true);
    };

    const handleMouseLeave = () => {
        setIsModalOpen(false);
    };

    const settings = {
        dots: true,
        infinite: false, 
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div id="projets" className="projets">
            <h2>Projets</h2>
            <Slider {...settings}>
                <div className="projet">
                    <div 
                        className="image-container"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img ref={imageRef} src={ohMyFoodImage} alt={projet.nom} />
                        {isModalOpen && (
                            <div className="modal" style={{ width: imageRef.current.width, height: imageRef.current.height }}>
                                <h3 style={{ textAlign: 'center' }}>{projet.nom}</h3>
                                <div className="modal-content">
                                    <h4>Description :</h4>
                                    <p>{projet.description}</p>
                                    <h4>Compétences développées :</h4>
                                    <ul>
                                        {projet.competences.map((competence, index) => (
                                            <li key={index}>{competence}</li>
                                        ))}
                                    </ul>
                                    <h4>Lien :</h4>
                                    <a href={projet.lien} target="_blank" rel="noopener noreferrer">{projet.lien}</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Projets;
