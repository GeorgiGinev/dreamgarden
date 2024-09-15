"use client"

import Button from "@/components/button/button";
import { useTranslations } from "next-intl";
import styles from "./video-tour.module.scss";
import { useRef, useState } from "react";
import { VideoTourInterface } from "./video-tour.interface";

const VideoTour = (params: VideoTourInterface) => {
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
        <div className="position-relative mb-4">
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
                <source src={params.video} type="video/mp4" />
            </video>
        </div>
    );
}

export default VideoTour;