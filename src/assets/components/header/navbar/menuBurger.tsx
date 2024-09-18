import React, { useState, useEffect, useRef } from 'react';
import {Divide as Hamburger} from 'hamburger-react';
import { Dropdown, DropdownToggle } from 'react-bootstrap';

// Typage du composant avec React.FC
const MenuBurger: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Effet pour fermer le menu quand on clique à l'extérieur
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
        <div ref={dropdownRef}>
            <Dropdown show={isOpen} onToggle={() => setOpen(!isOpen)}>
                <DropdownToggle variant="success">
                    <Hamburger toggled={isOpen} toggle={setOpen} size={25} duration={0.5} rounded />
                </DropdownToggle>

                <Dropdown.Menu className='dropdown-menu'>
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

export default MenuBurger;