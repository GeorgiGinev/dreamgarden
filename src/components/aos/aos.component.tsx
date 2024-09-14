"use client"

import { AnimationsDurationEnum } from "@/enums/animations-duration.enum";
import { useEffect } from "react";
import AOS from 'aos';


const AOSComponent = () => {
    useEffect(() => {
        const newLocal = AnimationsDurationEnum.Secondary;
        AOS.init({
          duration: newLocal,
          once: false,
        });

        return () => {
            AOS.refresh();
        };
      }, [])

    return(<></>);
}

export default AOSComponent;