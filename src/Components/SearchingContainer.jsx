import React, { useEffect, useState, useContext } from 'react'
import '../Styles/SearchingContainer.scss'
import Button from './Button'
// import { SearchContext } from '../App'
import { ImSearch } from "react-icons/im";
import { useCallback } from 'react';
import { memo } from 'react';
import HeaderBtn from './HeaderBtn';
import { searchContext } from '../App';
// import CatagorySection from './CatagorySection';
import { showCatagoryContext } from '../App';

const SearchingContainer = () => {

    const { catagory, setCatagory } = useContext(showCatagoryContext)
    const { searchIt, setSearchIt } = useContext(searchContext)
    const [nameSearch, setNameSearch] = useState('')

    // useEffect(()=>{
    //     console.log(catagory)
    // },[catagory])

    const catagoryBtnClick = useCallback(() => {
        setCatagory(prev => !prev)
    }, [])

    const searchBtnClick = useCallback(() => {
        nameSearch.length > 1 && setSearchIt({
            name: nameSearch,
            type: 'input'
        })
    }, [nameSearch])

    return (
        <div className="searchingContainer">
            <div className="srch">
                <input type="text" placeholder='Search ...' onChange={(e) => setNameSearch(e.target.value)} value={nameSearch} />
                <HeaderBtn Icon={ImSearch} clickEvent={searchBtnClick} />
            </div>
            <Button text={'Catagories'} clickEvent={catagoryBtnClick} />
        </div>
    )
}

export default memo(SearchingContainer)