import React from 'react';
import HeroVideo from './heroVideo';
import HeroTitle from './heroTitle';


const Hero: React.FC =() =>{

    return(
        <>
        <div className='hero'>
        <HeroTitle/>
        <HeroVideo/>
        </div>
        </>
    )
}

export default Hero;