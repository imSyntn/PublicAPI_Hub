import { useState, createContext, createElement } from 'react'
import Header from './Components/Header';
import ContentSection from './Components/ContentSection';
import CatagorySection from './Components/CatagorySection'
import Heart from './Components/Heart';
import Footer from './Components/Footer';

export const ThemeContext = createContext();
export const showCatagoryContext = createContext();

function App() {

  const [currentTheme, setCurrentTheme] = useState({
    lightMode: true,
    darkMode: false
  })
  const [showCatagory, setShowCatagory] = useState(false)

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <div className={`main ${currentTheme.lightMode ? 'lightContainer' : 'darkContainer'}`}>
        <Header />
        <showCatagoryContext.Provider value={{ showCatagory, setShowCatagory }}>
          <CatagorySection />
          <ContentSection />
        </showCatagoryContext.Provider>
        <Heart />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
