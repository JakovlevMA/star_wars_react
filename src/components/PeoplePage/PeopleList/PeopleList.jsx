import React from 'react';
import styles from './PeopleList.module.css'
import { Link } from "react-router-dom";

const PeopleList = ({people}) => {
    return (
        <ul className={styles.list__container}>
            {people.map(({name, id, img}) =>
                <li className={styles.list__item} key={id}>
                    <Link to={`/people/${id}`}>
                        <img className={styles.person_photo} src={img} alt={name}/>
                        <p>{name}</p>
                    </Link>
                </li>
            )}
        </ul>
    );
};

export default PeopleList;