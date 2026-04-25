import type { Metadata } from "next";
import { Battambang, Playfair_Display } from "next/font/google";
import "./globals.css";
import MenuBar from "@/components/MenuBar";

const battambang = Battambang({
  variable: "--font-khmer",
  subsets: ["khmer"],
  weight: ["400", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Khmer Wedding Invitation | លិខិតអញ្ជើញអាពាហ៍ពិពាហ៍",
  description: "A traditional Khmer wedding invitation for our special day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="km">
      <body
        className={`${battambang.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
        <MenuBar />
      </body>
    </html>
  );
}
