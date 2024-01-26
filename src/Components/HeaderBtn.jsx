import React, { memo, useContext } from 'react'
import '../Styles/Button.scss'
import '../Styles/Misc.scss'
import { ThemeContext } from '../App'

const Button = memo(({ Icon, text, clickEvent, borderAnimation }) => {

  const { darkMode } = useContext(ThemeContext)

  return (
    <div className={borderAnimation && 'btnBorderAnimation'}>
      <button className={`Button ${!darkMode && 'LightBtn'}`} onClick={clickEvent}>
        {Icon && <Icon style={borderAnimation?  darkMode ? {fill: 'white'} : {fill: 'black'} : {fill: 'gray'}} />}
        {text && <p style={darkMode ? {color: 'white'} : {color: 'black'}}>{text}</p>}
      </button>
    </div>
  )
})

export default Button