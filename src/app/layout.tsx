import type { Metadata } from "next";
import Navbar from "../components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Gaadi4U — Apni Gaadi, Apna Faisla",
  description: "Buy and sell used cars at the best price in India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}