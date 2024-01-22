import React, { useContext, useEffect, useCallback } from 'react'
import '../Styles/Header.scss'
import '../Styles/Misc.scss'
import { ThemeContext } from '../App'
import LogoAnimation from './LogoAnimation'
import HeaderBtn from './HeaderBtn'
import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi2";
// import { useCallback } from 'react'


const Header = () => {

    const { darkMode, setDarkMode } = useContext(ThemeContext)
    
const handleSunClick = useCallback(() => {
    setDarkMode(false)
    // localStorage.setItem('lightMode', 'true')
}, [])

const handleMoonClick = useCallback(() => {
    setDarkMode(true)
    // localStorage.setItem('lightMode', 'false')
}, [])

    return (
        <header className={darkMode ? 'headerInDarkMode' : 'headerInLightMode'}>
            <div className="logo">
                <LogoAnimation style={{ width: '40px' }} />
                <p className={!darkMode ? '' : 'textInDarkMode'}>PublicAPI_Hub</p>
            </div>
            <div className="btns">
                <div className="themeSwitcher">
                    <HiSun onClick={handleSunClick} className={!darkMode ? 'sunInDarkMode' : ''} />
                    <HiMoon onClick={handleMoonClick} className={darkMode ? 'moonInDarkMode' : ''} />
                </div>
                <HeaderBtn text={'Login'} borderAnimation={true} />
            </div>
        </header>
    )
}

export default Header