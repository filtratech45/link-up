// import { Inter, lusitana } from "next/font/google";
import "./globals.css";
import { inter   } from './font.js';

export const metadata = {
  title: "Link Up",
  description: "An app to keep in touch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
