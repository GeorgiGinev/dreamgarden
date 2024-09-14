"use client"

import { Link } from "@/routing";
import { usePathname } from "next/navigation";
import { NavigationItemComponentInterface } from "./navigation-item.interface";

const NavigationItemComponent = (data: NavigationItemComponentInterface) => {
    const pathName = usePathname();
    const item = data.item;

    return(
        <Link className={`nav-link ${pathName?.includes(item.url as string) ? 'active-item' : ''}`} onClick={item.action} href={item.url ?? ''}>
            {item.name}
        </Link>
    )
}

export default NavigationItemComponent