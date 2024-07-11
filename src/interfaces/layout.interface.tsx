import { ReactNode } from "react";

export interface LayoutInterface {
    children: ReactNode | any;
    params?: { locale: string };
  }