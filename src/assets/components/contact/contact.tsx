import React from "react";
import ContactForm from "../contact/contactForm";

const Contact: React.FC = () =>{
    return(
        <>
        <div className="contact">
            <div className="infoContact">
                <div className="infoDiv">
                    <h2>Adresse :</h2>
                    <h3> Arcadia <br /> 
                    Zoo de la forêt de Broceliande <br />
                    35380 Paimpont
                    </h3>
                </div>
                <div className="infoDiv">
                    <h2>Téléphone :</h2>
                    <h3> 08.74.12.27.69 </h3>
                    <h2>E-mail : </h2>
                    <h3>contact@arcadia.fr</h3>
                </div>
            </div>
            <ContactForm/>
        </div>
        </>
    )
}
export default Contact;