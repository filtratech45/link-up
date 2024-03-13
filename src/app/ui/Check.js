import React from 'react';
import Image from "next/image";

const Check = ({condition}) => (
    <td title={condition ? "oui" : "non"}>
        <div className='w-full h-full justify-center flex'>
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
        </div>
    </td>
);

export default Check;