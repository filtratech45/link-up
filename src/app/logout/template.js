// import { Inter, lusitana } from "next/font/google";
import Image from "next/image";

import "/src/app/globals.css";
import { manrope, inter } from '/src/app/font.js';

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
            height={300}
            priority={true}
            className="rounded-lg"
            alt="Link Up"
          />
        </div>
        <div className="text-center pb-8">
          <p className={`${manrope.className} text-gray-500 text-lg`}>The app to keep in touch</p>
        </div>
        <div className="w-full h-full justify-center flex flex-col items-center justify-center place-content-center">
            <div className="bg-white rounded-2xl shadow-lg md:mx-0 mx-5 max-w-5xl mb-10">
              {children}
            </div>
        </div>
      </div>
    </main>
  );
}
