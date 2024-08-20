import React from "react";
import Hero from "../assets/components/hero/hero";
import Intro from "../assets/components/intro/intro";
import VisitAnim from "../assets/components/visit/visit";

const Home: React.FC =() =>{
    return(
        <>
            <Hero/>
            <Intro/>
            <VisitAnim/>
        </>
    )
}

export default Home; 