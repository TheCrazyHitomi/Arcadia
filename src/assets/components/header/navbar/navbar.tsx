import React, { useEffect, useState } from 'react';

// Importation des composants et des logos

import InfoButtons from './infoButtons';
import LogoVar1 from '../../../../../public/image/SVG/LogoVar1.tsx';
// import LogoVar2 from '../../../image/SVG/Logovar2.tsx';
// import LogoVar3 from '../../../image/SVG/LogoVar3.tsx';
import MenuBurger from './menuBurger.tsx';

// Typage du composant Navbar
const Navbar: React.FC = () => {
    // Déclaration de l'état avec typage explicite
    const [scrolling, setScrolling] = useState<boolean>(false);

    // Fonction pour gérer le scroll, typée comme void car elle ne retourne rien
    const handleScroll = (): void => {
        setScrolling(document.documentElement.scrollTop > 50);
    };

    // Hook useEffect pour ajouter et retirer l'événement de scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Détermination de la classe du Navbar en fonction de l'état de scroll
    const NavbarClassName = scrolling ? "navbar navbar-scrolled" : "navbar";

    return (
        <nav className={NavbarClassName}>
            <div className="header">
                <MenuBurger />
                <LogoVar1 />
                <InfoButtons />
            </div>
        </nav>
    );
}

export default Navbar;