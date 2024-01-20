import React, {useEffect} from 'react'
import '../Styles/PreLoader.scss'
import '../Styles/Misc.scss'
import { Player } from '@lottiefiles/react-lottie-player'
import Logo from '../Assets/logo.json'

const PreLoader = ({theme}) => {

    useEffect(()=>{
        window.addEventListener('load', ()=> {
            document.querySelector('.Preloader').style.display = 'none';
        })
    },[])

  return (
    <div className={`PreLoader ${theme ? 'lightContainer' : 'darkContainer'}`}>
        <Player src={Logo} style={{width: '250px'}} autoplay loop />
    </div>
  )
}

export default PreLoader