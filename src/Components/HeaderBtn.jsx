import React, { memo, useContext } from 'react'
import '../Styles/Button.scss'
import '../Styles/Misc.scss'
// import { showCatagoryContext } from '../App'
import { ThemeContext } from '../App'
// import { RxCross1 } from "react-icons/rx";

const Button = ({ Icon, text, clickEvent, borderAnimation }) => {

  const { darkMode, setDarkMode } = useContext(ThemeContext)
  // const { showCatagory } = useContext(showCatagoryContext)

  return (
    <div className={borderAnimation && 'btnBorderAnimation'}>
      <button className={`Button ${!darkMode && 'LightBtn'}`} onClick={clickEvent}>
        {Icon && <Icon />}
        {text && <p>{text}</p>}
      </button>
    </div>
  )
}

export default memo(Button)