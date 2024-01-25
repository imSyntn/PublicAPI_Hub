import React, { useState, useContext } from 'react'
import '../Styles/SearchingContainer.scss'
import Button from './Button'
import { ImSearch } from "react-icons/im";
import { useCallback } from 'react';
import { memo } from 'react';
import HeaderBtn from './HeaderBtn';
import { searchContext } from '../App';
import { showCatagoryContext } from '../App';

const SearchingContainer = () => {

    const { setCatagory } = useContext(showCatagoryContext)
    const { setSearchIt } = useContext(searchContext)
    const [nameSearch, setNameSearch] = useState('')

    const catagoryBtnClick = useCallback(() => {
        setCatagory(prev => !prev)
    }, [])

    const keyDownEvent = useCallback((e)=> {
        if(e.keyCode===13) searchBtnClick()
    },[nameSearch])

    const searchBtnClick = useCallback(() => {
        nameSearch.length > 1 && setSearchIt({
            name: nameSearch,
            type: 'input'
        })
    }, [nameSearch])

    return (
        <div className="searchingContainer">
            <div className="srch">
                <input type="text" placeholder='Search ...' onChange={(e) => setNameSearch(e.target.value)} value={nameSearch} onKeyDown={keyDownEvent} />
                <HeaderBtn Icon={ImSearch} clickEvent={searchBtnClick} />
            </div>
            <Button text={'Catagories'} clickEvent={catagoryBtnClick} />
        </div>
    )
}

export default memo(SearchingContainer)