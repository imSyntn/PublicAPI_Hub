import React from 'react'
import '../Styles/HeroSection.scss'
import '../Styles/Misc.scss'

const HeroSection = ({theme}) => {

    return (
        <>
        <div className="heroSection">
            <h1 className={!theme ? 'h1InLightMode' : 'h1InDarkMode'}>Explore</h1>
            <p className={!theme ? '' : 'textInDarkMode'}>More than 1400+ public APIs to power-up your Project.</p>
        </div>
        </>
    )
}

export default HeroSection