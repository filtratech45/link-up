'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { manrope, inter } from '/src/app/font.js';

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between mb-12 md:p-24">
          <div className='z-10 px-12 md:rounded-2xl max-w-5xl w-full items-center justify-center place-content-center text-sm bg-white'>
            <div className="w-full h-full justify-center flex flex-col items-center justify-center place-content-center">
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
                <div className="flex flex-row p-5 mb-10">
                    <Link href="/fr" locale="fr">
                        <Image
                            alt={'FR'}
                            width={40}
                            height={40}
                            src='https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg'
                            className={"inline mr-2 h-4 rounded-sm"}
                            />
                    </Link>
                    <Link href="/en" locale="en">
                        <Image
                            alt={'UK'}
                            width={40}
                            height={40}
                            src='https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg'
                            className={"inline mr-2 h-4 rounded-sm"}
                            />
                    </Link>
                    <Link href="/es" locale="es">
                        <Image
                            alt={'ES'}
                            width={40}
                            height={40}
                            src='https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg'
                            className={"inline mr-2 h-4 rounded-sm"}
                            />
                    </Link>
                </div>
            </div>
          </div>
        </main>
    );
}