import { useState, createContext, useEffect } from 'react'
import Header from './Components/Header';
import ContentSection from './Components/ContentSection';
import CatagorySection from './Components/CatagorySection'
import Heart from './Components/Heart';
import Footer from './Components/Footer';
import PreLoader from './Components/PreLoader';

export const ThemeContext = createContext();
export const showCatagoryContext = createContext();
export const SearchContext = createContext();

function App() {

  const [currentTheme, setCurrentTheme] = useState({
    lightMode: false,
    darkMode: true
  })
  const [showCatagory, setShowCatagory] = useState(false)
  const [searchThis, setSearchThis] = useState({
    catagorySearch: false,
    inputSearch: false,
  })
  const [fetchedData, setFetchedData] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('lightMode') === null) {
      localStorage.setItem('lightMode', 'false')
    } else {
      if (localStorage.getItem('lightMode') === 'true') {
        setCurrentTheme({
          lightMode: true,
          darkMode: false,
        })
      } else {
        setCurrentTheme({
          lightMode: false,
          darkMode: true,
        })
      }
    }
  }, [])

  useEffect(() => {
    setFetchedData(false)
    fetch('https://public-apis-api-seven.vercel.app/random', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(data => data.json())
      .then(res => setFetchedData(res))
      .catch(e => console.log(e))
  }, [])

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <showCatagoryContext.Provider value={{ showCatagory, setShowCatagory }}>
        <SearchContext.Provider value={{ searchThis, setSearchThis, fetchedData, setFetchedData }}>
          <div className={`main ${currentTheme.lightMode ? 'lightContainer' : 'darkContainer'}`}>
            {/* <PreLoader theme={currentTheme.lightMode} /> */}
            <Header />
            <CatagorySection />
            <ContentSection />
            {/* <Heart /> */}
            <Footer />
          </div>
        </SearchContext.Provider>
      </showCatagoryContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
