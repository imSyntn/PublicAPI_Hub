import React, { useContext } from 'react'
import '../Styles/ContentSection.scss'
import '../Styles/Misc.scss'
import SearchingContainer from './SearchingContainer'
import HeroSection from './HeroSection'
// import CatagorySection from './CatagorySection'
import ResultSection from './ResultSection'
import { showCatagoryContext } from '../App'

const ContentSection = () => {

    const { showCatagory, setShowCatagory } = useContext(showCatagoryContext)

    return (
        <div className='ContentSection'>
            <HeroSection />
            <SearchingContainer catagoryContextProp = {setShowCatagory} />
            {/* {
                showCatagory ? <CatagorySection /> : ''
            } */}
            {/* <CatagorySection /> */}
            <ResultSection />
        </div>
    )
}

export default ContentSection