import { useState, useEffect, useRef } from "react";
import './Burger.css'

const Burger: React.FC = () => {
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

    
    return(
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
    );
}

export default Burger;