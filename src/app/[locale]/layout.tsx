import "../styles/globals.scss";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/header/header";
import FullScreenImageGalleryProvider from "@/components/fullscreen-image-gallery/fullscreen-image-gallery.provider";
import Footer from "@/components/footer/footer";
import { LayoutInterface } from "@/interfaces/layout.interface";
import ContactForm from "@/components/contact-form/contact-form";

const RootLayout = async ({
  children, params
}: LayoutInterface) => {
  const locale = params?.locale || 'en';
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <FullScreenImageGalleryProvider>
            <Header></Header>
            {children}
            <section>
              <ContactForm></ContactForm>
            </section>
            <Footer></Footer>
          </FullScreenImageGalleryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;