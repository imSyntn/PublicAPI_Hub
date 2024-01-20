import React, { useContext } from 'react'
import '../Styles/HeroSection.scss'
import '../Styles/Misc.scss'
import { ThemeContext } from '../App'

const HeroSection = () => {

    const { currentTheme } = useContext(ThemeContext)

    return (
        <>
        <div className="heroSection">
            <h1 className={currentTheme.lightMode ? 'h1InLightMode' : 'h1InDarkMode'}>Explore</h1>
            <p className={currentTheme.lightMode ? '' : 'textInDarkMode'}>More than 1400+ public APIs to power-up your Project.</p>
        </div>
        {/* <div className="heroSectionOverlay">

        </div> */}
        </>
    )
}

export default HeroSection