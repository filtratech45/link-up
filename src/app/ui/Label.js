import React from 'react';

export default function Label({ children, ...props }) {
    return (
        <label {...props} class="block text-sm font-medium leading-6 text-gray-900">{children}</label>
    );
}
