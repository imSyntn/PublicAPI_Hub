import { useState, createContext, useLayoutEffect, useRef, useEffect } from 'react'
import './Styles/Misc.scss'
import Header from './Components/Header';
import PreLoader from './Components/PreLoader';
import HeroSection from './Components/HeroSection';
import SearchingContainer from './Components/SearchingContainer';
import CatagorySection from './Components/CatagorySection';
import ResultSection from './Components/ResultSection';
import Footer from './Components/Footer';

export const ThemeContext = createContext();
export const showCatagoryContext = createContext()
export const searchContext = createContext()

function App() {

  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(true)
  const [catagory, setCatagory] = useState(false)
  const [searchIt, setSearchIt] = useState({
    name: '',
    type: ''
  })

  useLayoutEffect(() => {
    const onload = () => {
      setTimeout(() => setLoading(false), 1000)
    }
    window.addEventListener('load', onload)
  }, [])

  useLayoutEffect(() => {
    if (localStorage.getItem('darkMode') === null) {
      localStorage.setItem('darkMode', 'true')
    } else {
      if (localStorage.getItem('darkMode') === 'false') {
        setDarkMode(false)
      }
    }
  }, [])

  return (
    <>
      {/* { */}
        {/* loading ? (<PreLoader theme={darkMode} />) : */}
        
        {/* ( */}
          <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            <div className={`main ${darkMode ? 'darkContainer' : 'lightContainer'}`}>
              <Header />
              <searchContext.Provider value={{ searchIt, setSearchIt }}>
                <showCatagoryContext.Provider value={{ catagory, setCatagory }}>
                  <div className="hero-search">
                    <HeroSection theme={darkMode} />
                    <SearchingContainer />
                  </div>
                  <div className="overlay">
                  </div>
                  <CatagorySection />
                </showCatagoryContext.Provider>
                <ResultSection />
              </searchContext.Provider>
              <Footer theme={darkMode} />
            </div>
          </ThemeContext.Provider>
        {/* // ) */}
      {/* // } */}
    </>
  )
}

export default App
