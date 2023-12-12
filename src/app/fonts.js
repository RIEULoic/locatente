import { Inter, Lobster } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  //par défaut display est sur swap de toute façon
});

export const lobster = Lobster({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
