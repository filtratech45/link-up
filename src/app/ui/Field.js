import React from 'react';
import Image from "next/image";

export default function Field({ children, image, alt, extraImage, ...props }) {
    return (
        <div class="relative mt-2 rounded-md shadow-sm">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span class="text-gray-500 sm:text-sm">
                    <Image
                        src={image}
                        width={15}
                        height={15}
                        className="hidden md:block rounded-lg"
                        alt={alt} />
                </span>
                {extraImage}
            </div>
            {children}
        </div>
    );
}
