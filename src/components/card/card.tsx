"use client"

import { CardBody, CardTitle} from "react-bootstrap";
import { Card as CardBootstrap } from "react-bootstrap";
import styles from "./card.module.scss"
import { CardParamsInterface } from "./card-params.interface";
import Image from "next/image";

const Card = (params: CardParamsInterface) => {
    
    return (
        <div className={styles.container}>
            <CardBootstrap bg={params.color ? params.color : 'white'} style={{
                border: 0,
                borderRadius: 10
            }}>
                <CardBody className="px-4 py-3">
                    <CardTitle className="mb-2">
                        <div className="d-flex align-items-center">
                            {!!params.icon && !!params.title ? 
                                <div style={{
                                    height: 50,
                                    width: 50,
                                    position: 'relative'
                                }}>
                                    <Image 
                                        src={params.icon} 
                                        alt={params.title} 
                                        priority
                                        fill 
                                        sizes="50px"
                                        style={{
                                            objectFit: 'contain',
                                        }}
                                    ></Image>
                                </div>
                            : null}
                            {!!params.title ? <h5 className="title-wrapper mb-0 ms-2">{params.title}</h5> : null}
                        </div>
                    </CardTitle>
                    {!!params.description ? 
                        <CardBody className="p-0">
                            <small>
                                {params.description}
                            </small>
                        </CardBody> : null
                    } 
                </CardBody>
            </CardBootstrap>
        </div>
    )
}

export default Card;