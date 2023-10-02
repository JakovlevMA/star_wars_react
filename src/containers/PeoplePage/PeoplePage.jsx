
import {getApiResource, changeHTTP} from '../../utils/network'
import {API_PEOPLE} from "../../constants/api";
import React, {useEffect, useState} from 'react';
import {getPeopleID, getPeopleImage, getPeoplePageID} from "../../services/getPeopleData";
import PeopleList from "../../components/PeoplePage/PeopleList";
import {withErrorAPI} from "../../hoc-halper/withErrorAPI";
import {useQueryParams} from "../../hooks/useQueryParams";
import PeopleNavigation from "../../components/PeoplePage/PeopleNavigation";

const PeoplePage = ({ setErrorAPI }) => {
    const [people, setPeople] = useState(null)
    const [prevPage, setPrevPage] = useState(null)
    const [nextPage, setNextPage] = useState(null)
    const [counterPage, setCounterPage] = useState(1)

    const query = useQueryParams()
    const queryPage = query.get('page')
    const getResource = async (url) => {
        const res = await getApiResource (url);
        if (res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleID(url)
                const img = getPeopleImage(id)
                return {
                    id: id,
                    name: name,
                    img: img,
                }
            });
            setPeople(peopleList)
            setPrevPage(changeHTTP(res.previous))
            setNextPage(changeHTTP(res.next))
            setCounterPage(getPeoplePageID(url))
            setErrorAPI(false)
        } else {
            setErrorAPI(true)
        }
    }

    useEffect(() => {
        getResource( API_PEOPLE + queryPage )
    }, [])

    return (
        <>
            <PeopleNavigation
                getResource={getResource}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            {people && <PeopleList people={people}/> }
        </>
    )

};


export default withErrorAPI(PeoplePage);



