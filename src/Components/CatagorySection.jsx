import React, { useContext, useEffect, useState } from 'react'
import '../Styles/CatagorySection.scss'
import { showCatagoryContext } from '../App'
import { ThemeContext } from '../App'
import { SearchContext } from '../App'

const a = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const CatagorySection = () => {

  const { showCatagory } = useContext(showCatagoryContext)
  const { currentTheme } = useContext(ThemeContext)
  const [catagories, setCatagories] = useState([])
  const { setSearchThis } = useContext(SearchContext)

  useEffect(() => {
    if (catagories.length === 0) {
      fetch('https://public-apis-api-seven.vercel.app/catagories', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
      })
        .then(res => res.json())
        .then(data =>
          setCatagories(data.entries)
          // console.log(data)
        )
        .catch(e => console.log(e))
    }
  }, [])

  return (
    // <div className="overflow">
    <div className={`CatagorySection ${showCatagory ? 'visibleCatagory' : 'hiddenCatagory'} ${currentTheme.lightMode ? 'catagoryInLight' : 'catagoryInDark'}`}>
      <h2>Catagories</h2>
      <div className="catagory-data">
        {
          catagories.map((item, i) => (
            <p key={i} className='selected' onClick={() => setSearchThis({
              catagorySearch: item.name,
              inputSearch: false,
            })}>{item.name}</p>
          ))
        }
      </div>
    </div>
  )
}

export default CatagorySection