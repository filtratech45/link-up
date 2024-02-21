'use client';

import React from 'react';
import Image from "next/image";


import Label from './ui/Label';
import Field from './ui/Field';
import Switch from './ui/Switch';
// import styles from './home.module.css';
import { manrope } from './font.js';

export default function Home() {
  const [distribLabo, setDistribLabo] = React.useState(false);
  const [colabFitratech, setColabFitratech] = React.useState(false);
  const [concours, setConcours] = React.useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex bg-white place-content-center">
        <div className="bg-white mb-12">
          <Image
            src="/link-up.png"
            width={300}
            height={200}
            className="hidden md:block rounded-lg"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <div className="text-center pb-8">
            <p className={`${manrope.className} text-gray-500 text-lg`}>The app to keep in touch</p>
          </div>
          <div class="pt-2">
            <Label for="nameETR">Nom entreprise :</Label>
            <Field image="/Nom.png" alt="Nom">
              <input type="text" name="nameETR" id="nameETR" class="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Nom de l'entreprise" />
            </Field>
          </div>
          <div class="pt-2">
            <Label for="paysETR">Pays de l'entreprise :</Label>
            <Field image="/drapeau.png" alt="drapeau">
              <input type="text" name="paysETR" id="paysETR" class="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Pays de l'entreprise" />
            </Field>
          </div>
          <div class="pt-2">
            <Label for="surnameC">Votre Nom :</Label>
            <Field image="/métier.png" alt="métier">
              <input type="text" name="surnameC" id="surnameC" class="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Nom du contact" />
            </Field>
          </div>
          <div class="pt-2">
            <Label for="nameC">Votre Prénom :</Label>
            <Field image="/contact.png" alt="contact">
              <input type="text" name="nameC" id="nameC" class="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Prénom du contact" />
            </Field>
          </div>
          <div class="pt-2">
            <Label for="FC">Votre Fonction :</Label>
            <Field image="/contact.png" alt="contact">
              <input type="text" name="FC" id="FC" class="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Fonction du contact"/>
            </Field>
          </div>
          <div class="pt-2">
            <Label for="MailC">Votre Adresse Mail :</Label>
            <Field image="/mail.png" alt="mail">
              <input type="text" name="MailC" id="MailC" class="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Adresse mail du contact"/>
            </Field>
          </div>
          <div class="pt-2">
            <Label for="TelC">Votre Numéro de Téléphone :</Label>
            <Field image="/telephone.png" alt="telephone" extraImage={<Label class="ml-1">+</Label>}>
              <input type="text" name="TelC" id="TelC" class="block w-full rounded-md border-0 py-1.5 pl-11 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Numéro de téléphone du contact"/>
            </Field>
          </div>
          <div class="pt-2">
            <Switch
              name="distribLabo"
              checked={distribLabo}
              onChange={setDistribLabo}
            >
              Êtes-vous un distributeur de matériel de Laboratoire ?
            </Switch>
          </div>
          <div class="pt-2">
            <Switch
              checked={colabFitratech}
              onChange={setColabFitratech}
              name="colabFitratech">
              Avez-vous déjà collaboré avec Filtratech ?
            </Switch>
          </div>
          <div class="pt-2">
          <Switch
              checked={concours}
              onChange={setConcours}
              name="ConcoursP">
              Voulez-vous participer au concours ?
            </Switch>
          </div>
          <div class="pt-2">
            <Label for="ObjetContact">Objet Contact :</Label>
            <Field image="/stylo.png" alt="stylo">
              <textarea name="ObjC" id="ObjC" class="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="demande infos/demande échantillo/demande prix/demande de doc commercials/autre" />
            </Field>
          </div>
        </div>
      </div>
    </main>
  );
}
