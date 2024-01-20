import React, {useRef} from 'react'
import '../Styles/Heart.scss'
import { Player } from '@lottiefiles/react-lottie-player'
import heart from '../Assets/heart.json'
import circle from '../Assets/circle.json'

const Heart = () => {

    const playerRef = useRef(null)

    const handlePlay = () => {
        playerRef.current.play()
    }

    return (
        <div className="Heart" onClick={handlePlay}>
            <Player src={circle} className='crcl' style={{width: '100px'}} autoplay loop />
            <Player src={heart} className='hrt' autoplay style={{width: '100px'}} loop ref={playerRef} />
        </div>
    )
}

export default Heart