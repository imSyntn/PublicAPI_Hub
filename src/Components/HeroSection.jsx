import React, { memo, useEffect, useState, useCallback } from 'react'
import '../Styles/HeroSection.scss'
import '../Styles/Misc.scss'

const HeroSection = memo(({ theme }) => {
    const [text, setText] = useState([])
    const splitText = 'More than 1400+ public APIs to power-up your Project.'.split('');

    useEffect(()=>{
        const txtAnimateStart = async () => {
            for(let i = 0; i<splitText.length; i++){
                await new Promise(resolve => setTimeout(resolve,50))
                    setText((prev)=> [...prev, splitText[i]])
            }
        }
        txtAnimateStart()
    },[])

    return (
        <div className="heroSection">
            <h1>Explore</h1>
            <p className={!theme ? '' : 'textInDarkMode'}>{text.join('')}</p>
        </div>
    )
})

export default HeroSection