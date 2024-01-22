import React, { useCallback, useContext, useEffect, useState } from 'react'
import '../Styles/ResultSection.scss'
import { ThemeContext } from '../App'
import { searchContext } from '../App';
import { SkeletonTheme } from 'react-loading-skeleton';
import useFetch from '../Hook/useFetch';
import ResultCards from './ResultCards'
import { memo } from 'react';
import { Player } from '@lottiefiles/react-lottie-player'
import Lottie from '../Assets/i4oN6ZPh0l.json'

const ResultSection = () => {

  const { darkMode, setDarkMode } = useContext(ThemeContext)
  const { searchIt, setSearchIt } = useContext(searchContext)

  const { data, loading } = useFetch(searchIt);

  return (
    <div className='ResultSection'>
      <h1>{searchIt.name? searchIt.name : "Random"}</h1>
      <div className="results">
        <SkeletonTheme baseColor={!darkMode ? "#eaeaf4" : "#202020"} highlightColor={!darkMode ? "white" : "#444"}>
          {
            loading ? (
              new Array(10).fill('').map((a, i) => (<ResultCards key={i} />))
            ) : (
              data.length > 1 ? (
                data.map((item, i) => (
                  <ResultCards key={i} name={item.API} auth={item.Auth} Cors={item.Cors} desc={item.Description} https={item.HTTPS} link={item.Link} />
                ))
              ) : (
                <Player src={Lottie} loop autoplay />
              )
            )
          }
        </SkeletonTheme>

      </div>
    </div>
  )
}

export default memo(ResultSection)