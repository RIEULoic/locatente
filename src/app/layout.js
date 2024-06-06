"use client";

import { inter, local, lobster } from "@/app/fonts";
import "./globals.css";
import { NavbarStateProvider } from "@/context/NavbarStateContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PopupWarning from "@/components/PopupWarning";
import ScrollToTopButton from "@/components/ScrollTopButton";

export default function RootLayout({ children }) {
  //console.log(local.className);
  return (
    <html
      lang="en"
      className={`${inter.variable} ${local.variable} ${lobster.variable}`}
    >
      {/*Permet d'avoir font-inter, font-local et font-lobster accessible sur tout le html en les passant dans className*/}
      <body className={inter.className}>
        {/* <body className={inter.className}> permet d'avoir inter appliqué par defaut sur tout le body */}
        <NavbarStateProvider>
          <Navbar />
          <PopupWarning />
          <ScrollToTopButton />
          {children}
          <Footer />
        </NavbarStateProvider>
      </body>
    </html>
  );
}
