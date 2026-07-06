import { Bayon, Cormorant_Garamond, Instrument_Sans } from "next/font/google";

export const bayon = Bayon({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bayon",
});

export const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const instrumentSans = Instrument_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-instrument",
});
