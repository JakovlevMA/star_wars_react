import React from 'react';
import {useDispatch} from "react-redux";
import styles from './PersonPhoto.module.css'
import {setPersonToFavorite, removePersonFromFavorite} from "../../../store/actions";
import iconFavorite from './img/medal-yellow.svg'
import iconUnFavorite from './img/medal-white.svg'


const PersonPhoto = ({
                         personPhoto,
                         personName,
                         personID,
                         personFavorite,
                         setPersonFavorite,
        }) => {
    const dispatch = useDispatch();
    
    const dispatchFavoritePeople = () => {
        if(personFavorite) {
            dispatch(removePersonFromFavorite(personID))
            setPersonFavorite(false)
        } else {
            dispatch(setPersonToFavorite({
                [personID]: {
                    name: personName,
                    img: personPhoto,
                },
            }));
            setPersonFavorite(true)
        }
    }
    return (
        <>
            <div className={styles.container}>
                <img className={styles.photo} src={personPhoto} alt={personName}/>
                <img
                    onClick={dispatchFavoritePeople}
                    src={personFavorite ? iconFavorite : iconUnFavorite}
                    className={styles.favorite}
                    alt="favoriteIcon"
                />
            </div>
        </>
    );
};

export default PersonPhoto;