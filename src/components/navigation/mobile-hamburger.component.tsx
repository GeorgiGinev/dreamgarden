"use client"

import Hamburger from "hamburger-react";
import { useState } from "react";

const MobileHamburgerComponent = () => {
    const [isOpen, setOpen] = useState(false)
    
    return (
        <Hamburger color="white" toggled={isOpen} toggle={setOpen} aria-controls="basic-navbar-nav" />
    )
}

export default MobileHamburgerComponent;