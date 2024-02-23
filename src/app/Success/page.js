'use client';

import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'

import { manrope } from '../font.js';

export default function Page() {
    const router = useRouter();
    const [isclicked, setClicked] = React.useState(false)
    return (
        <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
            <div className="mb-12 z-10 px-12 md:rounded-2xl max-w-5xl w-full items-center justify-center place-content-center text-sm bg-white">
                <div className="w-full h-full justify-center flex flex-col items-center justify-center place-content-center">
                    <Image
                        src="/link-up.png"
                        width={300}
                        height={200}
                        className="rounded-lg"
                        alt="Screenshots of the dashboard project showing desktop version"
                    />
                    <div className="text-center pb-8">
                        <p className={`${manrope.className} text-gray-500 text-lg`}>The app to keep in touch</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg flex flex-row md:mx-0 mx-5">
                        <div className="flex flex-row p-5">
                            <Image
                                src="/succes.png"
                                width={120}
                                height={120}
                                className="rounded-lg"
                                alt="Screenshots of the dashboard project showing desktop version"
                            />
                            <div className="flex flex-col text-center justify-center">
                                <label className="block text-lg font-medium leading-6 text-filtra font-bold">Votre Formulaire a bien été envoyé !</label>
                                <label className="block text-lg font-medium leading-6 text-filtra font-bold mt-3">Merci !</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex my-20 justify-end">
                        <div className="flex justify-end">
                            <button
                                value={isclicked}
                                onClick={() => { setClicked(true); router.push("/"); }}
                                className={`${isclicked ? 'bg-slate-300' : 'bg-filtra hover:bg-hfiltra focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'} rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm flex flex-row`}
                            >
                                <div className="flex flex-row">
                                    <label>Revenir au formulaire</label>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}