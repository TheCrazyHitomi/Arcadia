import React from "react";


const Intro: React.FC =() =>{

    return (
        <>
            <div className="intro">

                <div className="introText">
                <h2> Qui sommes nous...</h2>
                    <br />
                    <h3>Arcadia a ouvert ses portes en 1960 après plus de 3 ans de conception et 
                        deux années de travaux, ne cessant de mettre l’accent sur le bien-être de 
                        ses occupants. 
                        <br />
                        <br />

                        Vous embarquerez pour une balade dépaysante aux abords de la forêt de Brocéliande, 
                        au milieu d’une flore luxuriante. Vous voyagerez à la rencontre d’espèces animales 
                        exotiques et rares comme le tapir malais, le lion d’Asie, 
                        le panda roux, la loutre cendrée, le pélican frisé 
                        ou l’ours malais…
                        <br />
                        <br />

                        Pour les plus curieux, des panneaux pédagogiques et 
                        des rendez-vous animaliers permettront de mieux 
                        connaitre ces animaux de l’autre bout du monde.
                        <br />
                        <br />

                        Votre visite se terminera par la découverte d’un sentier 
                        ludo-pédagogique qui met l’accent sur nos forêts 
                        européennes. Un parcours d’obstacles, des pupitres 
                        avec empreintes, des bornes questions-réponses 
                        agrémentent ce parcours. </h3>
                </div>

                <img className="introPic" src="./image/vecteezy_ai-generated-yoga-advertisment-background-with-copy-space_37248635.jpg" alt="chariots petit train rouge"/>
            </div>
        </>
    )
}

export default Intro;