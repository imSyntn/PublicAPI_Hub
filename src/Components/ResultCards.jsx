import React, { useContext } from 'react'
import '../Styles/ResultCards.scss'
import '../Styles/Misc.scss'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { ThemeContext } from '../App'
import img from '../Assets/public-removebg-preview.png'
import { MdOutlineVpnKey } from "react-icons/md";
import { MdOutlineVpnKeyOff } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import { TbShare } from "react-icons/tb";
import { TbShareOff } from "react-icons/tb";
import { IoArrowForward } from "react-icons/io5";

const ResultCards = ({name,auth,Cors,desc,https,link}) => {

  const { currentTheme } = useContext(ThemeContext)

  return (
    <div className={`ResultCards ${currentTheme.lightMode ? 'cardInLight' : 'cardInDark'}`}>
      <div className="logoImg">
        <img src={img} alt="" />
        <h2>{name || <Skeleton style={{
          width: '210px',
          height: '30px'
        }} />}</h2>
      </div>
      <p>{desc || <Skeleton count={2} />}</p>
      <div className="options">
        <div className="auth cardSvgDiv"><MdOutlineVpnKey /> <span>{auth}</span></div>
        <div className="cors cardSvgDiv"><TbShare /> <span>{Cors}</span></div>
        <div className="https cardSvgDiv">{https? <FaLock /> : <FaLockOpen />} <span>HTTPS</span></div>
        <a href={link} target='_blank' className="link cardSvgDiv"><span>Link </span><IoArrowForward /></a>
      </div>
    </div>
  )
}

export default ResultCards