import React, {useCallback, useEffect, useState} from 'react';
import {getApiResource} from "../../utils/network";
import styles from './SearchPage.module.css'
import {API_SEARCH} from "../../constants/api";
import {withErrorAPI} from "../../hoc-halper/withErrorAPI";
import {getPeopleID, getPeopleImage} from "../../services/getPeopleData";
import SearchPageInfo from "../../components/SearchPage/SearchPageInfo";
import {debounce} from "lodash";
import {value} from "lodash/seq";
import UIInput from "../../components/UI/UIInput";


const SearchPage = ({ setErrorAPI }) => {
    const [inputSearchValue, setInputSearchValue] = useState('')
    const [people, setPeople] = useState([])

    const getResponse = async param => {
        const res = await getApiResource(API_SEARCH + param)

        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleID(url)
                const img = getPeopleImage(id)
                return {
                    id,
                    name,
                    img
                }
            });
            setPeople(peopleList)
            setErrorAPI(false)
        } else {
            setErrorAPI(true)
        }
    }

    useEffect(() => {
        getResponse('')
    },[]);
    
    const debouncedGetResponse = useCallback(
        debounce(value => getResponse(value), 300),
        []
    )

    
    const handleInputChange = value => {
        setInputSearchValue(value)
        debouncedGetResponse(value)
    }
    return (
        <>
            <h1 className='header__text'>Search</h1>
            <UIInput
                value={inputSearchValue}
                handleInputChange={handleInputChange}
                placeholder={'Input characters`s name'}
                classes={styles.input__search}
            />
            <SearchPageInfo people={people}/>
        </>
    );
};

export default withErrorAPI(SearchPage);