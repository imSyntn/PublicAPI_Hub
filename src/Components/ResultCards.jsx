import React, { useContext } from 'react'
import '../Styles/ResultCards.scss'
import '../Styles/Misc.scss'
import { ThemeContext } from '../App'
import img from '../Assets/public-removebg-preview.png'

const ResultCards = () => {

  const { currentTheme } = useContext(ThemeContext)

  return (
    <div className={`ResultCards ${currentTheme.lightMode ? 'cardInLight' : 'cardInDark'}`}>
      <div className="logoImg">
        <img src={img} alt="" />
        <h2>Email Varification</h2>
      </div>
      <p>Detect Invalid, Spam and Junk email id with our powerful SMTP and DNS based email verification API</p>
    </div>
  )
}

export default ResultCards