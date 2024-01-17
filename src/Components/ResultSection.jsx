import React, { useContext, useEffect, useState } from 'react'
import '../Styles/ResultSection.scss'
import ResultCards from './ResultCards'
import { catagorySearchContext } from '../App'
import { SkeletonTheme } from 'react-loading-skeleton';

const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const ResultSection = () => {

  const { searchThis, setSearchThis,fetchedData, setFetchedData } = useContext(catagorySearchContext)
  // const [fetchedData, setFetchedData] = useState(false)

  useEffect(() => {
    setFetchedData(false)
    searchThis && (
      fetch(`https://public-apis-api-seven.vercel.app/catagories/${searchThis}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        return setFetchedData(data)
      })
      .catch(e => console.log(e))
    )
    // // console.log(searchThis)
    // setFetchedData([])
    // const response = useSearch(searchThis)
    // // console.log('response', response)
    // setFetchedData(response)
    // console.log('fetch', fetchedData)    
  }, [searchThis])

  return (
    <div className='ResultSection'>
      <h1>{searchThis ? searchThis : "Random"}</h1>
      <div className="results">
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          {
            fetchedData ? (
              fetchedData.map((item, i) => (
                <ResultCards key={i} name={item.API} auth={item.Auth} Cors={item.Cors} desc={item.Description} https={item.HTTPS} link={item.Link} />
              ))
            ) : (
              arr.map((a,i)=> (
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