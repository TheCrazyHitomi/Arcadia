import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

interface ElementCardProps {
    image: string;
    titre: string;
}


const ElementCard: React.FC<ElementCardProps> = (props) =>{
    return(
        <>
        <Card className="elementCard">
            <Card.Img className="elementCardPic" variant="top" src={props.image} />
                <Card.Body className="cardBody">
                    <Card.Title>{props.titre}</Card.Title>
                    <Button variant="primary2">Voir</Button>
                </Card.Body>
        </Card>
    </>
    )
}

export default ElementCard;