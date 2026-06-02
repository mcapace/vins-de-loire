import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// Licensed Proxima Nova (brand book primary). Drop .woff2 files into public/fonts/
// then uncomment and swap body className to use proximaNova.variable instead.
//
// const proximaNova = localFont({
//   src: [
//     {
//       path: "../public/fonts/ProximaNova-Light.woff2",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/ProximaNova-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/ProximaNova-Medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/ProximaNova-Semibold.woff2",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/ProximaNova-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/ProximaNova-Extrabold.woff2",
//       weight: "800",
//       style: "normal",
//     },
//   ],
//   variable: "--font-proxima-nova",
//   display: "swap",
// });
//
// In globals.css @theme, point --font-sans and --font-display to var(--font-proxima-nova).

export const metadata: Metadata = {
  title: "Vins de Loire",
  description: "Loire Wines and Wine Spectator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
