import React, { useContext } from 'react'
import '../Styles/Heart.scss'
import '../Styles/Misc.scss'
import { ThemeContext } from '../App';
import { FaHeart } from "react-icons/fa";

const Heart = () => {

    const { currentTheme } = useContext(ThemeContext)

    return (
        <div className={`Heart ${currentTheme.lightMode? 'lightHeart' : 'darkHeart'}`}>
            <FaHeart />
        </div>
    )
}

export default Heart