import type { Metadata } from "next";
import { Battambang, Playfair_Display, Moul } from "next/font/google";
import "./globals.css";
import MenuBar from "@/components/MenuBar";

const battambang = Battambang({
  variable: "--font-khmer",
  subsets: ["khmer"],
  weight: ["400", "700"],
});

const moul = Moul({
  variable: "--font-khmer-title",
  subsets: ["khmer"],
  weight: ["400"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "សិរីមង្គលអាពាហ៍ពិពាហ៍ សុខស៊ីញ & ពុធថា | Soksin & Puttha Wedding",
  description: "សូមគោរពអញ្ជើញឯកឧត្ដម លោកជំទាវ លោក លោកស្រី និងញាតិមិត្តជិតឆ្ងាយ ចូលរួមជាសាក្សីនៃក្តីស្រលាញ់របស់យើងខ្ញុំ។",
  openGraph: {
    title: "សិរីមង្គលអាពាហ៍ពិពាហ៍ សុខស៊ីញ & ពុធថា",
    description: "សូមគោរពអញ្ជើញឯកឧត្ដម លោកជំទាវ លោក លោកស្រី និងញាតិមិត្តជិតឆ្ងាយ ចូលរួមជាសាក្សីនៃក្តីស្រលាញ់របស់យើងខ្ញុំ។",
    locale: "km_KH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "សិរីមង្គលអាពាហ៍ពិពាហ៍ សុខស៊ីញ & ពុធថា",
    description: "សូមគោរពអញ្ជើញឯកឧត្ដម លោកជំទាវ លោក លោកស្រី និងញាតិមិត្តជិតឆ្ងាយ ចូលរួមជាសាក្សីនៃក្តីស្រលាញ់របស់យើងខ្ញុំ។",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="km">
      <body
        className={`${battambang.variable} ${moul.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
        <MenuBar />
      </body>
    </html>
  );
}
