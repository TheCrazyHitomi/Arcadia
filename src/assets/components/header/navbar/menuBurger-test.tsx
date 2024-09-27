import React, { useState, useEffect, useRef } from 'react';
import { Dropdown, DropdownToggle } from 'react-bootstrap';
import './Burger.css'

// Typage du composant avec React.FC
const MenuBurger2: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Cette fonction sera appelée lors du clic sur le burger
    const toggleBurger = () => {
        setOpen(!isOpen); // Inverse l'état
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Vérifie si le clic est en dehors du dropdown
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup pour éviter les fuites de mémoire
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        
    }, []);

    return (
        <div >
            <Dropdown show={isOpen} onToggle={() => setOpen(!isOpen)}>
                
                    <DropdownToggle  variant="success">
                        <div ref={dropdownRef}
                            id="nav-icon" 
                            className={isOpen ? "open" : ""} // Ajoute la classe "open" si isOpen est true
                            onClick={toggleBurger} // Ajoute l'événement de clic
                            >
                            <span></span>
                            <span></span>
                            
                            <span></span>
                            <span></span>
                            
                            <span></span>
                            <span></span>
                        </div>
                    </DropdownToggle>
                
                <Dropdown.Menu className='dropdown-menu '>
                    <Dropdown.Item className='dropdown-item' href="#/action-1">Accueil</Dropdown.Item>
                    <Dropdown.Item className='dropdown-item' href="#/action-2">Animations</Dropdown.Item>
                    <Dropdown.Item className='dropdown-item' href="#/action-3">Habitats</Dropdown.Item>
                    <Dropdown.Item className='dropdown-item' href="#/action-3">Animaux</Dropdown.Item>
                    <Dropdown.Item className='dropdown-item' href="#/action-3">Restauration</Dropdown.Item>
                    <Dropdown.Item style={{color: "var(--warning)"}} className='dropdown-item' href="#/action-3">Connexion</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default MenuBurger2;