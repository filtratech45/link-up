import React from 'react';
import Image from "next/image";

const Check = ({condition}) => (
    <span title={condition ? "oui" : "non"}>
        <span className='w-full h-full justify-center flex'>
        {condition ? (
            <Image
                alt={"✓"}
                title={"oui"}
                width={20}
                height={20}
                className="mx-1 svg-green"
                src='/check.png'
            />
        ) : (
            <Image
                alt={"⨯"}
                title={"non"}
                width={20}
                height={20}
                className="mx-1 svg-red"
                src='/cross.png'
            />
        )}
        </span>
    </span>
);

export default Check;