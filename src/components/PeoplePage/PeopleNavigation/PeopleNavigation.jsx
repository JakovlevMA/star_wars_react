import React from 'react';
import {Link} from "react-router-dom";
import styles from './PeopleNavigation.module.css'
import UIButton from "../../UI/UIButton";


const PeopleNavigation = ({getResource, counterPage, nextPage, prevPage}) => {
    const handleChangeNext = () => getResource(nextPage)
    const handleChangePrev = () => getResource(prevPage)
    return (
        <div className={styles.container}>
            <Link to={`/people/?page=${counterPage-1}`} className={styles.buttons}>
                <UIButton
                text='Previous'
                onClick={handleChangePrev}
                disabled={!prevPage}
                />
            </Link>
            <Link to={`/people/?page=${counterPage+1}`} className={styles.buttons}>
                <UIButton
                    text='Next'
                    onClick={handleChangeNext}
                    disabled={!nextPage}
                />
            </Link>
        </div>
    );
};

export default PeopleNavigation;