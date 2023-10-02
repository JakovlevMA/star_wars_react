import React, {useEffect, useRef} from 'react';
import styles from './UIVideo.module.css'
import cn from "classnames";

const UiVideo = ({src, classes, playbackRate=1.0}) => {
    const videoRef = useRef(null)
    useEffect(() => {
       videoRef.current.playbackRate = playbackRate
    },[])
    return (
        <video
            loop
            autoPlay
            muted
            className={cn(styles.video, classes)}
            ref={videoRef}
        >
            <source src={src}/>
        </video>
    );
};

export default UiVideo;