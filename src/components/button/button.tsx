"use client"

import { ReactNode } from "react";
import { Button as BootstrapButton } from "react-bootstrap";
import { ButtonParamsInterface } from "./button-params.interface";
import styles from "./button.module.scss";

const Button = (data: ButtonParamsInterface) => {
    const variant = data?.variant ? data?.variant : "primary";
    const type = data?.type ? data.type : 'button';
    const className = data?.className;

    return (
        <div className={styles.container}>
            <BootstrapButton type={type} variant={variant} className={className} onClick={data.onClick}>
                {data.children}
            </BootstrapButton>
        </div>
    )
}

export default Button;