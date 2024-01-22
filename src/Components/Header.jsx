import React, { useContext, useCallback } from 'react'
import '../Styles/Header.scss'
import '../Styles/Misc.scss'
import { ThemeContext } from '../App'
import LogoAnimation from './LogoAnimation'
import HeaderBtn from './HeaderBtn'
import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa"

const Header = () => {

    const { darkMode, setDarkMode } = useContext(ThemeContext)

    const redirectToGithub = useCallback(()=>{
        window.open('https://github.com/imSyntn/PublicAPI_Hub', '_blank')
    },[])
    
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
                {/* <Player src={Heart} autoplay loop /> */}
                <HeaderBtn Icon={FaGithub} text={'Add API'} borderAnimation={true} clickEvent={redirectToGithub} />
            </div>
        </header>
    )
}

export default Header