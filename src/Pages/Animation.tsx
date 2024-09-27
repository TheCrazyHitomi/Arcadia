import React from "react";
import Hero from "../assets/components/hero/hero";
import Intro from "../assets/components/intro/intro";
import VisitAnim from "../assets/components/visit/visit";
import Contact from "../assets/components/contact/contact";

const Animation: React.FC =() =>{
    return(
        <>
            <Hero/>
            <Intro/>
            <VisitAnim/>
            <Contact/>
        </>
    )
}

export default Animation; 