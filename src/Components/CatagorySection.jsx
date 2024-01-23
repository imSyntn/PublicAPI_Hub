import React, { memo, useContext, useEffect, useState } from 'react'
import '../Styles/CatagorySection.scss'
import { ThemeContext } from '../App'
import { showCatagoryContext } from '../App'
import { searchContext } from '../App';
import useFetch from '../Hook/useFetch'


const CatagorySection = () => {

  const { searchIt, setSearchIt } = useContext(searchContext)
  const { catagoryNameData } = useFetch(searchIt)
  const { catagory } = useContext(showCatagoryContext)
  const { darkMode } = useContext(ThemeContext)

  return (
    <div className={`CatagorySection ${catagory ? 'visibleCatagory' : 'hiddenCatagory'} ${!darkMode ? 'catagoryInLight' : 'catagoryInDark'}`}>
      <h2>Catagories</h2>
      <div className="catagory-data">
        {
          catagoryNameData.map((item, i) => (
            <p key={i}
              onClick={() => setSearchIt({
                name: item.name,
                type: 'catagory'
              })}
            >{item.name}</p>
          ))
        }
      </div>
    </div>
  )
}

export default memo(CatagorySection)