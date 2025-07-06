import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets:['latin'] })

export const metadata: Metadata = {
  title: "Pan n Plan",
  description: "Discover random recipes, watch cooking tutorials, and save your favorite meals. Transform your cooking journey with Pan 'n Plan - the ultimate meal discovery and planning app.",
  keywords: "recipes, cooking, meal planning, food discovery, cooking tutorials, recipe app",
  authors: [{ name: "Pan 'n Plan Team" }],
  openGraph: {
    title: "Pan 'n Plan - Discover Amazing Meals",
    description: "Random recipes. Full instructions. Save them forever. Your culinary adventure starts here.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pan 'n Plan - Your Next Favorite Meal is One Click Away",
    description: "Discover random recipes, watch cooking tutorials, and save your favorite meals.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
    generator: 'v0.dev'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased dark`} >
          {children}
        <ToastContainer autoClose={1500} theme="dark" hideProgressBar={false} />
      </body>
    </html>
  );
}
