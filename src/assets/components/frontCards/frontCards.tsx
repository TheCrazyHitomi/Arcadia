import React from "react";
import SimpleCard from "./simpleCard";

interface NavCard {
    titre: string;
    image: string;
}

const navCards: NavCard[] = [
    {
        titre: "Animation",
        image: "src/assets/image/FrontCards/animationPic.jpg",
    },
    {
        titre: "Les habitats",
        image: "src/assets/image/FrontCards/habitatPic.jpg",
    },
    {
        titre: "Les animaux",
        image: "src/assets/image/FrontCards/animalPic.jpg",
    },
    {
        titre: "Restauration",
        image: "src/assets/image/FrontCards/restoPic.jpg",
    },
    
];

const FrontCards: React.FC = () =>{

    return(
        <>
            <div className="frontCards">
                <h1>Kakou Kakou</h1>
                <h3>bla bla bla</h3>
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