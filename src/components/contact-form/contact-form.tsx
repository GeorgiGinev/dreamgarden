"use client"

import { Col, Container, Form, FormControl, FormGroup, FormLabel, Row, Toast, ToastContainer } from "react-bootstrap";
import SectionTitle from "../section-title/section-title";
import { useTranslations } from "next-intl";
import styles from "./contact-form.module.scss";
import Image from "next/image";
import { Icons } from "@/enums/icons-enum";
import Button from "../button/button";
import { submitContactForm } from "./contact-form-submit";
import { useRef, useState } from "react";
import { createForm } from "@/services/formService";

const ContactForm = () => {
    const ref = useRef<HTMLFormElement>(null)
    
    const contactFormTranslation = useTranslations('ContactForm');

    const [show, setShow] = useState(false); 
    const showToastrMessage = () => { 
        setShow(true);
    }; 
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [note, setNote] = useState('');

    let formData = createForm(['name', 'phone', 'email', 'date', 'note']);

    return (
        <div className={'position-relative overflow-hidden'}>
            <div style={{
                backgroundImage: 'url(./images/contact_form_flower.png)',
                width: 540,
                height: 315,
                position: 'absolute',
                bottom: 0,
                left: 0,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                zIndex: '-1'
            }}></div>
        <Container className="py-4">
            <Row className="mb-4">
                <Col md={5}></Col>
                <Col md={2}>
                    <SectionTitle primrayTitle={contactFormTranslation('contactFormPrimaryTitle')} secondaryTitle={contactFormTranslation('contactFormSecondaryTitle')}></SectionTitle>
                </Col>
                <Col md={5}></Col>
            </Row>
            <Row>
                <Col lg={2}></Col>
                <Col lg={8} className="position-relative">
                    <div className={styles['contact-form'] + " p-4"}>
                        <Form ref={ref} action={() => {
                            submitContactForm(formData).then((data) => {
                                ref.current?.reset()
                                showToastrMessage();
                            })
                        }}>
                            <Row> 
                                <Col md={6} className="mb-2">
                                    <FormGroup>
                                        <FormLabel>{contactFormTranslation('contactFormInputName')}<span style={{
                                            color: 'red'
                                        }}>*</span></FormLabel>  
                                        <FormControl 
                                            type="text" 
                                            name={name}
                                            onChange={(e) => setName(e.target.value)} 
                                            placeholder={contactFormTranslation('contactFormInputName')} 
                                            required
                                        />
                                    </FormGroup>
                                </Col>  
                                <Col md={6} className="mb-2">
                                    <FormGroup>
                                        <FormLabel>{contactFormTranslation('contactFormInputPhoneNumber')}<span style={{
                                            color: 'red'
                                        }}>*</span></FormLabel>  
                                        <FormControl 
                                            type="tel" 
                                            name={phone} 
                                            onChange={(e) => setPhone(e.target.value)} 
                                            placeholder={contactFormTranslation('contactFormInputPhoneNumber')} 
                                            required
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6} className="mb-2">
                                    <FormGroup>
                                        <FormLabel>{contactFormTranslation('contactFormInputEmail')}<span style={{
                                            color: 'red'
                                        }}>*</span></FormLabel>  
                                        <FormControl 
                                            type="email" 
                                            name={email} 
                                            onChange={(e) => setEmail(e.target.value)} 
                                            placeholder={contactFormTranslation('contactFormInputEmail')} 
                                            required
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6} className="mb-2">
                                    <FormGroup>
                                        <FormLabel>{contactFormTranslation('contactFormInputDate')}<span style={{
                                            color: 'red'
                                        }}>*</span></FormLabel>  
                                        <div className="position-relative">
                                            <FormControl 
                                                type="date" 
                                                name={date}
                                                onChange={(e) => setDate(e.target.value)} 
                                                placeholder={contactFormTranslation('contactFormInputDate')}
                                                required
                                            />
                                            <Image style={{
                                                position: 'absolute',
                                                top: '50%',
                                                right: 12,
                                                transform: 'translateY(-50%)'
                                            }} src={Icons.Calendar} alt={'Calendar'} width={16} height={16}></Image>
                                      </div>
                                    </FormGroup>
                                </Col>
                                <Col xs={12} className="mb-2">
                                    <FormGroup>
                                        <FormLabel>{contactFormTranslation('contactFormInputNote')}</FormLabel>  
                                        <FormControl 
                                            type="text"     
                                            name={note} 
                                            onChange={(e) => setNote(e.target.value)} 
                                            rows={1} 
                                            as="textarea" 
                                            placeholder={contactFormTranslation('contactFormInputNote')} 
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={8} lg={9}></Col>
                                <Col xs={12} md={4} lg={3} className="d-flex justify-content-center justify-content-md-end">
                                    <Button type="submit">{contactFormTranslation('contactFormSendButton')}</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div style={{
                        backgroundImage: 'url(./images/contact_form_doodle.png)',
                        width: 200,
                        height: 200,
                        position: 'absolute',
                        top: -80,
                        right: -70,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        zIndex: -1
                    }}></div>
                </Col>
                <Col lg={2}></Col>
            </Row>
        </Container>
        <ToastContainer position="top-center" className="mt-2 position-fixed">
        <Toast onClose={() => {
            setShow(false)
        }} show={show} animation={true} bg='success' delay={3000} autohide>
          <Toast.Header closeButton={false}>
            <div className="w-100">
            <strong className="me-auto">Success</strong><br />
            Your reservation was successfully sent.
            </div>
          </Toast.Header>
        </Toast>
        </ToastContainer>
        </div>
    )
}

export default ContactForm;