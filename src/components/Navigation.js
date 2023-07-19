import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faAddressBook, faBars } from '@fortawesome/free-solid-svg-icons';
import '../css/navigation.css'; // Assurez-vous de créer ce fichier CSS et de le personnaliser selon vos préférences

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navigation ${showMenu ? 'show-menu' : ''}`}>
      <div className="nav-icon" onClick={handleMenuClick}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="nav-links">
        <a href="#accueil">
          <FontAwesomeIcon icon={faHome} />
          Accueil
        </a>
        <a href="#articles">
          <FontAwesomeIcon icon={faNewspaper} />
          Articles
        </a>
        <a href="#contact">
          <FontAwesomeIcon icon={faAddressBook} />
          Contact
        </a>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Rechercher..." />
      </div>
      {showMenu && (
        <div className="menu-dropdown">
          <a href="#articles">Articles</a>
          <a href="#articles/tech">Technologie</a>
          <a href="#articles/science">Science</a>
          {/* Ajoutez d'autres catégories d'articles au besoin */}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
