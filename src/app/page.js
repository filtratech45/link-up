'use client';

import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation'
import PhoneInput from 'react-phone-number-input'
import TextareaAutosize from 'react-textarea-autosize';
import { addDoc, query, where, getDocs } from "firebase/firestore"; 

import 'react-phone-number-input/style.css'

import Label from './ui/Label';
import Field from './ui/Field';
import Switch from './ui/Switch';
import Loader from './ui/loader';
import { manrope } from './font.js';
import { COUNTRIES } from './lib/countries';
import CountrySelector from './lib/selector';
import { prospectsCollection } from '../lib/firebase';


export default function Home() {
  const router = useRouter();
  // Form
  const [isSupplier, setIsSupplier] = React.useState(false);
  const [isCollabFiltratech, setIsCollabFitratech] = React.useState(false);
  const [concours, setConcours] = React.useState(false);
  const [isSubmiting, setIsSubmiting] = React.useState(false);
  const [demandeInfos, setDemandeInfos] = React.useState(false);
  const [demandeEchantillons, setDemandeEchantillons] = React.useState(false);
  const [demandePrix, setDemandePrix] = React.useState(false);
  const [demandeDocCom, setDemandeDocCom] = React.useState(false);
  const [autre, setAutre] = React.useState(false);
  const [phone, setPhone] = React.useState();
  // country selector
  const [country, setCountry] = React.useState('FR');
  const [isOpen, setIsOpen] = React.useState(false);
  
  const [error, setError] = React.useState(null);

  const handleEmailChange = () => document.getElementById('email').setCustomValidity('');

  const submitHandler = async (event) => {
    setError(null);
    setIsSubmiting(true);
    event.preventDefault();
    event.stopPropagation();
    const prospect = {
      createdAt: new Date(),
      drawedAt: null,
      // createdBy: user,
      company: event.target.company.value,
      name: event.target.name.value,
      surname: event.target.surname.value,
      role: event.target.role.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      country: COUNTRIES.find(option => option.value === country).title,
      isSupplier,
      isCollabFiltratech,
      concours,
      contactObject: {
        demandeInfos,
        demandeEchantillons,
        demandePrix,
        demandeDocCom,
        autre: event.target.details?.value || null,
      },
      comment: event.target.comment?.value || '',
    }
    // console.log("submit", prospect);

    let err = null;
    try {
      const q = query(prospectsCollection, where("email", "==", prospect.email));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        const docRef = await addDoc(prospectsCollection, prospect);
        // console.log("Document written with ID: ", docRef.id);
      } else {
        document.getElementById('email').setCustomValidity("Already registered.");
        err = 'Un enregistrement existe déjà avec cette adresse email';
      }
    } catch (e) {
      err = `Error adding document: ${e}`;
    }
    setIsSubmiting(false);
    if (err) setError(err);
    else router.push('/Success');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <form
        onSubmit={submitHandler}
        action="#"
        className='mb-12 z-10 px-12 md:rounded-2xl max-w-5xl w-full items-center justify-center place-content-center font-mono text-sm bg-white'
      >
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
          <div className="mt-5">
            <Label htmlFor="company">Nom entreprise :</Label>
            <Field image="/company.png" alt="Nom">
              <input required type="text" name="company" id="company" className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Nom de l'entreprise" />
            </Field>
          </div>
          <div className="mt-5">
            <Label htmlFor="country">Pays de l&apos;entreprise :</Label>
            <Field image="/country.png" alt="drapeau">
              <CountrySelector
                id="country"
                open={isOpen}
                onToggle={() => setIsOpen(!isOpen)}
                onChange={(val) => setCountry(val)}
                selectedValue={COUNTRIES.find(option => option.value === country)}
              />
            </Field>
          </div>
          <div className="mt-5">
            <Label htmlFor="surname">Votre Nom :</Label>
            <Field image="/surname.png" alt="métier">
              <input required type="text" name="surname" id="surname" className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Nom du contact" />
            </Field>
          </div>
          <div className="mt-5">
            <Label htmlFor="name">Votre Prénom :</Label>
            <Field image="/name.png" alt="contact">
              <input required type="text" name="name" id="name" className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Prénom du contact" />
            </Field>
          </div>
          <div className="mt-5">
            <Label htmlFor="role">Votre Fonction :</Label>
            <Field image="/name.png" alt="contact">
              <input required type="text" name="role" id="role" className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Fonction du contact"/>
            </Field>
          </div>
          <div className="mt-5">
            <Label htmlFor="email">Votre Adresse Mail :</Label>
            <Field image="/email.png" alt="mail">
              <input required type="email" name="email" id="email" onChange={handleEmailChange} className="invalid:border-red-500 invalid:text-pink-600 block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Adresse mail du contact"/>
            </Field>
          </div>
          <div className="mt-5">
            <Label htmlFor="phone">Votre Numéro de Téléphone (sans espaces) :</Label>
            <Field>
            <PhoneInput
              id="phone"
              value={phone}
              onChange={setPhone}
              placeholder="Numéro de télépone du contact"
              className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              // placeholder="Numéro de téléphone du contact"
            />
              {/* <input required type="tel" pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$" name="phone" id="phone" className="block w-full rounded-md border-0 py-1.5 pl-11 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Numéro de téléphone du contact"/> */}
            </Field>
          </div>
          <div className="mt-5">
            <Switch
              name="isSupplier"
              checked={isSupplier}
              onChange={setIsSupplier}
            >
              Êtes-vous un distributeur de matériel de Laboratoire ?
            </Switch>
          </div>
          <div className="mt-5">
            <Switch
              checked={isCollabFiltratech}
              onChange={setIsCollabFitratech}
              name="isCollabFiltratech">
              Avez-vous déjà collaboré avec Filtratech ?
            </Switch>
          </div>
          <div className="mt-5">
          <Switch
              checked={concours}
              onChange={setConcours}
              name="concours">
              Voulez-vous participer au concours ?
            </Switch>
          </div>
          <div className="mt-5 rounded-lg border border-slate-300 drop-shadow-md bg-white">
            <div className='p-5'>
            <Label htmlFor="ContactObject">Objet Contact :</Label>
            <Switch
              checked={demandeInfos}
              onChange={setDemandeInfos}
              name="DemandeInfos">
              demande d&apos;informations
            </Switch>
            <Switch
              checked={demandeEchantillons}
              onChange={setDemandeEchantillons}
              name="DemandeEchantillons">
              demande d&apos;échantillons
            </Switch>
            <Switch
              checked={demandePrix}
              onChange={setDemandePrix}
              name="DemandePrix">
              demande de prix
            </Switch>
            <Switch
              checked={demandeDocCom}
              onChange={setDemandeDocCom}
              name="DemandeDocCom">
              demande de documents commerciaux
            </Switch>
            <Switch
              checked={autre}
              onChange={setAutre}
              name="autre">
              autre :
            </Switch>
            {autre ? (
              <div>
                <Field image="/details.png" alt="stylo">
                  <TextareaAutosize
                    id="details"
                    name="details"
                    cacheMeasurements
                    required={autre ? true : false}
                    className="min-h-9 block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Autre"
                  />
                </Field>
              </div>
            ):(
              <></>
            )}
            </div>
          </div>
          <div className="mt-5">
            <Label htmlFor="comment">Remarques éventuelles :</Label>
            <Field image="/details.png" alt="stylo">
            <TextareaAutosize
              id="comment"
              name="comment"
              cacheMeasurements
              className="min-h-9 block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Remarques éventuelles"
            />
            </Field>
          </div>
          {error && 
            <div className="my-10 w-full flex">
                <p className='border-red-500 text-pink-600 '>{error}</p>
            </div>
          }
          <div className="my-10 w-full flex justify-end">
            <button
              disabled={isSubmiting}
              type="submit"
              className={`${isSubmiting ? 'bg-slate-300' : 'bg-filtra hover:bg-hfiltra focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'} rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm`}
            >
              <div style={{flexDirection: "row", display: "flex"}}>
                {isSubmiting ? (
                  <div style={{flexDirection: "row", display: "flex"}}>
                    <Loader/>
                  </div>
                ):(
                  <div style={{flexDirection: "row", display: "flex"}}>
                    <Label className='focus:outline-none focus:ring focus:pointer'>Enregister</Label>
                    <Image
                      src="/plane.png"
                      width={20}
                      height={15}
                      className="rounded-lg ml-3"
                      alt="save"
                    />
                  </div>
                )}
                
              </div>
            </button>
          </div>

      </form>
    </main>
  );
}
