import React, { memo } from 'react'
import '../Styles/Footer.scss'
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import LogoAnimation from './LogoAnimation'

const Footer = ({theme}) => {
  return (
    <footer>
      <div className="logoImg">
        <LogoAnimation style={{ width: '80px' }} />
        <h1>PublicAPI_Hub</h1>
      </div>
      <div className="icons">
        <div className="links">
          <a href="https://github.com/imSyntn/PublicAPI_Hub" target='_blank'><FaGithub style={{ fill: 'gray' }} /></a>
          <a href="https://twitter.com/" target='_blank'><FaXTwitter /></a>
        </div>
        <p>Website by <a target='_blank' style={theme ? {color: 'white'} : {color: 'black',fontWeight: 500}} href="https://twitter.com/imSyntn">@imSyntn</a></p>
      </div>
    </footer>
  )
}

export default memo(Footer)