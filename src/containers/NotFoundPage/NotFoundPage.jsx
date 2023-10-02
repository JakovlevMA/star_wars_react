import React from 'react';
import styles from './NotFoundPage.module.css'
import img from './img/not-found.jpg'
import {useLocation} from "react-router";
const NotFoundPage = () => {
    let location = useLocation()
    return (
        <>
            <img className={styles.img} src={img} alt="notFound"/>
            <p className={styles.text}>No match for <u>{location.pathname}</u></p>
        </>
    );
};

export default NotFoundPage;