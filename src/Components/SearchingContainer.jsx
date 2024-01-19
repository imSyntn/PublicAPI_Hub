import React from 'react'
import '../Styles/SearchingContainer.scss'
import Button from './Button'
import { ImSearch } from "react-icons/im";

const SearchingContainer = ({catagoryContextProp}) => {
    const handleClick = () => {
        catagoryContextProp(prev=>!prev)
    }
    return (
        <div className="searchingContainer">
            <div className="srch">
                <input type="text" placeholder='Search ...' />
                <Button Icon={ImSearch} />
            </div>
            <Button text={'Catagories'} showX={true} clickEvent={handleClick} />
        </div>
    )
}

export default SearchingContainer