import React, { useCallback, useEffect, useState } from 'react'

const useFetch = (searchIt) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [catagoryNameData, setCatagoryNameData] = useState([])

    const randomSearch = useCallback(() => {
        fetch('https://publicapi-hub.vercel.app/random', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(data => data.json())
            .then(res => {
                setData(res)
                setLoading(!loading)
            })
            .catch(e => {
                setLoading(!loading)
            })
    }, [])

    const catagoryNamesSearch = useCallback(() => {
        fetch('https://publicapi-hub.vercel.app/catagories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(data =>setCatagoryNameData(data.entries))
        .catch(e => console.log(e))
    }, [])

    const nameSearch = useCallback(() => {
        setLoading(true)
        setData([])
        fetch(`https://publicapi-hub.vercel.app/search/${searchIt.name}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(data => data.json())
            .then(res => {
                setData(res)
                setLoading(false)
                console.log("input", res)
            })
            .catch(e => setLoading(false))
    }, [searchIt.name])

    const catagorySearch = useCallback(() => {
        setData([])
        setLoading(true)
        fetch(`https://publicapi-hub.vercel.app/catagories/${searchIt.name}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(e => {
                console.log(e)
                setLoading(false)
            })
    }, [searchIt.name])

    useEffect(() => {
        if (searchIt.type === 'catagory') {
            catagorySearch()
        } else if (searchIt.type === 'input') {
            nameSearch();
        } else {
            randomSearch();
            catagoryNamesSearch();
        }
    }, [searchIt])


    return { loading, data, catagoryNameData }
}

export default useFetch