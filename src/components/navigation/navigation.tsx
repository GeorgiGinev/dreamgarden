"use client"

import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Logo from "../logo/logo";
import { NavigationItemInterface } from "./navigation-item.interface";
import { NavigationItemType } from "@/enums/navigation-item.enum";
import { usePathname, useRouter } from "next/navigation";
import styles from "./navigation.module.scss"
import { useTranslations } from "next-intl";
import Button from "../button/button";
import Hamburger from "hamburger-react";
import { useState } from "react";
import Link from "next/link";
import LocaleSwitcher from "../localSwitcher/locale-switcher";

const Navigation = () => {
    const router = useRouter();
    const pathName = usePathname();
    const [isOpen, setOpen] = useState(false)
    const t = useTranslations("Header");
    const translationsHome = useTranslations("Home");

    const items: NavigationItemInterface[] = [
        {
            name: t("virtualTour"),
            type: NavigationItemType.Button,
            url: 'virtualTour',
        },
        {
            name: t("gallery"),
            type: NavigationItemType.Button,
            url: 'gallery'
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
                <Navbar.Brand onClick={(event: any) => { event.preventDefault() }}>
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
                                    <Link className={`nav-link${pathName.includes(item.url as string) ? ' active-item' : ''}`} key={index} onClick={item.action} href={item.url ?? ''}>
                                        {item.name}
                                    </Link>
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
                        <Link className="nav-link" href="askUs">
                            <Button>
                                {translationsHome('askUs')}
                            </Button>
                        </Link>
                        <Nav.Link>
                            <LocaleSwitcher />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;