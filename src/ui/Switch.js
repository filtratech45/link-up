import React from 'react';
import { Switch as HeadlessUISwitch } from '@headlessui/react'

export default function Switch({
    name,
    checked,
    onChange,
    children,
}) {
 return (
    <HeadlessUISwitch.Group className=''>
        <div className="my-3 flex items-center">
            <HeadlessUISwitch
                name={name}
                checked={checked}
                onChange={onChange}
                className={`${checked ? 'bg-filtra' : 'bg-gray-200'} min-w-11 relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-filtra focus:ring-offset-2`}
            >
                <span className={`${checked ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
            </HeadlessUISwitch>
            <HeadlessUISwitch.Label className="ml-4 text-black">
                {children}
            </HeadlessUISwitch.Label>
        </div>
    </HeadlessUISwitch.Group>
 );
}