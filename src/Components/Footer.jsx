import React from 'react'
import '../Styles/Footer.scss'
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Player } from '@lottiefiles/react-lottie-player';
import LogoJson from '../Assets/logo.json'

const Footer = () => {
  return (
    <footer>
      <div className="logoImg">
        {/* <img src={img} alt="" /> */}
        <Player src={LogoJson} autoplay loop style={{width: '80px'}} />
        <h1>PublicAPI Hub</h1>
      </div>
      <div className="icons">
        <a href="/" target='_blank'><FaGithub /></a>
        <a href="/" target='_blank'><FaXTwitter /></a>
      </div>
    </footer>
  )
}

export default Footer