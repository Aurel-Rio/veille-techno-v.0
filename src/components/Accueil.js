// Accueil.js

import React from 'react';
import '../css/accueil.css';

const Accueil = () => {
  return (
    <div className="accueil">
      <h2>Bienvenue sur Veille-Techno.fr</h2>
      <p>
        Bienvenue sur notre site dédié à la veille technologique ! Ici, nous vous tenons informés des dernières
        avancées technologiques, des tendances du numérique, et des sujets qui façonnent le monde de demain.
        Que vous soyez développeur, étudiant, ou simplement passionné de tech, vous trouverez ici des articles
        captivants et des actualités à jour pour rester à la pointe de la technologie.
      </p>
      <h3>Nos sujets abordés :</h3>
      <ul>
        <li>Intelligence Artificielle</li>
        <li>Internet des Objets</li>
        <li>Blockchain</li>
        <li>Réalité Virtuelle et Augmentée</li>
        <li>Big Data et Data Science</li>
        {/* Ajoutez d'autres sujets pertinents ici */}
      </ul>
    </div>
  );
};

export default Accueil;
