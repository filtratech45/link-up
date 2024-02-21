'use client';

import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion"
import TextareaAutosize from 'react-textarea-autosize';
import { setTimeout } from 'timers';

import Label from './ui/Label';
import Field from './ui/Field';
import Switch from './ui/Switch';
import Loader from './ui/loader';
// import styles from './home.module.css';
import { manrope } from './font.js';
import { COUNTRIES } from '../lib/countries';
import CountrySelector from '../lib/selector';


import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


export default function Home() {
  const [distribLabo, setDistribLabo] = React.useState(false);
  const [colabFitratech, setColabFitratech] = React.useState(false);
  const [concours, setConcours] = React.useState(false);
  const [isSubmiting, setSubit] = React.useState(false);
  const [demandeInfos, setDemandeInfos] = React.useState(false);
  const [demandeEchantillons, setDemandeEchantillons] = React.useState(false);
  const [demandePrix, setDemandePrix] = React.useState(false);
  const [demandeDocCom, setDemandeDocCom] = React.useState(false);
  const [autre, setAutre] = React.useState(false);
  const [phone, setPhone] = React.useState()

  const [isOpen, setIsOpen] = React.useState(false);
  const [country, setCountry] = React.useState('FR');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <form
        onSubmit={(event) => {
          console.log("submit");
          setSubit(true);
          event.preventDefault();
          event.stopPropagation();
          setTimeout(()=> {
            setSubit(false);
            //  window.location.href="http://localhost:3000/dashboard/Customers"
            }, 3000)
        }}
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
            <Label htmlFor="nameETR">Nom entreprise :</Label>
            <Field image="/Nom.png" alt="Nom">
              <input required type="text" name="nameETR" id="nameETR" className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Nom de l'entreprise" />
            </Field>
          </div>
          <div className="mt-5">
            <Label htmlFor="paysETR">Pays de l'entreprise :</Label>
            <Field image="/drapeau.png" alt="drapeau">
              {/* <input required type="text" name="paysETR" id="paysETR" className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Pays de l'entreprise" /> */}
              
    <CountrySelector
      id="countries"
      open={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
      onChange={(val) => setCountry(val)}
      selectedValue={COUNTRIES.find(option => option.value === country)}
    />
            </Field>
          </div>
          <div className="mt-5">
            <Label htmlFor="surnameC">Votre Nom :</Label>
            <Field image="/métier.png" alt="métier">
              <input required type="text" name="surnameC" id="surnameC" className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Nom du contact" />
            </Field>
          </div>
          <div className="mt-5">
            <Label htmlFor="nameC">Votre Prénom :</Label>
            <Field image="/contact.png" alt="contact">
              <input required type="text" name="nameC" id="nameC" className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Prénom du contact" />
            </Field>
          </div>
          <div className="mt-5">
            <Label htmlFor="FC">Votre Fonction :</Label>
            <Field image="/contact.png" alt="contact">
              <input required type="text" name="FC" id="FC" className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Fonction du contact"/>
            </Field>
          </div>
          <div className="mt-5">
            <Label htmlFor="MailC">Votre Adresse Mail :</Label>
            <Field image="/mail.png" alt="mail">
              <input required type="email" name="MailC" id="MailC" className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Adresse mail du contact"/>
            </Field>
          </div>
          <div className="mt-5">
            <Label htmlFor="TelC">Votre Numéro de Téléphone (sans espaces) :</Label>
            <Field>
            <PhoneInput
              placeholder="Numéro de télépone du contact"
              value={phone}
              onChange={setPhone}
              className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              // placeholder="Numéro de téléphone du contact"
            />
              {/* <input required type="tel" pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$" name="TelC" id="TelC" className="block w-full rounded-md border-0 py-1.5 pl-11 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Numéro de téléphone du contact"/> */}
            </Field>
          </div>
          <div className="mt-5">
            <Switch
              name="distribLabo"
              checked={distribLabo}
              onChange={setDistribLabo}
            >
              Êtes-vous un distributeur de matériel de Laboratoire ?
            </Switch>
          </div>
          <div className="mt-5">
            <Switch
              checked={colabFitratech}
              onChange={setColabFitratech}
              name="colabFitratech">
              Avez-vous déjà collaboré avec Filtratech ?
            </Switch>
          </div>
          <div className="mt-5">
          <Switch
              checked={concours}
              onChange={setConcours}
              name="ConcoursP">
              Voulez-vous participer au concours ?
            </Switch>
          </div>
          <div className="mt-5 rounded-lg border border-slate-300 drop-shadow-md bg-white">
            <div className='p-5'>
            <Label htmlFor="ObjetContact">Objet Contact :</Label>
            <Switch
              checked={demandeInfos}
              onChange={setDemandeInfos}
              name="DemandeInfos">
              demande d'informations
            </Switch>
            <Switch
              checked={demandeEchantillons}
              onChange={setDemandeEchantillons}
              name="DemandeEchantillons">
              demande d'échantillons
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
                <Field image="/stylo.png" alt="stylo">
                  <TextareaAutosize
                    required={autre ? true : false}
                    cacheMeasurements
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
            <Label htmlFor="RemarqE">Remarques éventuelles :</Label>
            <Field image="/stylo.png" alt="stylo">
            <TextareaAutosize
              cacheMeasurements
              className="min-h-9 block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Remarques éventuelles"
            />
            </Field>
          </div>
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
                      src="/avion2.png"
                      width={20}
                      height={15}
                      className="rounded-lg ml-3"
                      alt="avion"
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
