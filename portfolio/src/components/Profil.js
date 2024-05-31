import React from 'react';
import smileyImage from '../img/Smiley transmetropolitan.png';
import backgroundImage from '../img/voluteFuméeViolet.jpeg';

const Profil = () => {
    return (
        <div id="profil" className="profil" style={{ backgroundImage: `url(${backgroundImage})` }}>
             <div className="background-image"></div>
            <div className="content"></div>
            <h2>
                Bienvenue sur mon Profil
                <img src={smileyImage} alt="Smiley" className="bounce-icon" />
            </h2>
            <p>Labati julien  </p>
            <p>Intégrateur Web</p>
            <p>Voici mon Cv : </p>
            <p>Compétences : [Vos compétences]</p>
        </div>
    );
}

export default Profil;
