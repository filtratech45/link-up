import React from 'react';
import Image from "next/image";

export default function Check({condition}) {
    return (
    <td title={condition ? "oui" : "non"}>
        {condition ? (
        <div className='w-full h-full justify-center flex'>
            <Image
                alt={"oui"}
                title={"oui"}
                width={20}
                height={20}
                className="mx-1 svg-green"
                src='/vrai.png'
            />
        </div>
        ) : (
            <Image
                alt={"non"}
                title={"non"}
                width={20}
                height={20}
                className="mx-1 svg-red"
                src='/faux.png'
            />
        )
        }
    </td>);
}