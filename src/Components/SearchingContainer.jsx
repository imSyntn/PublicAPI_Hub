import React, { useEffect, useState, useContext } from 'react'
import '../Styles/SearchingContainer.scss'
import Button from './Button'
import { SearchContext } from '../App'
import { ImSearch } from "react-icons/im";
import { useCallback } from 'react';
import { memo } from 'react';

const SearchingContainer = ({ catagoryContextProp }) => {
    const { setSearchThis, fetchedData, setFetchedData } = useContext(SearchContext)
    const [nameSearch, setNameSearch] = useState('')

    const catagoryBtnClick = useCallback(() => {
        catagoryContextProp(prev => !prev)
    },[])

    const searchBtnClick = useCallback(() => {
        if (nameSearch !== '') {
            setFetchedData(false);
            fetch(`https://public-apis-api-seven.vercel.app/search/${nameSearch}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(data => data.json())
                .then(res => {
                    setFetchedData(res)
                })
                .catch(e => console.log(e))
            setSearchThis({
                catagorySearch: false,
                inputSearch: nameSearch,
            })
        }
    },[nameSearch])

    return (
        <div className="searchingContainer">
            <div className="srch">
                <input type="text" placeholder='Search ...' onChange={(e) => setNameSearch(e.target.value)} value={nameSearch} />
                <Button Icon={ImSearch} clickEvent={searchBtnClick} />
            </div>
            <Button text={'Catagories'} showX={true} clickEvent={catagoryBtnClick} />
        </div>
    )
}

export default memo(SearchingContainer)