"use client"

import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Logo from "../logo/logo";
import { NavigationItemInterface } from "./navigation-item.interface";
import { NavigationItemType } from "@/enums/navigation-item.enum";
import { useRouter } from "next/navigation";
import styles from "./navigation.module.scss"
import { useTranslations } from "next-intl";
import Button from "../button/button";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Navigation = () => {
    const router = useRouter();
    const [isOpen, setOpen] = useState(false)
    const t = useTranslations("Header");
    const translationsHome = useTranslations("Home");

    const items: NavigationItemInterface[] = [
        {
            name: t("virtualTour"),
            type: NavigationItemType.Button,
            action: () => {
                router.push('/home')
            },
        },
        {
            name: t("gallery"),
            type: NavigationItemType.Button,
            action: () => {
                router.push('/home')
            },
        },
        {
            name: t("services"),
            type: NavigationItemType.Button,
            action: () => {
                router.push('/home')
            },
        },
        {
            name: t("aboutUs"),
            type: NavigationItemType.Button,
            action: () => {
                router.push('/home')
            },
        },
        {
            name: t("contacts"),
            type: NavigationItemType.Button,
            action: () => {
                router.push('/home')
            },
        },
    ]

    return(
        <Navbar expand="lg" className={styles.container + ' bg-body-transparent'}>
            <Container>
                <Navbar.Brand onClick={() => {router.push('/home')}}>
                    <Logo position={'header'}></Logo>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <Hamburger color="white" toggled={isOpen} toggle={setOpen} aria-controls="basic-navbar-nav" />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="ms-auto">
                        {items.map((item, index) => {
                            if(!item.children || item.children.length === 0) {
                                return (
                                    <Nav.Link key={index} onClick={item.action}>
                                        {item.name}
                                    </Nav.Link>
                                )
                            } else if(!!item.children && item.children.length > 0) {
                                return (
                                    <NavDropdown key={index} title={item.name} id="basic-nav-dropdown">
                                        {item.children?.map((child, index) => {
                                            if(child.type === NavigationItemType.Button) {
                                                return (
                                                    <NavDropdown.Item key={index} onClick={child.action}>{child.name}</NavDropdown.Item>
                                                )
                                            } else {
                                                return (
                                                    <NavDropdown.Divider key={index} />
                                                )
                                            }
                                        })}
                                    </NavDropdown>
                                )
                            }
                        })}
                        <Nav.Link>
                            <Button>
                                {translationsHome('askUs')}
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;