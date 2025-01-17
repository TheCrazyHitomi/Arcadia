import React from "react";

const HeroVideo: React.FC = () =>{
    return(
        <video autoPlay muted loop width="100%">
            <source src="./image/Arcadia1.mp4" type="video/mp4"/>
        </video>
    )
}

export default HeroVideo;
