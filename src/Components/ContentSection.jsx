import React, { useContext } from 'react'
import '../Styles/ContentSection.scss'
import '../Styles/Misc.scss'
import { ThemeContext } from '../App'
import Button from './Button'
import { ImSearch } from "react-icons/im";

const ContentSection = () => {

    const { currentTheme } = useContext(ThemeContext)

    return (
        <div className='ContentSection'>
            <div className="heroSection">
                <h1 className={currentTheme.lightMode ? '' : 'textInDarkMode'}>Explore</h1>
                <p className={currentTheme.lightMode ? '' : 'textInDarkMode'}>More than 1400+ public APIs to power-up your Project.</p>
            </div>
            <div className="searchingContainer">
                <div className="srch">
                    <input type="text" />
                    <Button Icon={ImSearch} />
                </div>
                <Button text={'Catagories'} />
            </div>
        </div>
    )
}

export default ContentSection