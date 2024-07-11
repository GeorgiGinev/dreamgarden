import { LayoutInterface } from "@/interfaces/layout.interface";
import PageContextProvider from "./page.context.provider";

const Layout = async ({children}: LayoutInterface) => {
    return(
        <section>
            <PageContextProvider>
                {children}
            </PageContextProvider>
        </section>
    )
}

export default Layout;