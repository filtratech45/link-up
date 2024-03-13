import React from 'react';
import Image from "next/image";

export default function Field({ children, image, alt, extraImage, ...props }) {
    return (
        <div className="relative mt-2 rounded-md shadow-sm font-mono">
            {image && (<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">
                    <Image
                        src={image}
                        width={15}
                        height={15}
                        className="rounded-lg"
                        alt={alt} />
                </span>
                {extraImage}
            </div>)}
            {children}
        </div>
    );
}
