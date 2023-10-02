import React, {useEffect, useState} from 'react';
import styles from './UILoading.module.css'
import loaderBlack from './img/loader-black.svg'
import loaderWhite from './img/loader-white.svg'
import loaderBlue from './img/loader-blue.svg'
import '../index.css'
import cn from 'classnames'

const UiLoading = ({
    theme = 'white',
    isShadow = true,
    classes
}) => {
    const [loaderIcon, setLoaderIcon] = useState(null);
    useEffect(() => {
        switch (theme) {
            case "black": setLoaderIcon(loaderBlack); break;
            case "white": setLoaderIcon(loaderWhite); break;
            case "blue": setLoaderIcon(loaderBlue); break;
            default: setLoaderIcon(loaderBlack)
        }
    }, [])
    return (
        <div>
            <img className={cn(styles.loader, isShadow && styles.shadow)} src={loaderIcon} alt="loader"/>
        </div>
    );
};

export default UiLoading;