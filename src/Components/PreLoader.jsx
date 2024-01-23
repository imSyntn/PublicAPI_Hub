import React from 'react'
import '../Styles/PreLoader.scss'
import '../Styles/Misc.scss'
import { Player } from '@lottiefiles/react-lottie-player'
import Logo from '../Assets/logo.json'

const PreLoader = ({theme}) => {

  return (
    <div className={`PreLoader ${!theme ? 'lightContainer' : 'darkContainer'}`}>
        <Player src={Logo} style={{width: '250px'}} autoplay loop />
    </div>
  )
}

export default PreLoader