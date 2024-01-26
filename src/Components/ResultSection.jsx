import React, { lazy, Suspense, useContext, useEffect, useState } from 'react'
import '../Styles/ResultSection.scss'
import '../Styles/Misc.scss'
import { ThemeContext } from '../App'
import { searchContext } from '../App';
import { SkeletonTheme } from 'react-loading-skeleton';
import useFetch from '../Hook/useFetch';
import ResultCards from './ResultCards'
const NotFound = lazy(()=> import('./NotFound'))

const ResultSection = () => {

  const { darkMode } = useContext(ThemeContext)
  const { searchIt } = useContext(searchContext)
  const { data, loading } = useFetch(searchIt);
  const[currentPage, setCurrentPage] = useState(1)
  const[postPerPage, setPostPerPage] = useState(10)
  let pageIndex = []

  const lastIndex = postPerPage * currentPage;
  const firstIndex = lastIndex - postPerPage;
  const totalPages = Math.ceil(data.length / postPerPage)
  const currentPageData = data.slice(firstIndex, lastIndex)

  for (let i = 1; i<= totalPages; i++) {
    pageIndex.push(i)
  }

  useEffect(()=>{
    setCurrentPage(1)
  },[data])

  return (
    <div className={`ResultSection ${darkMode ? 'darkContainer' : 'lightContainer'}`}>
      <h1>{searchIt.name? searchIt.name : "Random"}</h1>
      <div className="results">
        <SkeletonTheme baseColor={!darkMode ? "#eaeaf4" : "#202020"} highlightColor={!darkMode ? "white" : "#444"}>
          {
            loading ? (
              new Array(10).fill('').map((a, i) => (<ResultCards key={i} />))
            ) : (
              data.length > 0 ? (
                currentPageData.map((item, i) => (
                  <ResultCards key={i} name={item.API} auth={item.Auth} Cors={item.Cors} desc={item.Description} https={item.HTTPS} link={item.Link} />
                ))
              ) : (
                <Suspense><NotFound /></Suspense>
              )
            )
          }
        </SkeletonTheme>
        <div className="paginationDiv">
          {
            pageIndex.map((i)=> (
              <div className={`box ${currentPage === i && 'glow'}`} key={i} onClick={()=> setCurrentPage(i)}></div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ResultSection