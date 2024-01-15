import { useState, createContext } from 'react'
import Header from './Components/Header';
import ContentSection from './Components/ContentSection';

export const ThemeContext = createContext();

function App() {

  const [currentTheme, setCurrentTheme] = useState({
    lightMode: true,
    darkMode: false
  })

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <div className={`main ${currentTheme.lightMode ? 'lightContainer' : 'darkContainer'}`}>
        <Header />
        <ContentSection />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
