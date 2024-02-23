'use client';

import Popup from '../../ui/Popup'
import React from 'react';
import { getDocs } from "firebase/firestore"; 
import Image from "next/image";
import { Dialog, Transition } from '@headlessui/react'
import { prospectsCollection } from '../../../lib/firebase';
import Label from '../../ui/Label'
// import '../../home.module.css';

export default function Page() {
    let [isOpen, setIsOpen] = React.useState(false)
  
    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal(prospect) {
      setIsOpen(prospect)
    }

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
        <div id="prospects">
            <table >
                <colgroup>
                    <col span="5" style={{width: 25}}/>
                    <col span="1" style={{justifyContent:"center", width:50}}/>
                    <col span="1" style={{justifyContent:"center", width:50}}/>
                    <col span="3"style={{justifyContent:"center", width:50}}/>
                    <col span="1"style={{justifyContent:"center", width:50}}/>
                    <col span="1"style={{justifyContent:"center"}}/>
                </colgroup>
            <thead>
                <tr style={{ maxHeight: 25 }}>
                    <th>Nom de l'entreprise</th>
                    <th>Pays de l'entreprise</th>
                    <th>Prénom</th>
                    <th>Nom</th>
                    <th>Fonction</th>
                    <th>Email</th>
                    <th>Téléphone</th>
                    <th>distributeur matériel de labo</th>
                    <th>Colaboration avec Filtratech</th>
                    <th>Participation au jeu</th>
                    <th>Objet du contact</th>
                    <th style={{ maxWidth:20, textOverflow: 'ellipsis'}}>Remarques</th>
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
                        <td title={prospect.get('isSupplier') ? "oui" : "non"}>{prospect.get('isSupplier') ? "oui" : "non"}</td>
                        <td title={prospect.get('isCollabFiltratech') ? "oui" : "non"}>{prospect.get('isCollabFiltratech') ? "oui" : "non"}</td>
                        <td title={prospect.get('concours') ? "oui" : "non"}>{prospect.get('concours') ? "oui" : "non"}</td>
                        <td><div className='flex flex-col content-center justify-center'>{allProspects.demandeInfos && (
                            <Image
                            src="/info.png"
                            title={"Demande infos"}
                            width={20}
                            height={20}
                            className="mb-2"
                            />
                        )}{allProspects.demandeEchantillons && (
                            <Image
                            title={"Demande echantillons"}
                            src="/echantillon.png"
                            width={20}
                            height={20}
                            className="mb-2"
                            />
                        )}{allProspects.demandePrix && (
                            <Image
                            title={"Demande prix"}
                            src="/prix.png"
                            width={20}
                            height={20}
                            className="mb-2"
                            />
                        )}{allProspects.demandeDocCom && (
                            <Image
                            title={"Demande documents commercials"}
                            src="/doc.png"
                            width={20}
                            height={20}
                            className="mb-2"
                            />
                        )}{allProspects.autre && (
                            <div>
                                <Image
                                    title={allProspects.autre}
                                    src="/autre.png"
                                    width={20}
                                    height={20}
                                    className="mb-2"
                                />
                                {/* <p>{allProspects.autre}</p> */}
                            </div>
                        )}</div></td>
                        <td >{prospect.get('comment') != '' && (
                            <button
                                onClick={() => <Popup {...prospect.get('comment')}/>}
                                className={'bg-filtra hover:bg-hfiltra focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm'}
                            >
                                <div style={{flexDirection: "row", display: "flex", paddingRight: 12}}>
                                    <Label className='focus:outline-none focus:ring focus:pointer'>plus</Label>
                                    <Image
                                        src="/autre.png"
                                        width={25}
                                        height={20}
                                        className="ml-1 mr-2"
                                        alt="avion"
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
        </div>
    );
}