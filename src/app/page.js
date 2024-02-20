import Image from "next/image";
import styles from './home.module.css';
import { manrope } from './font.js';

import { Switch } from '@headlessui/react'

export default function Home() {
  const [distribLabo, setDistribLabo] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center  font-mono text-sm lg:flex bg-white place-content-center">
        <div className="bg-white">
          <Image
            src="/link-up.png"
            width={300}
            height={200}
            className="hidden md:block rounded-lg"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <div className="text-center pb-20">
            <p className={`${manrope.className} text-lg`}>The app to keep in touch</p>
          </div>
          <div class="">
            <label for="Nom entreprise" class="block text-sm font-medium leading-6 text-gray-900">Nom entreprise :</label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span class="text-gray-500 sm:text-sm">
                  <Image
                    src="/Nom.png"
                    width={15}
                    height={15}
                    className="hidden md:block rounded-lg"
                    alt="Nom"
                  />
                </span>
              </div>
              <input type="text" name="nameETR" id="nameETR" class="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Nom de l'entreprise"/>
            {/* <div class="absolute inset-y-0 right-0 flex items-center">
              <label for="currency" class="sr-only">Currency</label>
              <select id="currency" name="currency" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                <option>USD</option>
                <option>CAD</option>
                <option>EUR</option>
              </select>
            </div> */}
            </div>
          </div>
          <div class="pt-15">
            <label for="Pays entreprise" class="block text-sm font-medium leading-6 text-gray-900">Pays de l'entreprise :</label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span class="text-gray-500 sm:text-sm">
                  <Image
                    src="/drapeau.png"
                    width={15}
                    height={15}
                    className="hidden md:block rounded-lg"
                    alt="drapeau"
                  />
                </span>
              </div>
              <input type="text" name="paysETR" id="paysETR" class="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Pays de l'entreprise"/>
            {/* <div class="absolute inset-y-0 right-0 flex items-center">
              <label for="currency" class="sr-only">Currency</label>
              <select id="currency" name="currency" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                <option>USD</option>
                <option>CAD</option>
                <option>EUR</option>
              </select>
            </div> */}
            </div>
          </div>
          <div class="pt-15">
            <label for="Nom contact" class="block text-sm font-medium leading-6 text-gray-900">Votre Nom :</label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span class="text-gray-500 sm:text-sm">
                  <Image
                    src="/métier.png"
                    width={15}
                    height={15}
                    className="hidden md:block rounded-lg"
                    alt="métier"
                  />
                </span>
              </div>
              <input type="text" name="surnameC" id="surnameC" class="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Nom du contact"/>
            {/* <div class="absolute inset-y-0 right-0 flex items-center">
              <label for="currency" class="sr-only">Currency</label>
              <select id="currency" name="currency" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                <option>USD</option>
                <option>CAD</option>
                <option>EUR</option>
              </select>
            </div> */}
            </div>
          </div>
          <div class="pt-15">
            <label for="Prénom du contact" class="block text-sm font-medium leading-6 text-gray-900">Votre Prénom :</label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span class="text-gray-500 sm:text-sm">
                  <Image
                    src="/contact.png"
                    width={15}
                    height={15}
                    className="hidden md:block rounded-lg"
                    alt="contact"
                  />
                </span>
              </div>
              <input type="text" name="nameC" id="nameC" class="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Prénom du contact"/>
            {/* <div class="absolute inset-y-0 right-0 flex items-center">
              <label for="currency" class="sr-only">Currency</label>
              <select id="currency" name="currency" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                <option>USD</option>
                <option>CAD</option>
                <option>EUR</option>
              </select>
            </div> */}
            </div>
          </div>
          <div class="pt-15">
            <label for="Fonction contact" class="block text-sm font-medium leading-6 text-gray-900">Votre Fonction :</label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span class="text-gray-500 sm:text-sm">
                  <Image
                    src="/contact.png"
                    width={15}
                    height={15}
                    className="hidden md:block rounded-lg"
                    alt="contact"
                  />
                </span>
              </div>
              <input type="text" name="FC" id="FC" class="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Fonction du contact"/>
            {/* <div class="absolute inset-y-0 right-0 flex items-center">
              <label for="currency" class="sr-only">Currency</label>
              <select id="currency" name="currency" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                <option>USD</option>
                <option>CAD</option>
                <option>EUR</option>
              </select>
            </div> */}
            </div>
          </div>
          <div class="pt-15">
            <label for="Adresse contact" class="block text-sm font-medium leading-6 text-gray-900">Votre Adresse Mail :</label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span class="text-gray-500 sm:text-sm">
                  <Image
                    src="/mail.png"
                    width={15}
                    height={15}
                    className="hidden md:block rounded-lg"
                    alt="mail"
                  />
                </span>
              </div>
              <input type="text" name="MailC" id="MailC" class="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Adresse mail du contact"/>
            {/* <div class="absolute inset-y-0 right-0 flex items-center">
              <label for="currency" class="sr-only">Currency</label>
              <select id="currency" name="currency" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                <option>USD</option>
                <option>CAD</option>
                <option>EUR</option>
              </select>
            </div> */}
            </div>
          </div>
          <div class="pt-15">
            <label for="Telephone contact" class="block text-sm font-medium leading-6 text-gray-900">Votre Numéro de Téléphone :</label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span class="text-gray-500 sm:text-sm">
                  <Image
                    src="/telephone.png"
                    width={15}
                    height={15}
                    className="hidden md:block rounded-lg"
                    alt="telephone"
                  />
                </span>
                <span class="text-gray-500 sm:text-sm">
                  <label class="ml-1">+</label>
                </span>
              </div>
              <input type="text" name="TelC" id="TelC" class="block w-full rounded-md border-0 py-1.5 pl-11 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Numéro de téléphone du contact"/>
            {/* <div class="absolute inset-y-0 right-0 flex items-center">
              <label for="currency" class="sr-only">Currency</label>
              <select id="currency" name="currency" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                <option>USD</option>
                <option>CAD</option>
                <option>EUR</option>
              </select>
            </div> */}
            </div>
          </div>
          <div class="pt-15">

          <Switch
                checked={distribLabo}
                onChange={setDistribLabo}
                className={classNames(
                  distribLabo ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Distributeur de matériel de Laboratoire</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    distribLabo ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>




            {/* <label for="Distrib Labo" class="block text-sm font-medium leading-6 text-gray-900"></label>
            <div class="relative mt-2 rounded-md shadow-sm">
            <div class="flex gap-x-4 sm:col-span-2">
        <div class="flex h-6 items-center">
        <label class="text-sm leading-6 text-gray-600" id="switch-1-label">
          NON
        </label>
          <button type="button" class="ml-4 bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
            
            
            <span aria-hidden="true" class="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
          </button>
        </div>
        <label class="text-sm leading-6 text-gray-600" id="switch-1-label">
          OUI
        </label>
      </div>
    
            </div> */}
          </div>
          <div class="pt-15">
            <label for="ColabFitratech" class="block text-sm font-medium leading-6 text-gray-900">Avez-vous déjà collaboré avec Filtratech ?</label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span class="text-gray-500 sm:text-sm">
                  <Image
                    src="/filtre.png"
                    width={15}
                    height={15}
                    className="hidden md:block rounded-lg"
                    alt="filtre"
                  />
                </span>
              </div>
              <input type="text" name="ColabFiltratech" id="ColabFiltratech" class="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Oui/Non"/>
            {/* <div class="absolute inset-y-0 right-0 flex items-center">
              <label for="currency" class="sr-only">Currency</label>
              <select id="currency" name="currency" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                <option>USD</option>
                <option>CAD</option>
                <option>EUR</option>
              </select>
            </div> */}
            </div>
          </div>
          <div class="pt-15">
            <label for="Participation Concours" class="block text-sm font-medium leading-6 text-gray-900">Voulez-vous participer au concours ?</label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span class="text-gray-500 sm:text-sm">
                  <Image
                    src="/concours.png"
                    width={15}
                    height={15}
                    className="hidden md:block rounded-lg"
                    alt="concours"
                  />
                </span>
              </div>
              <input type="text" name="ConcoursP" id="ConcoursP" class="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Oui/Non"/>
            {/* <div class="absolute inset-y-0 right-0 flex items-center">
              <label for="currency" class="sr-only">Currency</label>
              <select id="currency" name="currency" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                <option>USD</option>
                <option>CAD</option>
                <option>EUR</option>
              </select>
            </div> */}
            </div>
          </div>
          <div class="pt-15">
            <label for="ObjetContact" class="block text-sm font-medium leading-6 text-gray-900">Objet Contact :</label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span class="text-gray-500 sm:text-sm">
                  <Image
                    src="/stylo.png"
                    width={15}
                    height={15}
                    className="hidden md:block rounded-lg"
                    alt="stylo"
                  />
                </span>
              </div>
              <input type="text" name="ObjC" id="ObjC" class="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="demande infos/demande échantillo/demande prix/demande de doc commercials/autre"/>
            {/* <div class="absolute inset-y-0 right-0 flex items-center">
              <label for="currency" class="sr-only">Currency</label>
              <select id="currency" name="currency" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                <option>USD</option>
                <option>CAD</option>
                <option>EUR</option>
              </select>
            </div> */}
            </div>
          </div>
        </div>
      {/* <div className={styles.shape} /> */}
      {/* <p>LOUIS</p> */}
      {/* <Image
        src="/link-up.png"
        width={300}
        height={300}
        className="hidden md:block rounded-lg"
        alt="Screenshots of the dashboard project showing desktop version"
      /> */}
      </div>
    </main>
  );
}
