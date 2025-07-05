import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets:['latin'] })

export const metadata: Metadata = {
  title: "Pan n Plan",
  description: "A kitchen companion: explore recipes and track your to-dos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased dark`} >
        {children}
      </body>
    </html>
  );
}
