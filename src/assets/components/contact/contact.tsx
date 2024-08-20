import React from "react";
import ContactForm from "../contact/contactForm";

const Contact: React.FC = () =>{
    return(
        <>
        <div className="contact">
            <div className="infoContact">
                <div className="infoDiv">
                    <h2>Adresse :</h2>
                    <h3> bla Bla bla <br /> 
                    gnvlkdfsl.cmckdos <br />
                    bloubloublou
                    </h3>
                </div>
                <div className="infoDiv">
                    <h2>Téléphone :</h2>
                    <h3> bla Bla bla </h3>
                    <h2>E-mail : </h2>
                    <h3>gnvlkdfsl.cmckdos@vkdlf.fr</h3>
                </div>
            </div>
            <ContactForm/>
        </div>
        </>
    )
}
export default Contact;