// import { GoogleMapsEmbed } from "@next/third-parties/google";
import { inter } from "@/app/fonts";
import "./globals.css";
import { NavbarStateProvider } from "@/context/NavbarStateContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarStateProvider>
          <Navbar />
          {/* <GoogleMapsEmbed
            apiKey={process.env.GOOGLE_API_KEY}
            height={200}
            width="100%"
            mode="place"
            q="Brooklyn+Bridge,New+York,NY"
          /> */}
          {children}
          <Footer />
        </NavbarStateProvider>
      </body>
    </html>
  );
}
