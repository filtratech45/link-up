'use client';

import React from 'react';
import Image from "next/image";
import PhoneInput from 'react-phone-number-input';
import TextareaAutosize from 'react-textarea-autosize';
import { addDoc, query, where, getDocs } from "firebase/firestore"; 

import 'react-phone-number-input/style.css';

import Label from '/src/ui/Label';
import Field from '/src/ui/Field';
import Switch from '/src/ui/Switch';
import Loader from '/src/ui/loader';
import { COUNTRIES } from '/src/lib/countries';
import CountrySelector from '/src/lib/selector';
import { prospectsCollection } from '/src/lib/firebase';

import { getDictionary, getCountryFromLocale } from '/src/dictionaries';

const LinkUp = ({ onSubmit, params: { lang }}) => {
  const dict = getDictionary(lang).form;
  // Form
  const [isSupplier, setIsSupplier] = React.useState(false);
  const [isCollabFiltratech, setIsCollabFitratech] = React.useState(false);
  const [concours, setConcours] = React.useState(false);
  const [isSubmiting, setIsSubmiting] = React.useState(false);
  const [demandeInfos, setDemandeInfos] = React.useState(false);
  const [demandeEchantillons, setDemandeEchantillons] = React.useState(false);
  const [demandePrix, setDemandePrix] = React.useState(false);
  const [demandeDocCom, setDemandeDocCom] = React.useState(false);
  const [other, setOther] = React.useState(false);
  const [phone, setPhone] = React.useState();
  // country selector
  const [country, setCountry] = React.useState(getCountryFromLocale(lang));
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
        other: (other && event.target.details?.value) || null,
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
    else onSubmit();
  }

  return (
      <form
        onSubmit={submitHandler}
        action="#"
        className='font-mono'
      >
          <div className="mt-5">
            <Label htmlFor="company">{dict.company.label}</Label>
            <Field image="/company.png" alt="Nom">
              <input required type="text" name="company" id="company" className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder={dict.company.placeholder} />
            </Field>
          </div>
          <div className="mt-5">
            <Label htmlFor="country">{dict.country.label}</Label>
            <Field image="/country.png" alt={dict.country.alt}>
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
            <Label htmlFor="surname">{dict.surname.label}</Label>
            <Field image="/surname.png" alt="métier">
              <input required type="text" name="surname" id="surname" className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder={dict.surname.placeholder} />
            </Field>
          </div>
          <div className="mt-5">
            <Label htmlFor="name">{dict.name.label}</Label>
            <Field image="/name.png" alt="contact">
              <input required type="text" name="name" id="name" className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder={dict.name.placeholder} />
            </Field>
          </div>
          <div className="mt-5">
            <Label htmlFor="role">{dict.role.label}</Label>
            <Field image="/name.png" alt="contact">
              <input required type="text" name="role" id="role" className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder={dict.role.placeholder} />
            </Field>
          </div>
          <div className="mt-5">
            <Label htmlFor="email">{dict.email.label}</Label>
            <Field image="/email.png" alt="mail">
              <input required type="email" name="email" id="email" onChange={handleEmailChange} className="invalid:border-red-500 invalid:text-pink-600 block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder={dict.email.placeholder} />
            </Field>
          </div>
          <div className="mt-5">
            <Label htmlFor="phone">{dict.phone.label}</Label>
            <Field>
              <PhoneInput
                id="phone"
                value={phone}
                onChange={setPhone}
                placeholder={dict.phone.placeholder}
                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {/* <input required type="tel" pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$" name="phone" id="phone" className="block w-full rounded-md border-0 py-1.5 pl-11 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Numéro de téléphone du contact"/> */}
            </Field>
          </div>
          <div className="mt-5">
            <Switch
              checked={isSupplier}
              onChange={setIsSupplier}
              name="isSupplier">
              {dict.isSupplier.label}
            </Switch>
          </div>
          <div className="mt-5">
            <Switch
              checked={isCollabFiltratech}
              onChange={setIsCollabFitratech}
              name="isCollabFiltratech">
              {dict.isCollabFiltratech.label}
            </Switch>
          </div>
          <div className="mt-5">
           <Switch
              checked={concours}
              onChange={setConcours}
              name="concours">
              {dict.concours.label}
            </Switch>
          </div>
          <div className="mt-5 rounded-lg border border-slate-300 drop-shadow-md bg-white">
            <div className='p-5'>
              <Label htmlFor="ContactObject">{dict.ContactObject}</Label>
              <Switch
                checked={demandeInfos}
                onChange={setDemandeInfos}
                name="DemandeInfos">
                {dict.DemandeInfos.label}
              </Switch>
              <Switch
                checked={demandeEchantillons}
                onChange={setDemandeEchantillons}
                name="DemandeEchantillons">
                {dict.DemandeEchantillons.label}
              </Switch>
              <Switch
                checked={demandePrix}
                onChange={setDemandePrix}
                name="DemandePrix">
                {dict.DemandePrix.label}
              </Switch>
              <Switch
                checked={demandeDocCom}
                onChange={setDemandeDocCom}
                name="DemandeDocCom">
                {dict.DemandeDocCom.label}
              </Switch>
              <Switch
                checked={other}
                onChange={setOther}
                name="other">
                {dict.other.label}
              </Switch>
              {other ? (
                <div>
                  <Field image="/details.png" alt="stylo">
                    <TextareaAutosize
                      id="details"
                      name="details"
                      cacheMeasurements
                      required={other ? true : false}
                      className="min-h-9 block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder={dict.details.label}
                    />
                  </Field>
                </div>
              ):(
                <></>
              )}
            </div>
          </div>
          <div className="mt-5">
            <Label htmlFor="comment">{dict.comment.label}</Label>
            <Field image="/details.png" alt="stylo">
            <TextareaAutosize
              id="comment"
              name="comment"
              cacheMeasurements
              className="min-h-9 block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder={dict.comment.placeholder}
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
                    <Label className='focus:outline-none focus:ring focus:pointer'>{dict.save}</Label>
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
  );
}

export default LinkUp;