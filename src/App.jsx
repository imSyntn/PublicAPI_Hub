import { useState, createContext, useEffect } from 'react'
import './Styles/Misc.scss'
import Header from './Components/Header';
// import Heart from './Components/Heart';
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


  useEffect(() => {
    const onload = () => {
      setTimeout(() => setLoading(false), 1000)
    }
    window.addEventListener('load', onload)

    return () => {
      window.removeEventListener('load', onload)
    }
  }, [])

  // useEffect(() => {
  //   if (localStorage.getItem('lightMode') === null) {
  //     localStorage.setItem('lightMode', 'false')
  //   } else {
  //     if (localStorage.getItem('lightMode') === 'true') {
  //       setdarkMode({
  //         lightMode: true,
  //         darkMode: false,
  //       })
  //     } else {
  //       setdarkMode({
  //         lightMode: false,
  //         darkMode: true,
  //       })
  //     }
  //   }
  // }, [])

  return (
    <>
      {
        loading ? (<PreLoader theme={darkMode.lightMode} />) : (
          <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            <div className={`main ${darkMode ? 'darkContainer' : 'lightContainer'}`}>
              <Header />
              <searchContext.Provider value={{searchIt, setSearchIt}}>
                <showCatagoryContext.Provider value={{ catagory, setCatagory }}>
                  <div className="hero-search">
                    <HeroSection />
                    <SearchingContainer />
                  </div>
                  <div className="overlay">
                  </div>
                  <CatagorySection />
                </showCatagoryContext.Provider>
                <ResultSection />
              </searchContext.Provider>
              {/* <Heart /> */}
              <Footer />
            </div>
          </ThemeContext.Provider>
        )
      }

    </>
  )
}

export default App
