import "../globals.css";
import { inter } from '../font.js';
import { dictionaries } from '/src/dictionaries';


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

export async function generateStaticParams() {
  // console.log('generateStaticParams', Object.keys(dictionaries));
  return Object.keys(dictionaries).map((locale) => ({ lang: locale }));
}

export default function FormLayout({ children, params: { lang } }) {
  return (
    <html lang={lang}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
