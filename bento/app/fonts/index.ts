import { DM_Sans } from "next/font/google";

export const dmSans = DM_Sans({
 fallback: ["Arial", "sans-serif"],
  variable: "--font-dm-sans",
  weight: ["400", "500"],
});