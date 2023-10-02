import React from 'react';
import styles from './PersonLinkBack.module.css'
import { useNavigate } from 'react-router-dom'
import img from './img/returnYellow.png'


const PersonLinkBack = () => {

    const navigate = useNavigate()
    const handleGoBack = e => {
        e.preventDefault()
        navigate(-1)
    }
    return (
        <a href={'#'}
           onClick={handleGoBack}
           className={styles.link}>
            <img className={styles.link__img} src={img} alt="Go back"/>
            <span>Go back</span>
        </a>
    );
};

export default PersonLinkBack;