import React from 'react';
import Button from 'react-bootstrap/Button';
import InfoIcon from '../../../image/SVG/infoIcon';
import MapIcon from '../../../image/SVG/mapIcon';

// Définition du composant avec TypeScript
const InfoButtons: React.FC = () => {
    // Fonction de gestion du clic pour le bouton Warning
    const handleClick = (): void => {
        console.log("Kakou-Kakou");
    };

    return (
        <div className="navbarButton">
            <Button className='infoButton' variant="warning" onClick={handleClick}>
                <InfoIcon/>
            </Button>{' '}
            <Button className="infoButton" variant="success">
                <MapIcon/>
            </Button>{' '}
        </div>
    );
};

export default InfoButtons;