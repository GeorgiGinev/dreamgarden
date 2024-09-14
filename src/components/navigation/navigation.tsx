import { Container, Nav, NavDropdown, NavLink, Navbar, NavbarCollapse, NavbarToggle } from "react-bootstrap";
import Logo from "../logo/logo";
import { NavigationItemInterface } from "./navigation-item.interface";
import { NavigationItemType } from "@/enums/navigation-item.enum";
import styles from "./navigation.module.scss"
import Button from "../button/button";
import LocaleSwitcher from "../localSwitcher/locale-switcher";
import { Link } from "@/routing";
import MobileHamburgerComponent from "./mobile-hamburger.component";
import { getTranslations } from "next-intl/server";
import NavigationItemComponent from "./navigation-item/navigation-item.component";

const Navigation = async () => {
    const t = await getTranslations("Header");
    const translationsHome = await getTranslations("Home");

    const items: NavigationItemInterface[] = [
        {
            name: t("virtualTour"),
            type: NavigationItemType.Button,
            url: '/virtualTour',
        },
        {
            name: t("gallery"),
            type: NavigationItemType.Button,
            url: '/gallery'
        },
        {
            name: t("services"),
            type: NavigationItemType.Button,
            url: '/services'
        },
        {
            name: t("aboutUs"),
            type: NavigationItemType.Button,
            url: '/aboutUs'
        },
        {
            name: t("contacts"),
            type: NavigationItemType.Button,
            url: '/contacts'
        },
    ]

    return(
        <Navbar expand="lg" className={styles.container + ' bg-body-transparent'}>
            <Container>
                <div className="py-1">
                    <Logo position={'header'}></Logo>
                </div>
                <NavbarToggle aria-controls="basic-navbar-nav">
                    <MobileHamburgerComponent></MobileHamburgerComponent>
                </NavbarToggle>
                <NavbarCollapse id="basic-navbar-nav">
                     <Nav className="ms-auto">
                        {items.map((item, index) => {
                            if(!item.children || item.children.length === 0) {
                                return (
                                    <NavigationItemComponent item={item}></NavigationItemComponent>
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
                        <Link className="nav-link" href="/askUs">
                            <Button>
                                {translationsHome('askUs')}
                            </Button>
                        </Link>
                        <NavLink>
                            <LocaleSwitcher />
                        </NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;