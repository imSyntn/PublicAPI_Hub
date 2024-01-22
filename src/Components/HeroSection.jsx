import React, { useContext } from 'react'
import '../Styles/HeroSection.scss'
import '../Styles/Misc.scss'
import { ThemeContext } from '../App'

const HeroSection = () => {

    const { darkMode } = useContext(ThemeContext)

    return (
        <>
        <div className="heroSection">
            <h1 className={!darkMode ? 'h1InLightMode' : 'h1InDarkMode'}>Explore</h1>
            <p className={!darkMode ? '' : 'textInDarkMode'}>More than 1400+ public APIs to power-up your Project.</p>
        </div>
        </>
    )
}

export default HeroSection