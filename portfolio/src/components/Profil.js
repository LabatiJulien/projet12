import React from 'react';
import smileyImage from '../img/Smiley transmetropolitan.png';
import cvPDF from '../Cv/CV_Labati_Julien.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Profil = () => {
    return (
        <div id="profil" className="profil">
            <div className="content">
                <h2 style={{ display: 'inline-block' }}>Bienvenue sur mon Profil</h2>
                <img src={smileyImage} alt="Smiley" className="bounce-icon" />
                <p>Labati julien  </p>
                <p>Intégrateur Web</p>
                <p>Voici mon CV : <a href={cvPDF} download><button className="button-download"><FontAwesomeIcon icon={faDownload} /></button></a></p>
                <p>Compétences : [Vos compétences]</p>
            </div>
        </div>
    );
}

export default Profil;
