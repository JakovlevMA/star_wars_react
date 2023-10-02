import React from 'react';
import styles from './UIInput.module.css'
import cn from 'classnames'
import '../index.css'
import closeIcon from './img/close.svg'

const UiInput = ({
                     value,
                     handleInputChange,
                     placeHolder,
                     classes
                }) => {
    return (
        <div className={cn(styles.wrapper__input, classes)}>
            <input type="text"
                   value={value}
                   onChange={(e) => handleInputChange(e.target.value)}
                   placeholder={placeHolder}
                   className={styles.input}
            />
            <img
                onClick={() => value && handleInputChange('')}
                src={closeIcon}
                alt={"closeIcon"}
                className={cn(styles.clear, !value && styles.clear__disabled)}
            />
        </div>
    );
};

export default UiInput;