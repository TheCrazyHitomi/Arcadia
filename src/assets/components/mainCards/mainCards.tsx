import React from "react";
import ElementCard from "./elementCard";
import { Button } from "react-bootstrap";



const elementCards = [
    {
        titre: "Savane",
        image: "src/assets/image/FrontCards/animationPic.jpg",
    },
    {
        titre: "Jungle",
        image: "src/assets/image/FrontCards/habitatPic.jpg",
    },
    {
        titre: "Marais",
        image: "src/assets/image/FrontCards/animalPic.jpg",
    },
];

const MainCards: React.FC = () =>{
    return(
        <>
            <div className="overCards">
                <h2>KAKOU KAKOU</h2>
                <h3>blablabla</h3>
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