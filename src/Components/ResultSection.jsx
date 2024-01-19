import React, { useContext, useEffect, useState } from 'react'
import '../Styles/ResultSection.scss'
import ResultCards from './ResultCards'
import { SearchContext } from '../App'
import { ThemeContext } from '../App'
import { SkeletonTheme } from 'react-loading-skeleton';
import { Player } from '@lottiefiles/react-lottie-player'
import Lottie from '../Assets/i4oN6ZPh0l.json'

const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const ResultSection = () => {

  const { currentTheme } = useContext(ThemeContext)
  const { searchThis, fetchedData, setFetchedData } = useContext(SearchContext)

  useEffect(() => {
    setFetchedData(false)
    searchThis.catagorySearch && (
      fetch(`https://public-apis-api-seven.vercel.app/catagories/${searchThis.catagorySearch}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => res.json())
        .then(data => setFetchedData(data))
        .catch(e => console.log(e))
    ) 
  }, [searchThis.catagorySearch])

  return (
    <div className='ResultSection'>
      <h1>{searchThis.catagorySearch ? searchThis.catagorySearch : (searchThis.inputSearch ? searchThis.inputSearch : "Random")}</h1>
      <div className="results">
        <SkeletonTheme baseColor={currentTheme.lightMode ? "#eaeaf4" : "#202020"} highlightColor={currentTheme.lightMode ? "white" : "#444"}>
          {
            fetchedData ? (
              fetchedData.length > 1 ? (
                fetchedData.map((item, i) => (
                  <ResultCards key={i} name={item.API} auth={item.Auth} Cors={item.Cors} desc={item.Description} https={item.HTTPS} link={item.Link} />
                ))
              ) : (
                <Player src={Lottie} loop autoplay />
              )
            ) : (
              arr.map((a, i) => (
                <ResultCards key={i} />
              ))
            )
          }
        </SkeletonTheme>

      </div>
    </div>
  )
}

export default ResultSection