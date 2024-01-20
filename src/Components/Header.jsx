import React, { useContext, useEffect } from 'react'
import '../Styles/Header.scss'
import '../Styles/Misc.scss'
import { ThemeContext } from '../App'
// import logo from '../Assets/public-removebg-preview.png'
import LogoJson from '../Assets/logo.json'

// import { DotLottiePlayer, Controls } from "@dotlottie/react-player";
// // import anim from '../Assets/Animation - 1705755015252.lottie'
// import "@dotlottie/react-player/dist/index.css";


import Button from './Button'
import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi2";
import { Player } from '@lottiefiles/react-lottie-player'


const Header = () => {

    const { currentTheme, setCurrentTheme } = useContext(ThemeContext)

    return (
        <header className={currentTheme.lightMode ? 'headerInLightMode' : 'headerInDarkMode'}>
            <div className="logo">
                {/* <img src={logo} alt="logo" /> */}
                <Player src={LogoJson} autoplay loop style={{width: '40px'}} />
                {/* <DotLottiePlayer src="../Assets/Animation - 1705755015252.lottie" autoplay loop /> */}
                <p className={currentTheme.lightMode ? '' : 'textInDarkMode'}>PublicAPI_Hub</p>
            </div>
            {/* <div className='headerMiddle'>
                <a href="/" className={currentTheme.lightMode? '' : 'textInDarkMode'}>Home</a>
                <a href="/" className={currentTheme.lightMode? '' : 'textInDarkMode'}>Explore</a>
            </div> */}
            <div className="btns">
                <div className="themeSwitcher">
                    <HiSun onClick={() => {
                        setCurrentTheme({
                            lightMode: true,
                            darkMode: false,
                        });
                        localStorage.setItem('lightMode', 'true')
                    }} className={currentTheme.lightMode ? 'sunInDarkMode' : ''} />
                    <HiMoon onClick={() => {
                        setCurrentTheme({
                            lightMode: false,
                            darkMode: true,
                        })
                        localStorage.setItem('lightMode', 'false')
                    }} className={currentTheme.darkMode ? 'moonInDarkMode' : ''} />
                </div>
                <Button text={'Login'} animation={true} />
            </div>
        </header>
    )
}

export default Header