import React, { useContext, useEffect } from 'react'
import '../Styles/Header.scss'
import '../Styles/Misc.scss'
import { ThemeContext } from '../App'
import logo from '../Assets/public-removebg-preview.png'
import Button from './Button'
import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi2";


const Header = () => {

    const { currentTheme, setCurrentTheme } = useContext(ThemeContext)

    return (
        <header className={currentTheme.lightMode ? 'headerInLightMode' : 'headerInDarkMode'}>
            <div className="logo">
                <img src={logo} alt="logo" />
                <p className={currentTheme.lightMode ? '' : 'textInDarkMode'}>PublicAPI_Hub</p>
            </div>
            {/* <div className='headerMiddle'>
                <a href="/" className={currentTheme.lightMode? '' : 'textInDarkMode'}>Home</a>
                <a href="/" className={currentTheme.lightMode? '' : 'textInDarkMode'}>Explore</a>
            </div> */}
            <div className="btns">
                <div className="themeSwitcher">
                    <HiSun onClick={() => setCurrentTheme({
                        lightMode: true,
                        darkMode: false,
                    })} className={currentTheme.lightMode ? 'sunInDarkMode' : ''} />
                    <HiMoon onClick={() => setCurrentTheme({
                        lightMode: false,
                        darkMode: true,
                    })} className={currentTheme.darkMode ? 'moonInDarkMode' : ''} />
                </div>
                <Button text={'Login'} />
            </div>
        </header>
    )
}

export default Header