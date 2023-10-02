import React from 'react';
import styles from './HomePage.module.css'
import ChooseSide from "../../components/HomePage";



const HomePage = () => {
    return (
        <>
            <h1 className={'header__text'}>Home Page</h1>
            <ChooseSide/>
        </>
    );
};

export default HomePage;