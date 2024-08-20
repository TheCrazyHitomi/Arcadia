import React from "react";

// Définir l'interface pour les props du composant
interface SimpleCardProps {
    isEven: boolean;
    image: string;
    titre: string;
}

const SimpleCard: React.FC<SimpleCardProps> = (props) =>{

    return (
        <>
            <div className={`navCard ${props.isEven? "even" : "odd"}`}>
                <div className="circlePic">
                    <img className="navPic" src={props.image} alt={props.titre}/></div>
                <h2 className="navTitle">{props.titre}</h2>
            </div>
        </>
    )
}

export default SimpleCard;