'use client';

import React from "react";
import Image from "next/image";

import { getDictionary, getCountryFromLocale } from '/src/dictionaries';

export default function Page({ onBack, params: { lang } }) {
    const dict = getDictionary(lang).success;
    return (
        <div className="w-full h-full justify-center flex flex-col items-center justify-center place-content-center">
            <div className="bg-white rounded-2xl shadow-lg md:mx-0 mx-5 max-w-5xl ">
                <div className="flex flex-row p-5">
                    <Image
                        src="/succes.png"
                        width={120}
                        height={120}
                        className="rounded-lg"
                        alt="Success"
                    />
                    <div className="flex flex-col text-center justify-center">
                        <label className="block text-lg font-medium leading-6 text-filtra font-bold">{dict.message}</label>
                        <label className="block text-lg font-medium leading-6 text-filtra font-bold mt-3">{dict.thanks}</label>
                    </div>
                </div>
            </div>
            <div className="flex my-20 justify-end">
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={onBack}
                        className="bg-filtra hover:bg-hfiltra focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm flex flex-row"
                    >
                        <div className="flex flex-row">
                            <label>{dict.back}</label>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}