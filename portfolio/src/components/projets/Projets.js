import React from 'react';
import './Projets.css'

const Projets = () => {
    return (
        <div id="projets" className="projets">
            <h2>Projets</h2>
            <div className="projet">
                <h3>Nom du Projet 1</h3>
                <p>Description : [Description du Projet]</p>
                <p>Compétences développées : [Compétences]</p>
                <a href="[Lien vers le code ou le site]" target="_blank" rel="noopener noreferrer">Voir le Projet</a>
            </div>
            <div className="projet">
                <h3>Nom du Projet 2</h3>
                <p>Description : [Description du Projet]</p>
                <p>Compétences développées : [Compétences]</p>
                <a href="[Lien vers le code ou le site]" target="_blank" rel="noopener noreferrer">Voir le Projet</a>
            </div>
        </div>
    );
}

export default Projets;
