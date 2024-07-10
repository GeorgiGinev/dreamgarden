import { ReactNode } from "react";

export interface LayoutInterface {
    children: ReactNode;
    params?: { locale: string };
  }