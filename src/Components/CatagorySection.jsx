import React, { useContext, useEffect, useState } from 'react'
import '../Styles/CatagorySection.scss'
import '../Styles/Misc.scss'
import { ThemeContext } from '../App'
import { showCatagoryContext } from '../App'
import { searchContext } from '../App';
import useFetch from '../Hook/useFetch'

const CatagorySection = () => {

  const { searchIt, setSearchIt } = useContext(searchContext)
  const { catagoryNameData } = useFetch(searchIt)
  const { catagory } = useContext(showCatagoryContext)
  const { darkMode } = useContext(ThemeContext)

  const [selectedIndex, setSelectedIndex] = useState(null)

  useEffect(() => {
    if (searchIt.type === 'input') {
      setSelectedIndex(null)
    }
  }, [searchIt.type])

  return (
    <div className={`CatagorySection ${catagory ? 'visibleCatagory' : 'hiddenCatagory'} ${!darkMode ? 'catagoryInLight' : 'catagoryInDark'}`} data-lenis-prevent>
      <h2 className={!darkMode ? 'textInWhiteMode' : 'textInDarkMode'}>Catagories</h2>
      <div className="catagory-data">
        {
          catagoryNameData.map((item, i) => (
            <p key={i}
              className={selectedIndex === i ? 'glow selectCatagory' : ''}
              onClick={() => {
                if(searchIt.name !== item.name) {
                  setSearchIt({
                    name: item.name,
                    type: 'catagory'
                  })
                  setSelectedIndex(i)
                } else {
                  setSearchIt({
                    name: '',
                    type: ''
                  })
                  setSelectedIndex(null)
                }
              }}
            >
              {item.name}
            </p>
          ))
        }
      </div>
    </div>
  )
}

export default CatagorySection