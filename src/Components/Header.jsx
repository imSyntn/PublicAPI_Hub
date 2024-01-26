import React, { useContext, useCallback, memo } from 'react'
import '../Styles/Header.scss'
import '../Styles/Misc.scss'
import { ThemeContext } from '../App'
import HeaderBtn from './HeaderBtn'
import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa"

const Header = () => {

    const { darkMode, setDarkMode } = useContext(ThemeContext)

    const redirectToGithub = useCallback(() => {
        window.open('https://github.com/imSyntn/publicAPIs-API', '_blank')
    }, [])

    const reloadPage = useCallback(()=> {
        location.reload()
    }, [])

    const handleSunClick = useCallback(() => {
        setDarkMode(false)
        localStorage.setItem('darkMode', 'false')
    }, [])

    const handleMoonClick = useCallback(() => {
        setDarkMode(true)
        localStorage.setItem('darkMode', 'true')
    }, [])

    return (
        <header className={darkMode ? 'headerInDarkMode' : 'headerInLightMode'}>
            <div className="logo" onClick={reloadPage} role='button'>
                <p className={!darkMode ? 'textInWhiteMode' : 'textInDarkMode'}>PublicAPI_Hub</p>
            </div>
            <div className="btns">
                <div className="themeSwitcher">
                    <HiSun onClick={handleSunClick} className={!darkMode ? 'sunInDarkMode' : ''} />
                    <HiMoon onClick={handleMoonClick} className={darkMode ? 'moonInDarkMode' : ''} />
                </div>
                <HeaderBtn Icon={FaGithub} text={'Add API'} borderAnimation={true} clickEvent={redirectToGithub} />
            </div>
        </header>
    )
}

export default Header