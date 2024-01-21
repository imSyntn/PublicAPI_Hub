import React, { useContext, useEffect } from 'react'
import '../Styles/ContentSection.scss'
import '../Styles/Misc.scss'
import SearchingContainer from './SearchingContainer'
import HeroSection from './HeroSection'
// import CatagorySection from './CatagorySection'
import ResultSection from './ResultSection'
import { showCatagoryContext } from '../App'

const ContentSection = () => {

    const { setShowCatagory } = useContext(showCatagoryContext)

    return (
        <div className='ContentSection'>
            <div className="bottomOverlay">
                <HeroSection />
                <SearchingContainer catagoryContextProp={setShowCatagory} />
            </div>
            <div className="overlay">
            </div>
            <ResultSection />
        </div>
    )
}

export default ContentSection