import { NavigationItemType } from "@/enums/navigation-item.enum"

export interface NavigationItemInterface {
    name?: string,
    type: NavigationItemType
    action?: () => void,
    children?: NavigationItemInterface[]
}