'use client';

import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { query, where, getDocs } from "firebase/firestore";

import Check from "/src/ui/Check";
import { prospectsCollection, canAccess } from '/src/lib/firebase';

export default function PageTirage() {
    const router = useRouter();
    const isInitialized = React.useRef(false);
    const [error, setError] = React.useState(null);
    const [clicked, setClicked] = React.useState(false);
    const [prospect, setProspect] = React.useState(null);
    const [prospects, setProspects] = React.useState(null);
    const [hasAccess, setHasAccess] = React.useState(false);

    React.useEffect(() => {
        const checkAccess = async () => {
            if (await canAccess()) {
                setHasAccess(true);
            } else {
                router.push("/login");
            }
        }

        checkAccess();
    }, [router]);
        
    React.useEffect(() => {
        let cancelled = false;
        // console.log('fetch');
        async function fetch() {
            const fromDate = new Date();
            const toDate = new Date();
            fromDate.setHours(0, 0, 0, 0);
            toDate.setHours(23, 59, 59, 0);

            try {
                const q = await query(prospectsCollection, 
                    where("concours", "==", true),
                    where("drawedAt", "==", null),
                    where("createdAt", ">=", fromDate),
                    where("createdAt", "<=", toDate),
                );
                const results = await getDocs(q);
                isInitialized.current = true;
                if (!cancelled) {
                    // console.log(results.docs);
                    setProspects(results.docs);
                    if (results.docs && results.docs.length) setError(null);
                    else setError('Nobody registered today');
                }
            } catch(e) {
                console.error(e);
                setError(e);
            }
        }

        if (!isInitialized.current) fetch();

        return () => { cancelled = true; }
    }, []);
    
    function draw() { // min and max included 
        const rndInt = Math.floor(Math.random() * (prospects.length));
        setProspect(prospects[rndInt]);
    }
    
    if (!hasAccess) return null;

    return (
    <div className="w-full h-full justify-center flex flex-col items-center justify-center place-content-center">
        <div className="flex justify-end">
            {Boolean(error) ? (
                <div className="flex flex-col rounded-2xl bg-white text-red-600 drop-shadow-lg p-8">
                    {error}
                </div>
            ) : (
            <button
                className={'bg-filtra hover:bg-hfiltra focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-md px-3 py-2 my-10 text-sm font-semibold text-white shadow-sm'}
                onClick={() => { draw(); setClicked(true); }}>
                {clicked ? "Retirer au sort" : "Tirer au sort"}
            </button>
            )}
        </div>
        <div className="flex justify-end">
            {Boolean(prospect) && (
            <div className="flex flex-col rounded-2xl bg-white drop-shadow-lg p-8">
                <div className="flex fex-row py-2">
                    <div className="pr-2">
                        Nom du Candidat :
                    </div>
                    <div className="pr-1.5">
                        {`${prospect.get('name')} ${prospect.get('surname')} (${prospect.get('role')})`}
                    </div>
                </div>
                <div className="flex fex-row py-2">
                    <div className="pr-2">
                        Adresse Email : 
                    </div>
                    <div>
                        {prospect.get('email')}
                    </div>
                </div>
                <div className="flex fex-row py-2">
                    <div className="pr-2">
                        Numéro de téléphone :  
                    </div>
                    <div>
                        {prospect.get('phone')}
                    </div>
                </div>
                <div className="flex fex-row py-2">
                    <div className="pr-2">
                        Nom de l&apos;entreprise : 
                    </div>
                    <div>
                        {prospect.get('company')}
                    </div>
                </div>
                <div className="flex fex-row py-2">
                    <div className="pr-2">
                        Pays de l&apos;entreprise : 
                    </div>
                    <div>
                        {prospect.get('country')}
                    </div>
                </div>
                <div className="flex fex-row py-2">
                    <div className="pr-2">
                        distributeur de matériel de laboratoire :  
                    </div>
                    <div>
                        <Check condition={prospect.get('isSupplier')}/>
                    </div>
                </div>
                <div className="flex fex-row py-2">
                    <div className="pr-2">
                        A déjà collaboré avec Filtratech :  
                    </div>
                    <div>
                        <Check condition={prospect.get('isCollabFiltratech')}/>
                    </div>
                </div>
                <div className="flex fex-row py-2">
                    <div className="pr-2">
                        Objet du contact :
                    </div>
                    <div>
                    <div className='flex flex-row content-center justify-center'>
                        {prospect.get('contactObject').demandeInfos && (
                            <Image
                                alt={"Demande infos"}
                                title={"Demande infos"}
                                src="/info.png"
                                width={20}
                                height={20}
                                className="mx-1 svg-red"
                            />
                        )}
                        {prospect.get('contactObject').demandeEchantillons && (
                            <Image
                                alt={"Demande echantillons"}
                                title={"Demande echantillons"}
                                src="/sample.png"
                                width={20}
                                height={20}
                                className="mx-1 svg-blue"
                            />
                        )}
                        {prospect.get('contactObject').demandePrix && (
                            <Image
                                alt={"Demande prix"}
                                title={"Demande prix"}
                                src="/price.png"
                                width={20}
                                height={20}
                                className="mx-1 svg-yellow"
                            />
                        )}
                        {prospect.get('contactObject').demandeDocCom && (
                            <Image
                                alt={"Demande documents commercials"}
                                title={"Demande documents commercials"}
                                src="/doc.png"
                                width={20}
                                height={20}
                                className="mx-1"
                            />
                        )}
                        {prospect.get('contactObject').autre && (
                            <Image
                                alt={prospect.get('contactObject').autre}
                                title={prospect.get('contactObject').autre}
                                src="/other.png"
                                width={20}
                                height={20}
                                className="mx-1 svg-gray"
                            />
                        )}
                        </div>
                    </div>
                </div>
                <div className="flex fex-row py-2">
                    {prospect.get('comment') != '' && (
                        <div>
                            <div className="pr-2">
                                Remarque(s) :
                            </div>
                            <div>
                                {prospect.get('comment')}
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>
            )}
        </div>
        <div className="flex my-20 justify-end">
            <button
                onClick={() => { router.push('/dashboard'); }}
                className={'z-40 border border-black shadow-lg bg-filtra hover:bg-hfiltra focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-md px-3 py-2 text-sm font-semibold text-white'}
            >
                <div>Revenir au tableau</div>
            </button>
        </div>
    </div>
    );
}