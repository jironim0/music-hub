import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOption";
import AuthProvider from "@/shared/AuthProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Music-hub",
  description: "Created by Jir0nimo",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions); // Получаем сессию на сервере


  return (
    <StoreProvider>
      <html lang="en">
        <body className={montserrat.className}>
          <AuthProvider session={session}>{children}</AuthProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
