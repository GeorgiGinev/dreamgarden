"use client"

import Button from "@/components/button/button";
import { useTranslations } from "next-intl";
import styles from "./video-tour.module.scss";
import { useRef, useState } from "react";

const VideoTour = () => {
    const videoRef = useRef(null);
    const [startVideo, setStartVideo] = useState(false);
    const translationsVirtualTour = useTranslations('VirtualTour');

    const playVideo = () => {
        if(!!videoRef.current) {
            (videoRef.current as any).play();
        }
    }

    const stopVideo = () => {
        if(!!videoRef.current) {
            (videoRef.current as any).pause();
        }
    }

    return (
        <div className="position-relative my-4">
            {!startVideo && <div className={styles['play-video-container']}>
                <Button onClick={() => {
                    setStartVideo(true);
                    playVideo();
                }}>
                    {translationsVirtualTour('startTour')}
                </Button>
            </div>}
            <video ref={videoRef} className={styles.container} loop onClick={() => {
                setStartVideo(false);
                stopVideo();
            }}>
                <source src="/videos/virtual-tour/virtual-tour.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default VideoTour;