'use client';

import React from 'react';
import { getDocs } from "firebase/firestore"; 

import { prospectsCollection } from '../../../lib/firebase';

export default function Page() {
    const isInitialized = React.useRef(false);
    const [prospects, setProspects] = React.useState(null);

    React.useEffect(() => {
        let cancelled = false;
        console.log('fetch');
        async function fetch() {
            const results = await getDocs(prospectsCollection);
            isInitialized.current = true;
            if (!cancelled) {
                console.log(results.docs);
                setProspects(results.docs);
            } else {
                console.log('cancelled');
            }
        }

        if (!isInitialized.current) fetch();

        return () => { console.log('CANCEL'); cancelled = true; }
    }, []);

    return (
        <div>
            <p>Dashboard Page</p>
            <table>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {prospects && prospects.map((prospect, index) => {
                return (
                    <tr key={`prospect-${index}`}>
                        <td>{`${index}`}</td>
                        <td>{prospect.get('name')}</td>
                    </tr>
                );
            })}
            </tbody>
            </table>
        </div>
    );
}