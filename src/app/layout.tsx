import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { ModalsContextProvider } from "./contexts/ModalsContext";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Мираполис",
  description: "Единая экосистема HR-сервисов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ModalsContextProvider>
      <html lang="en">
        <body className={`${roboto.variable} bg-brand-dark-blue antialiased`}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ModalsContextProvider>
  );
}
