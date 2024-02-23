'use client';

import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { query, where, getDocs } from "firebase/firestore";

import Check from "../../ui/Check";
import { manrope } from '../../font.js';
import { prospectsCollection } from '../../../lib/firebase';

export default function PageTirage() {
    const router = useRouter();
    // let allProspects = null
    const isInitialized = React.useRef(false);
    const [prospects, setProspects] = React.useState(null);
    const [prospect, setProspect] = React.useState(null)
    const [clicked, setClicked] = React.useState(false)
    const fromDate = new Date();
    fromDate.setHours(0, 0, 0, 0);
    const toDate = new Date();
    toDate.setHours(23, 59, 59, 0);
    React.useEffect(() => {
        let cancelled = false;
        // console.log('fetch');
        async function fetch() {
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
                }
            } catch(e) {
                console.error(e);
            }
        }

        if (!isInitialized.current) fetch();

        return () => { cancelled = true; }
    }, []);
    
    function draw() { // min and max included 
        const rndInt = Math.floor(Math.random() * (prospects.length));
        setProspect(prospects[rndInt]);
    }
      
    return (
        <div>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className='pb-12 flex flex-col justify-center min-h-screen mb-12 z-10 px-12 rounded-2xl max-w-5xl w-full items-center place-content-center font-mono text-sm bg-white'>
                <div style={{display: "flex", flexDirection: "column", alignItems:"center"}}>
                <Image
                    src="/link-up.png"
                    width={300}
                    height={200}
                    className="rounded-lg"
                    alt="Screenshots of the dashboard project showing desktop version"
                />
                </div>
                <div className="text-center pb-8">
                    <p className={`${manrope.className} text-gray-500 text-lg`}>The app to keep in touch</p>
                </div>
                <button className={'bg-filtra hover:bg-hfiltra focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-md px-3 py-2 my-10 text-sm font-semibold text-white shadow-sm'} onClick={() => {draw(); setClicked(true)}}><p>{clicked ? "Retirer au sort" : "Tirer au sort"}</p></button>
                {prospect != null && (
                    <div className="flex flex-col rounded-2xl bg-white drop-shadow-lg p-8">
                        <div className="flex fex-row py-2">
                            <p className="pr-2">
                                Nom du Candidat :
                            </p>
                            <p className="pr-1.5">
                                {`${prospect.get('name')} ${prospect.get('surname')} (${prospect.get('role')})`}
                            </p>
                        </div>
                        <div className="flex fex-row py-2">
                            <p className="pr-2">
                                Adresse Email : 
                            </p>
                            <p>
                                {prospect.get('email')}
                            </p>
                        </div>
                        <div className="flex fex-row py-2">
                            <p className="pr-2">
                                Numéro de téléphone :  
                            </p>
                            <p>
                                {prospect.get('phone')}
                            </p>
                        </div>
                        <div className="flex fex-row py-2">
                            <p className="pr-2">
                                Nom de l&apos;entreprise : 
                            </p>
                            <p>
                                {prospect.get('company')}
                            </p>
                        </div>
                        <div className="flex fex-row py-2">
                            <p className="pr-2">
                                Pays de l&apos;entreprise : 
                            </p>
                            <p>
                                {prospect.get('country')}
                            </p>
                        </div>
                        <div className="flex fex-row py-2">
                            <p className="pr-2">
                                distributeur de matériel de laboratoire :  
                            </p>
                            <p>
                                <Check condition={prospect.get('isSupplier')}/>
                            </p>
                        </div>
                        <div className="flex fex-row py-2">
                            <p className="pr-2">
                                A déjà collaboré avec Filtratech :  
                            </p>
                            <p>
                                <Check condition={prospect.get('isCollabFiltratech')}/>
                            </p>
                        </div>
                        <div className="flex fex-row py-2">
                            <p className="pr-2">
                                Objet du contact :
                            </p>
                            <p>
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
                            </p>
                        </div>
                        <div className="flex fex-row py-2">
                            {prospect.get('comment') != '' && (
                                <div>
                                    <p className="pr-2">
                                        Remarque(s) :
                                    </p>
                                    <p>
                                        {prospect.get('comment')}
                                    </p>
                                </div>
                            )}
                            
                        </div>
                </div>
                )}
            </div>
            
        </main>
            <button
                onClick={() => {router.push('/dashboard/Prospects')}}
                className={'z-40 sticky border border-black shadow-lg bottom-5 left-5 bg-filtra hover:bg-hfiltra focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-md px-3 py-2 text-sm font-semibold text-white'}
            >
                <p>Revenir au tableau</p>
            </button>
        </div>
    );
}