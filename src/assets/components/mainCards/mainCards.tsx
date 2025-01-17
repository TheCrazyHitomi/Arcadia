import React from "react";
import ElementCard from "./elementCard";
import { Button } from "react-bootstrap";



const elementCards = [
    {
        titre: "Savane",
        image: "./image/photo-1664140089727-c0b8b53de6ee.avif",
    },
    {
        titre: "Jungle",
        image: "./image/photo-1541959833400-049d37f98ccd.avif",
    },
    {
        titre: "Marais",
        image: "./image/photo-1686677588339-dff6fa7eb21b.avif",
    },
];

const MainCards: React.FC = () =>{
    return(
        <>
            <div className="overCards">
                <h2>Les Habitats</h2>
                <h3>Découvrez chaque animal dans un environnement le plus proche de son habitat naturel.</h3>
                    <div className="mainCards">
                            {
                                elementCards.map((elementCard, index) => {
                                    return (
                                    <ElementCard 
                                        key={index} 
                                        image={elementCard.image} 
                                        titre={elementCard.titre}/>
                                    )
                                })
                            }
                    </div>
                    <Button variant="warning2">Voir les habitats</Button>
            </div>
        </>
    )

}

export default MainCards;