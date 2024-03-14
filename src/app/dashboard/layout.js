import "../globals.css";
import { inter } from '../font.js';

export const metadata = {
  title: "Link Up",
  description: "An app to keep in touch",
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: "/site.webmanifest",
};

export default function FormLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

