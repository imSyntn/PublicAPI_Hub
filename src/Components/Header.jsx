import React, { useContext, useEffect } from 'react'
import '../Styles/Header.scss'
import '../Styles/Misc.scss'
import { ThemeContext } from '../App'
import LogoAnimation from './LogoAnimation'
import Button from './Button'
import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi2";
import { useCallback } from 'react'


const Header = () => {

    const { currentTheme, setCurrentTheme } = useContext(ThemeContext)
    
const handleSunClick = useCallback(() => {
    setCurrentTheme({
        lightMode: true,
        darkMode: false,
    });
    localStorage.setItem('lightMode', 'true')
}, [])

const handleMoonClick = useCallback(() => {
    setCurrentTheme({
        lightMode: false,
        darkMode: true,
    })
    localStorage.setItem('lightMode', 'false')
}, [])

    return (
        <header className={currentTheme.lightMode ? 'headerInLightMode' : 'headerInDarkMode'}>
            <div className="logo">
                <LogoAnimation style={{ width: '40px' }} />
                <p className={currentTheme.lightMode ? '' : 'textInDarkMode'}>PublicAPI_Hub</p>
            </div>
            <div className="btns">
                <div className="themeSwitcher">
                    <HiSun onClick={handleSunClick} className={currentTheme.lightMode ? 'sunInDarkMode' : ''} />
                    <HiMoon onClick={handleMoonClick} className={currentTheme.darkMode ? 'moonInDarkMode' : ''} />
                </div>
                <Button text={'Login'} animation={true} />
            </div>
        </header>
    )
}

export default Header