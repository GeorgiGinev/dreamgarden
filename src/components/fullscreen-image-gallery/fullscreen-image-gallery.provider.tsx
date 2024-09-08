"use client"

import { ReactNode, useEffect, useState } from "react";
import FullScreenImageGalleryContext from "./fullscreen-image-gallery.context";
import { CloseButton, Image, Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import styles from './fullscreen-image.gallery.module.scss';
import { Icons } from "@/enums/icons-enum";
import { ImageInterface } from "@/interfaces/image/image.interface";

interface FullScreenImageGalleryProvicerInterface {
    children: ReactNode
}

const FullScreenImageGalleryProvider = ({children}: FullScreenImageGalleryProvicerInterface) => {
    const [image, setImage] = useState<ImageInterface | null>(null);
    const [imagesList, setImagesList] = useState<ImageInterface[] | null>(null);
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setImage(null);
        setImagesList(null);
    };

    useEffect(() => {
        setShowModal(!!image);
        console.log('Open image', image);
    }, [image]);

    return (
        <FullScreenImageGalleryContext.Provider value={{
            image, setImage,
            imagesList, setImagesList
        }}>
            {children}
            <div className={styles.container}>
            <Modal 
                show={showModal} 
                onHide={handleClose} 
                dialogClassName={styles['fullscreen-image-gallery-modal']}
                backdropClassName={styles['fullscreen-image-gallery-modal-backdrop']}
                contentClassName={styles['fullscreen-image-gallery-modal-content']}
            >
                <ModalHeader className='p-0'>
                    <CloseButton className={styles['close-button']} onClick={() => {
                        setImage(null)
                    }} />
                </ModalHeader>
                <ModalBody className="p-0">
                    {!!image ? <div style={{
                        maxHeight: '100%',
                        height: '100%',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image src={image.primaryURL} alt={image.name} style={{
                            maxHeight: '100%'
                        }} fluid />;
                    </div> : null}
                </ModalBody>
                {!imagesList || imagesList?.length > 0 ? 
                <ModalFooter>
                    <div className="arrow-button" onClick={() => {
                        if(!imagesList) {
                            return;
                        }

                        const findImageIndex: number = imagesList?.findIndex((listImage: ImageInterface) => listImage.id === image?.id);
                        if(findImageIndex === -1) {
                            return;
                        }

                        if(findImageIndex === 0) {
                            setImage(imagesList[imagesList?.length - 1]);
                            return;
                        }

                        setImage(imagesList[findImageIndex-1]);
                    }}>
                        <Image src={Icons.ArrowRight} width={18} height={32} />
                    </div>
                    <div className="arrow-button" onClick={() => {
                        if(!imagesList) {
                            return;
                        }

                        const findImageIndex: number = imagesList?.findIndex((listImage: ImageInterface) => listImage.id === image?.id);
                        if(findImageIndex === -1) {
                            return;
                        }

                        if(findImageIndex === imagesList?.length - 1) {
                            setImage(imagesList[0]);
                            return;
                        }

                        setImage(imagesList[findImageIndex+1]);
                    }}>
                        <Image src={Icons.ArrowLeft} width={18} height={32} />
                    </div>
                </ModalFooter> : ''}
            </Modal>
            </div>
        </FullScreenImageGalleryContext.Provider>
    )
}

export default FullScreenImageGalleryProvider;