import React from 'react'
import '../Styles/SearchingContainer.scss'
import Button from './Button'
import { ImSearch } from "react-icons/im";

const SearchingContainer = () => {
    return (
        <div className="searchingContainer">
            <div className="srch">
                <input type="text" placeholder='Search ...' />
                <Button Icon={ImSearch} />
            </div>
            <Button text={'Catagories'} />
        </div>
    )
}

export default SearchingContainer