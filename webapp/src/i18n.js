import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
      translation: {
        "navBarLanguageEn": "English",
        "navBarLanguageEs": "Spanish",
        "navBarLanguage": "Language",
        "navBarSignUp": "Sign up",
        "navBarLogIn": "Log in",
        "navBarLogOut": "Log out",
        "navBarProfile": "Profile",
        "navBarAbout": "About us",
        "navBarMap": "Map",
          "navBarLocations": "Locations",
        "InitialWelcomeMessage": "You are logged out of your POD.",
        "registerFormTitle": "Get your SOLID pod"
        }
    },
    es: {
      translation: {
        "navBarLanguageEn": "Inglés",
        "navBarLanguageEs": "Español",
        "navBarLanguage": "Idioma",
        "navBarSignUp": "Registrarse",
        "navBarLogIn": "Identificarse",
        "navBarLogOut": "Desconectarse",
        "navBarProfile": "Perfil",
        "navBarAbout": "Acerca de nosotros",
        "navBarMap": "Mapa",
          "navBarLocations": "Ubicaciones",
        "InitialWelcomeMessage": "Te has desvinculado de tu POD.",
        "registerFormTitle": "Consigue SOLID pod"
      }
    }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;