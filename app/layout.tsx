import type { Metadata } from "next";
import { Inter } from "next/font/google";
import config from "@/config/general";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gray"}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
