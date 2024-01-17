import { useState, createContext, createElement } from 'react'
import Header from './Components/Header';
import ContentSection from './Components/ContentSection';
import CatagorySection from './Components/CatagorySection'
import Heart from './Components/Heart';
import Footer from './Components/Footer';

export const ThemeContext = createContext();
export const showCatagoryContext = createContext();
export const catagorySearchContext = createContext();

function App() {

  const [currentTheme, setCurrentTheme] = useState({
    lightMode: false,
    darkMode: true
  })
  const [showCatagory, setShowCatagory] = useState(false)
  const [searchThis, setSearchThis] = useState(false)
  const [fetchedData, setFetchedData] = useState(false)

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <showCatagoryContext.Provider value={{ showCatagory, setShowCatagory }}>
        <catagorySearchContext.Provider value={{ searchThis, setSearchThis,fetchedData, setFetchedData}}>
          <div className={`main ${currentTheme.lightMode ? 'lightContainer' : 'darkContainer'}`}>
            <Header />
            <CatagorySection />
            <ContentSection />
            <Heart />
            <Footer />
          </div>
        </catagorySearchContext.Provider>
      </showCatagoryContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
