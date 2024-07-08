import type { Metadata } from "next";
import "../styles/globals.scss";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { getMessages } from "next-intl/server";
import Header from "@/components/header/header";
import FullScreenImageGalleryProvider from "@/components/fullscreen-image-gallery/fullscreen-image-gallery.provider";
import Footer from "@/components/footer/footer";

interface RootLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = async ({
  children, params
}: RootLayoutProps) => {
  const locale = params.locale || 'en';
  const messages = await getMessages();
  
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <FullScreenImageGalleryProvider>
            <Header></Header>
            {children}
            <Footer></Footer>
          </FullScreenImageGalleryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;