import React, { useState, ChangeEvent, FormEvent } from "react";
import { Outlet, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import NewsletterIcon from "../../../../public/image/SVG/newsletterIcon";

// Déclaration du composant Newsletter avec le typage approprié
const Newsletter: React.FC = () => {
    // Déclaration des états avec les types appropriés
    const [email, setEmail] = useState<string>("");
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

    // Fonction pour gérer les changements dans le champ de saisie
    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Validation simple de l'email
        if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
            setIsEmailValid(false);
        } else {
            setIsEmailValid(true);
            alert(`Thank you for subscribing with ${email}`);
            setEmail("");
        }
    };

    return (
        <>
            <div className="newsletter">
                <form onSubmit={handleSubmit}>
                    <h3>Inscrivez-vous à la newsletter !</h3>
                    <div className="NewsInput">
                        <input
                            type="email"
                            placeholder="jean-eude_kapouay@mail.com"
                            value={email}
                            onChange={handleInput}
                            style={{
                                width: "80%",
                                height: "2rem",
                                padding: "10px",
                                fontSize: "12px",
                                border: "2px solid #ddd",
                                borderRadius: "5px",
                            }}
                        />
                        <Button className="infoButton" variant="warning" type="submit">
                            <NewsletterIcon/>
                        </Button>
                    </div>
                </form>
                <div>{!isEmailValid ? <p>Please enter a valid email address</p> : null}</div>
                <div className="DevTeam">
                    <p>Site créé par </p>
                    <Link to="DevSoft" className="devSoft">DevSoft</Link>
                </div>
                <Outlet />
            </div>
        </>
    );
};

export default Newsletter;
