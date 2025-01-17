import React from "react";
import SimpleCard from "./simpleCard";

interface NavCard {
    titre: string;
    image: string;
}

const navCards: NavCard[] = [
    {
        titre: "Animation",
        image: "./image/FrontCards/animationPic.jpg",
    },
    {
        titre: "Les habitats",
        image: "./image/FrontCards/habitatPic.jpg",
    },
    {
        titre: "Les animaux",
        image: "./image/FrontCards/animalPic.jpg",
    },
    {
        titre: "Restauration",
        image: "./image/FrontCards/restoPic.jpg",
    },
    
];

const FrontCards: React.FC = () =>{

    return(
        <>
            <div className="frontCards">
                <h1>Tout sur le parc</h1>
                <h3>un aperçu de l'environement, et des infrastructures.</h3>
            <div className="navCards">
                {
                    navCards.map((navCard, index) => {
                        return (
                        <SimpleCard 
                            key={index} 
                            image={navCard.image} 
                            titre={navCard.titre} 
                            isEven={index%2===0}
                        />
                        )
                    })
                }
            </div>
            </div>
        </>
    );
}

export default FrontCards;