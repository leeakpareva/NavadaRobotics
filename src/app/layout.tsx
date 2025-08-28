import type { Metadata } from "next";
import { Crimson_Text } from "next/font/google";
import "./globals.css";

const crimsonText = Crimson_Text({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});

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
      <body className={`${crimsonText.className} bg-black text-white overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
