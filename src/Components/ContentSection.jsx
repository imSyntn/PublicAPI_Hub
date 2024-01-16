import React from 'react'
import '../Styles/ContentSection.scss'
import '../Styles/Misc.scss'
import SearchingContainer from './SearchingContainer'
import HeroSection from './HeroSection'
import ResultSection from './ResultSection'

const ContentSection = () => {


    return (
        <div className='ContentSection'>
            <HeroSection />
            <SearchingContainer />
            <ResultSection />
        </div>
    )
}

export default ContentSection