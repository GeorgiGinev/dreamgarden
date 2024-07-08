import { ReactNode } from "react";

export interface ButtonParamsInterface {
    children: ReactNode,
    variant?: string,
    className?: string,
    type?: 'button' | 'submit',
    onClick?: (data: any) => void
}