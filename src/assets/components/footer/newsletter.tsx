import React, { useState, ChangeEvent, FormEvent } from "react";
import { Outlet, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

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
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-paper-heart" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.133l.941.502A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765L2 3.133zm0 2.267-.47.25A1 1 0 0 0 1 5.4v.817l1 .6zm1 3.15 3.75 2.25L8 8.917l1.25.75L13 7.417V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zm11-.6 1-.6V5.4a1 1 0 0 0-.53-.882L14 4.267zM8 2.982C9.664 1.309 13.825 4.236 8 8 2.175 4.236 6.336 1.31 8 2.982m7 4.401-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734Z"/>
                            </svg>
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
