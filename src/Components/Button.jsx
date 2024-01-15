import React from 'react'
import '../Styles/Button.scss'
import '../Styles/Misc.scss'

const Button = ({ Icon, text }) => {
  return (
    <button className='Button LightBtn'>
      {Icon && <Icon />}
      {text && <p>{text}</p>}
    </button>
  )
}

export default Button