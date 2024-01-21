import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import LogoJson from '../Assets/logo.json'
import { memo } from 'react'

const LogoAnimation = ({style}) => {
  return (
    <Player src={LogoJson} autoplay loop style={style} />
  )
}

export default memo(LogoAnimation)