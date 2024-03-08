import React from 'react'
import '../Styles/Footer.scss'
import { SiGithub } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const Footer = ({theme}) => {
  return (
    <footer>
      <div className="logoImg">
        <h1>PublicAPI_Hub</h1>
      </div>
      <div className="icons">
        <div className="links">
          <a href="https://github.com/imSyntn/PublicAPI_Hub" target='_blank'><SiGithub className={theme ?'white' :'black'} /></a>
          <a href="https://twitter.com/PublicAPI_Hub" target='_blank'><FaXTwitter className={theme ?'white' :'black'} /></a>
          <a href="https://github.com/sponsors/imSyntn" target='_blank'><FaRegHeart className='heart' /></a>
        </div>
        <p>Website by <a target='_blank' style={theme ? {color: 'white'} : {color: 'black',fontWeight: 600}} href="https://twitter.com/imSyntn">@imSyntn</a></p>
      </div>
    </footer>
  )
}

export default Footer