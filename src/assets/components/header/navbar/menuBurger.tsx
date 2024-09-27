import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Burger.css'; // Assume que tu as les styles dans ce fichier

const MenuBurger: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const burgerRef = useRef<HTMLDivElement>(null);

  // Fonction pour basculer l'ouverture du menu
  const toggleBurger = () => {
    setOpen(!isOpen);
  };

  // Ferme le menu si on clique en dehors de celui-ci
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (burgerRef.current && !burgerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={burgerRef} className="menu-burger-container">
      {/* Burger Icon */}
      <div
        id="nav-icon"
        className={isOpen ? "open" : ""}
        onClick={toggleBurger}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu Items */}
      <nav className={`menu-items ${isOpen ? "open" : ""}`}>
        <ul>
          <li onClick={toggleBurger}>
            <Link to="/">Accueil</Link>
          </li>
          <li onClick={toggleBurger}>
            <Link to="/animation">Animations</Link>
          </li>
          <li onClick={toggleBurger}>
            <Link to="/habitats">Habitats</Link>
          </li>
          <li onClick={toggleBurger}>
            <Link to="/animaux">Animaux</Link>
          </li>
          <li onClick={toggleBurger}>
            <Link to="/restauration">Restauration</Link>
          </li>
          <li onClick={toggleBurger}>
            <Link to="/connexion" style={{ color: "var(--warning)" }}>
              Connexion
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuBurger;