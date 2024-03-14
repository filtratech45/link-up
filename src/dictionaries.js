import en from '/src/dictionaries/en.json';
import fr from '/src/dictionaries/fr.json';
import es from '/src/dictionaries/es.json';


export const defaultLocale = 'en';
export const dictionaries = {
  en,
  fr,
  es,
}
 
export const getDictionary = (locale) => dictionaries.hasOwnProperty(locale) ? dictionaries[locale] : dictionaries[defaultLocale];

export function getCountryFromLocale(locale) {
  switch(`${locale}`.substring(0, 2)) {
    case 'fr':
      return "FR";
    case 'es':
      return 'ES';
    case 'en':
    default:
      return 'GB';
  }
    // return match(locale, COUNTRIES.map(({ value }) => value), 'GB');
}
