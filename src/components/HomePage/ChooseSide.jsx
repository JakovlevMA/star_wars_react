import React from 'react';
import styles from './ChooseSide.module.css'
import {THEME_DARK, THEME_LIGHT, THEME_NEITRAL, useTheme} from "../../context/ThemeProvider";
import lightSide from './img/light-side.jpg'
import darkSide from './img/dark-side.jpg'
import falcon from './img/falcon.jpg'
import cn from 'classnames'

const elements = [
    {
        theme: THEME_LIGHT,
        text: 'Light Side',
        img: lightSide,
        classes: styles.item__light,
    },{
        theme: THEME_DARK,
        text: 'Dark Side',
        img: darkSide,
        classes: styles.item__dark,
    },{
        theme: THEME_NEITRAL,
        text: 'Han Solo',
        img: falcon,
        classes: styles.item__neitral,
    },
]

const ChooseSideItem = ({
    classes,
    theme,
    text,
    img,
}) => {
    const isTheme = useTheme()
    return (
    <div className={cn(styles.item, classes)}
         onClick={() => isTheme.change(theme)}
    >
        <div className={styles.item__header}>{text}</div>
        <img className={styles.item__img} src={img} alt={text}/>
    </div>
    )
}

const ChooseSide = () => {
    return (
        <div className={styles.container}>
            {elements.map(element => (
                <ChooseSideItem
                    key={element.text}
                    theme={element.theme}
                    text={element.text}
                    img={element.img}
                    classes={element.classes}
                />
            ))}
        </div>
    );
};


export default ChooseSide;