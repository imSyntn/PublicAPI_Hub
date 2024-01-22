import React, {useContext} from 'react'
import '../Styles/Footer.scss'
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import LogoAnimation from './LogoAnimation'

const Footer = () => {
  return (
    <footer>
      <div className="logoImg">
        <LogoAnimation style={{width: '80px'}} />
        <h1>PublicAPI_Hub</h1>
      </div>
      <div className="icons">
        <a href="https://github.com/imSyntn/PublicAPI_Hub" target='_blank'><FaGithub style={{fill: 'gray'}} /></a>
        <a href="https://twitter.com/" target='_blank'><FaXTwitter /></a>
      </div>
    </footer>
  )
}

export default Footer