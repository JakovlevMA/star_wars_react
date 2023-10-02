import React, {useEffect, useState, Suspense} from 'react';
import {getApiResource} from "../../utils/network";
import styles from './PersonPage.module.css'
import {API_PERSON} from "../../constants/api";
import {withErrorAPI} from "../../hoc-halper/withErrorAPI";
import {useParams} from "react-router-dom";
import {getPeopleImage} from "../../services/getPeopleData";
import PersonInfo from "../../components/PersonPage/PersonInfo";
import PersonPhoto from "../../components/PersonPage/PersonPhoto";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack";
import UILoading from "../../components/UI/UILoading";
import {useSelector} from "react-redux";
const PersonFilms = React.lazy(() => import("../../components/PersonPage/PersonFilms"))

const PersonPage = ({setErrorAPI}) => {
    const [personID, setPersonID] = useState(null)
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null)
    const [personFilms, setPersonFilms] = useState(null)
    const [personFavorite, setPersonFavorite] = useState(false)
    const storeData = useSelector(state => state.favoriteReducer)
    const { id } = useParams()

    useEffect(() => {
        (async () => {
            const res = await getApiResource(`${API_PERSON}/${id}/`);
            storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false)
            setPersonID(id)
            if (res) {
                setPersonInfo([
                    {title: 'Height', data: res.height},
                    {title: 'Mass', data: res.mass},
                    {title: 'Hair Color', data: res.hair_color},
                    {title: 'Skin Color', data: res.skin_color},
                    {title: 'Eye Color', data: res.eye_color},
                    {title: 'Birth Year', data: res.birth_year},
                    {title: 'Gender', data: res.gender},
                ]);
                setPersonName(res.name)
                setPersonPhoto(getPeopleImage(id))

                res.films.length && setPersonFilms(res.films)

                setErrorAPI(false)
            } else {
                setErrorAPI(true)
            }
        })()
    },[])
    return (
        <>
            <PersonLinkBack/>
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>
                <div className={styles.container}>
                    <PersonPhoto
                        personPhoto={personPhoto}
                        personName={personName}
                        personID={personID}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}
                    />
                    {personInfo && <PersonInfo personInfo={personInfo}/>}
                    {personFilms && (
                        <Suspense fallback={<UILoading/>}>
                            <PersonFilms personFilms={personFilms} />
                        </Suspense>)}
                </div>
            </div>
        </>
    );
};

export default withErrorAPI(PersonPage);