'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { signOut, auth, canAccess } from '/src/lib/firebase';

export default function Page() {
    const router = useRouter();

    React.useEffect(() => {
        const hasAccess = async () => {
            if (await canAccess()) {
                signOut(auth).then(() => {
                    router.push("/");
                });
            } else {
                router.push("/");
            }
        }

        hasAccess();
    }, [router]);

    return <p>Deconnexion en cours</p>;
}