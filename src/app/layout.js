"use client";

import { inter } from "@/app/fonts";
import "./globals.css";
import { NavbarStateProvider } from "@/context/NavbarStateContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PopupWarning from "@/components/PopupWarning";
import ScrollToTopButton from "@/components/ScrollTopButton";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
