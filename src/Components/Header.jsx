import React, { useContext, useCallback, memo, useState } from 'react'
import '../Styles/Header.scss'
import '../Styles/Misc.scss'
import { ThemeContext } from '../App'
import HeaderBtn from './HeaderBtn'
import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa"

const Header = memo(() => {

    const { darkMode, setDarkMode } = useContext(ThemeContext)
    const [visible, setVisible] = useState(false)

    const handleSunClick = useCallback(() => {
        setDarkMode(false)
        localStorage.setItem('darkMode', 'false')
    }, [])

    const handleMoonClick = useCallback(() => {
        setDarkMode(true)
        localStorage.setItem('darkMode', 'true')
    }, [])

    return (
        <>
            <header className={darkMode ? 'headerInDarkMode' : 'headerInLightMode'}>
                <div className="logo" onClick={() =>location.reload()} role='button'>
                    <p className={!darkMode ? 'textInWhiteMode' : 'textInDarkMode'}>PublicAPI_Hub</p>
                </div>
                <div className="btns">
                    <div className="themeSwitcher">
                        <HiSun onClick={handleSunClick} className={!darkMode ? 'sunInDarkMode' : ''} />
                        <HiMoon onClick={handleMoonClick} className={darkMode ? 'moonInDarkMode' : ''} />
                    </div>
                    <HeaderBtn Icon={FaGithub} ID={`contribute`} text={'Contribute'} borderAnimation={true} clickEvent={() => setVisible(true)} />
                </div>
            </header>
            <div className={`contribute ${visible && 'visible'}`} onClick={() => setVisible(false)}>
                <div>
                    <HeaderBtn text={'Frontend'} borderAnimation={true} clickEvent={()=>window.open('https://github.com/imSyntn/PublicAPI_Hub', '_blank')} />
                    <HeaderBtn text={'Backend'} borderAnimation={true} clickEvent={()=>window.open('https://github.com/imSyntn/PublicAPI_Hub_API', '_blank')} />
                </div>
            </div>
        </>
    )
})

export default Header