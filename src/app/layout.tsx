import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NAVADA Robotics - Pioneering the Future",
  description: "Smart Robotics with Raspberry Pi + AI + Computer Vision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
