import { Colors } from "@/enums/colors.enum";
import { Icons } from "@/enums/icons-enum";
import { ReactNode } from "react";

export interface CardParamsInterface {
    children?: ReactNode,
    title?: string,
    description?: string,
    icon?: Icons,
    color?: Colors
}