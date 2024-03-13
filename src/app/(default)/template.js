// import { Inter, lusitana } from "next/font/google";
import Image from "next/image";

import "../globals.css";
import { manrope, inter } from '../font.js';

export const metadata = {
  title: "Link Up",
  description: "An app to keep in touch",
};


export default function Template({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mb-12 md:p-24">
      <div className='z-10 px-12 md:rounded-2xl max-w-5xl w-full items-center justify-center place-content-center text-sm bg-white'>
        <div className="w-full h-full justify-center flex flex-col items-center justify-center place-content-center">
          <Image
            src="/link-up.png"
            width={300}
            height={200}
            className="rounded-lg"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
        <div className="text-center pb-8">
          <p className={`${manrope.className} text-gray-500 text-lg`}>The app to keep in touch</p>
        </div>
        {children}
      </div>
    </main>
  );
}
