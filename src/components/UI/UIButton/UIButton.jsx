import styles from './UIButton.module.css'
import '../index.css';
import React from 'react';
import cn from 'classnames'



const UiButton = ({text, onClick, disabled, theme='dark', classes}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cn(styles.button, styles[theme], classes)}>
            {text}
        </button>
    );
};

export default UiButton;