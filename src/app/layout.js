"use client";

import { inter } from "@/app/fonts";
import "./globals.css";
import { NavbarStateProvider } from "@/context/NavbarStateContext";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarStateProvider>
          <Navbar />
          {children}
        </NavbarStateProvider>
      </body>
    </html>
  );
}
