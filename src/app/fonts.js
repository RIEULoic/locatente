import { Inter, Lobster } from "next/font/google";
import LocalFont from "next/font/local";
//import localFont from "./FivoRegular.otf";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  //par défaut display est sur swap de toute façon
  variable: "--font-inter",
});

export const lobster = Lobster({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-lobster",
});

export const local = LocalFont({
  src: "../../public/fonts/overpassregular.otf",
  //Je ne sais pas pourquoi, mais je suis obligé de mettre le chemin complet avec les ../../ à la con, sinon "module not found" avec le chemin relatif.
  //Je ne sais pas si il vaut mieux placer les fonts dans public ou dans src.
  display: "swap",
  variable: "--font-local",
});
