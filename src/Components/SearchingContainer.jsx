import React, { useState, useContext } from 'react'
import '../Styles/SearchingContainer.scss'
import Button from './Button'
import { SearchContext } from '../App'
import { ImSearch } from "react-icons/im";
import { useCallback } from 'react';
import CatagorySection from './CatagorySection';

const SearchingContainer = ({ catagoryContextProp }) => {
    const { setSearchThis, fetchedData, setFetchedData } = useContext(SearchContext)
    const [nameSearch, setNameSearch] = useState('')

    const [visible, setVisible] = useState(false)

    const catagoryBtnClick = useCallback(() => {
        // catagoryContextProp(prev => !prev)
        setVisible(prev => !prev)

    }, [])

    const searchBtnClick = useCallback(() => {
        console.log('searchBtnClick')
        if (nameSearch !== '') {
            console.log('name Searching')
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
    }, [nameSearch])

    return (
        <>
            <div className="searchingContainer">
                <div className="srch">
                    <input type="text" placeholder='Search ...' onChange={(e) => setNameSearch(e.target.value)} value={nameSearch} />
                    <Button Icon={ImSearch} clickEvent={searchBtnClick} />
                </div>
                <Button text={'Catagories'} showX={true} clickEvent={catagoryBtnClick} showCatagory={visible} />
            </div>
            <CatagorySection showCatagory={visible} />
        </>
    )
}

export default SearchingContainer