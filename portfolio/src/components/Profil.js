import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam } from '@fortawesome/free-regular-svg-icons';
import backgroundImage from '../voluteFuméeViolet.jpeg';

const Profil = () => {
    return (
        <div id="profil" className="profil" style={{ backgroundImage: `url(${backgroundImage})` }}>
             <div className="background-image"></div>
            <div className="content"></div>
            <h2>
                Bienvenue sur mon Profil
                <FontAwesomeIcon icon={faSmileBeam} className="fa-regular bounce-icon" />
            </h2>
            <p>Labati julien  </p>
            <p>Intégrateur Web</p>
            <p>Voici mon Cv : </p>
            <p>Compétences : [Vos compétences]</p>
        </div>
    );
}

export default Profil;
