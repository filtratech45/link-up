'use client';

import React from 'react';
import { useRouter, redirect } from 'next/navigation';
import { useFormState, useFormStatus } from 'react-dom';

import Field from '/src/ui/Field';
import Label from '/src/ui/Label';
import { auth, getCurrentUser, signInWithEmailAndPassword } from '/src/lib/firebase';
 
async function authenticate(state, formData) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, formData.get('email'), formData.get('password'));
        return {
            ...state,
            error: null,
            user: userCredential.user,
        };
    }
    catch (error) {
        return {
            ...state,
            user: null,
            error: error.message,
        }
    }
}

function LoginButton() {
    const { pending } = useFormStatus();
   
    return (
        <div className="flex justify-end p-5">
            <button
                type="submit"
                aria-disabled={pending}
                className={`${pending ? 'bg-slate-300' : 'bg-filtra hover:bg-hfiltra focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'} rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm`}
                >
                Login
            </button>
        </div>
    )
}

export default function Page() {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(true);
    const [state, dispatch] = useFormState(authenticate, {});

    React.useEffect(() => {
        const checkAccess = async () => {
            if (await getCurrentUser()) {
                router.push("/dashboard");
            } else {
                setIsLoading(false);
            }
        }

        checkAccess();
    }, [router]);

    if (isLoading) return null;

    if (state.user) {
        router.push('/dashboard');
    }
    return (
        <form action={dispatch} className='font-mono'>
            <div className="m-5">
                <Label htmlFor="email">Email</Label>
                <Field>
                    <input type="email" name="email" placeholder="Email" required className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </Field>
            </div>
            <div className="m-5">
                <Label htmlFor="password">Mot de passe</Label>
                <Field>
                    <input type="password" name="password" placeholder="Password" required className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </Field>
            </div>
            <div className="m-5">
            {state.error && (
                <span className="text-red-600">
                    {state.error}
                </span>
            )}
            </div>
            <LoginButton />
        </form>
    )

}