import React from "react";
import Hero from "../assets/components/hero/hero";
import Intro from "../assets/components/intro/intro";
import VisitAnim from "../assets/components/visit/visit";
import FrontCards from "../assets/components/frontCards/frontCards";
import AllOverCards from "../assets/components/mainCards/allOverCards";
import Contact from "../assets/components/contact/contact";

const Home: React.FC =() =>{
    return(
        <>
            <Hero/>
            <Intro/>
            <VisitAnim/>
            <FrontCards/>
            <AllOverCards/>
            <Contact/>
        </>
    )
}

export default Home; 