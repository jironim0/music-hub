import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "My Spotify",
  description: "Created by Jir0nimo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={montserrat.className}>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
