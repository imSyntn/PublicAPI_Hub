import React from 'react'
import '../Styles/Button.scss'
import '../Styles/Misc.scss'

const Button = ({ Icon, text, clickEvent }) => {
  return (
    <button className='Button LightBtn' onClick={clickEvent}>
      {Icon && <Icon />}
      {text && <p>{text}</p>}
    </button>
  )
}

export default Button