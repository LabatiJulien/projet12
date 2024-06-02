import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projets.css';
import ohMyFoodImage from '../../img/oh-my-food.png';
import argentBank from '../../img/argentBank.png';

const Projets = () => {
    const modalRef = useRef(null);
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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProjet, setSelectedProjet] = useState(null);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

    const handleImageClick = (projet, e) => {
        const imageRect = e.target.getBoundingClientRect();
        const yRelativeToImage = e.clientY - imageRect.top;

        setSelectedProjet(projet);
        setIsModalOpen(true);
        setModalPosition({ top: window.scrollY + imageRect.top + yRelativeToImage - 20, left: 20 });
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setIsModalOpen(false);
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div id="projets" className="projets" onClick={handleOutsideClick}>
            <h2>Projets</h2>
            <Slider {...settings} prevArrow={<CustomPrevArrow handleCloseModal={handleCloseModal} />} nextArrow={<CustomNextArrow handleCloseModal={handleCloseModal} />}>
                {projets.map((projet, index) => (
                    <div key={index} className="projet">
                        <div
                            className="image-container"
                            onClick={(e) => handleImageClick(projet, e)}
                        >
                            <img src={projet.image} alt={projet.nom} />
                        </div>
                    </div>
                ))}
            </Slider>
            {isModalOpen && selectedProjet && (
                <div
                    className="modal"
                    ref={modalRef}
                    style={{
                        top: modalPosition.top,
                        left: modalPosition.left + 100
                    }}
                    onClick={handleCloseModal}
                >
                    <h3 style={{ textAlign: 'center' }}>{selectedProjet.nom}</h3>
                    <div className="modal-content">
                        <h4>Description :</h4>
                        <p>{selectedProjet.description}</p>
                        <h4>Compétences développées :</h4>
                        <ul>
                            {selectedProjet.competences.map((competence, index) => (
                                <li key={index}>{competence}</li>
                            ))}
                        </ul>
                        <h4>Lien :</h4>
                        <a href={selectedProjet.lien} target="_blank" rel="noopener noreferrer" style={{ marginBottom: '10px' }}>{selectedProjet.lien}</a>
                        <button onClick={handleCloseModal}>Fermer</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const CustomPrevArrow = ({ onClick, handleCloseModal }) => {
    const handlePrevClick = () => {
        onClick();
        handleCloseModal();
    };
    return (
        <div className="slick-prev" onClick={handlePrevClick}></div>
    );
};

const CustomNextArrow = ({ onClick, handleCloseModal }) => {
    const handleNextClick = () => {
        onClick();
        handleCloseModal();
    };
    return (
        <div className="slick-next" onClick={handleNextClick}></div>
    );
};

export default Projets;
