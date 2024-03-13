'use client';

import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { getDocs } from "firebase/firestore"; 

import Check from '../../ui/Check'
import Popup from '../../ui/Popup'
import { prospectsCollection } from '../../../lib/firebase';

export default function Page() {
    const router = useRouter();
    let [comment, setComment] = React.useState(false)
  
    const isInitialized = React.useRef(false);
    const [prospects, setProspects] = React.useState(null);

    React.useEffect(() => {
        let cancelled = false;
        async function fetch() {
            const results = await getDocs(prospectsCollection);
            isInitialized.current = true;
            if (!cancelled) {
                // console.log(results.docs);
                setProspects(results.docs);
            }
        }

        if (!isInitialized.current) fetch();

        return () => { cancelled = true; }
    }, []);

    return (
        <div id="prospects" className=''>
            <table style={{maxWidth: '100vw'}}>
                <colgroup>
                    <col span="5" style={{width: "8.3%"}}/>
                    <col span="1" style={{justifyContent:"center", width: "16.6%"}}/>
                    <col span="1" style={{justifyContent:"center", width: "12%"}}/>
                    <col span="3" style={{justifyContent:"center", width: "4.2%"}}/>
                    <col span="1" style={{justifyContent:"center", width: "13.1%"}}/>
                    <col span="1" style={{justifyContent:"center", width: "4.2%"}}/>
                </colgroup>
            <thead>
                <tr style={{ maxHeight: 25 }}>
                    <th>Nom de l&apos;entreprise</th>
                    <th>Pays de l&apos;entreprise</th>
                    <th>Prénom</th>
                    <th>Nom</th>
                    <th>Fonction</th>
                    <th>Email</th>
                    <th>Téléphone</th>
                    <th>
                        <div className='w-full h-full justify-center flex'>                    
                            <Image
                                alt={"distributeur matériel de laboratoire"}
                                title={"distributeur matériel de laboratoire"}
                                src="/laboratory.png"
                                width={25}
                                height={25}
                                className="mx-1 svg-white"
                            />
                        </div>
                    </th>
                    <th>
                        <div className='w-full h-full justify-center flex'>                    
                            <Image
                                alt={"Colaboration avec Filtratech"}
                                title={"Colaboration avec Filtratech"}
                                src="/collab.png"
                                width={25}
                                height={25}
                                className="mx-1 svg-white"
                            />
                        </div>
                    </th>
                    <th>
                        <div className='w-full h-full justify-center flex'>                    
                        <Image
                            alt={"Participation au jeu"}
                            title={"Participation au jeu"}
                            src="/game.png"
                            width={25}
                            height={25}
                            className="mx-1 svg-white"
                        />
                        </div>

                    </th>
                    <th>Objet du contact</th>
                    <th style={{ maxWidth:20, textOverflow: 'ellipsis'}}>
                        <div className='w-full h-full justify-center flex'>
                        <Image
                            alt={"Remarques"}
                            title={"Remarques"}
                            src="/note.png"
                            width={25}
                            height={25}
                            className="mx-1 svg-white"
                        />
                        </div>
                        </th>
                </tr>
            </thead>
            <tbody>
            {prospects && prospects.map((prospect, index) => {
                const allProspects = prospect.get('contactObject')
                return (
                    <tr style={{display: "table-row"}}  key={`prospect-${index}`}>
                        {/* <td>{`${index}`}</td> */}
                        <td title={prospect.get('company')}>{prospect.get('company')}</td>
                        <td title={prospect.get('country')}>{prospect.get('country')}</td>
                        <td title={prospect.get('name')}>{prospect.get('name')}</td>
                        <td title={prospect.get('surname')}>{prospect.get('surname')}</td>
                        <td title={prospect.get('role')}>{prospect.get('role')}</td>
                        <td title={prospect.get('email')}>{prospect.get('email')}</td>
                        <td title={prospect.get('phone')}>{prospect.get('phone')}</td>
                        <Check condition={prospect.get('isSupplier')}/>
                        <Check condition={prospect.get('isCollabFiltratech')}/>
                        <Check condition={prospect.get('concours')}/>
                        <td>
                            <div className='flex flex-row content-center justify-center'>
                            {allProspects.demandeInfos && (
                                <Image
                                    alt={"Demande infos"}
                                    title={"Demande infos"}
                                    src="/info.png"
                                    width={20}
                                    height={20}
                                    className="mx-1 svg-red"
                                />
                            )}
                            {allProspects.demandeEchantillons && (
                                <Image
                                    alt={"Demande echantillons"}
                                    title={"Demande echantillons"}
                                    src="/sample.png"
                                    width={20}
                                    height={20}
                                    className="mx-1 svg-blue"
                                />
                            )}
                            {allProspects.demandePrix && (
                                <Image
                                    alt={"Demande prix"}
                                    title={"Demande prix"}
                                    src="/price.png"
                                    width={20}
                                    height={20}
                                    className="mx-1 svg-yellow"
                                />
                            )}
                            {allProspects.demandeDocCom && (
                                <Image
                                    alt={"Demande documents commercials"}
                                    title={"Demande documents commercials"}
                                    src="/doc.png"
                                    width={20}
                                    height={20}
                                    className="mx-1"
                                />
                            )}
                            {allProspects.autre && (
                                <Image
                                    alt={allProspects.autre}
                                    title={allProspects.autre}
                                    src="/other.png"
                                    width={20}
                                    height={20}
                                    className="mx-1 svg-gray"
                                />
                            )}
                            </div>
                        </td>
                        <td >{prospect.get('comment') != '' && (
                            <button
                                onClick={() => { setComment(prospect.get('comment')); }}
                                className={'bg-filtra hover:bg-hfiltra focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm'}
                            >
                                <div style={{flexDirection: "row", display: "flex"}}>
                                    {/* <Label className='focus:outline-none focus:ring focus:pointer'>plus</Label> */}
                                    <Image
                                        src="/other.png"
                                        width={25}
                                        height={25}
                                        alt="comment"
                                        className="svg-white"
                                    />
                                </div>
                            </button>
                        )}</td>
                        {/* <td>{prospect.get('comment')}</td> */}
                    </tr>
                );
            })}
            </tbody>
            </table>
            <Popup comment={comment} closeModal={() => setComment(false)} />
            <button
                onClick={() => {router.push('/dashboard/draw')}}
                className={'sticky border border-black shadow-lg bottom-5 left-5 bg-filtra hover:bg-hfiltra focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-md px-3 py-2 text-sm font-semibold text-white'}
            >
                <p>Passer au tirage</p>
            </button>
        </div>
    );
}