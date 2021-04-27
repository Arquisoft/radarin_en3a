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
        "navBarPlaceHolder": "Enter your POD user here",
          "navBarLocations": "Locations",
          "navBarFriends": "Friends",
          "navBarHelp": "Help",
        "InitialWelcomeMessage": "You are logged out of your POD.",
        "registerFormTitle": "Get your SOLID pod",
        "InitSession": "Session started as: ",
        "AdminDelete": "Delete",
        "AdminList": "Users List",
          "LocationNotAvailable": "Geolocation is not available at the moment",
          "GetCurrentLocation": "Get current location",
          "AddCurrentLocation": "Add current location to POD",
          "lat": "Latitude",
          "long": "Longitude",
          "deg":"deg",
          "timestamp": "Timestamp:",
          "TagLocation": "Add tag to your location",
         "YourLocations": "Your locations",
          "CreatedAt": "Created at",
          "LocationCoordinates": "Location coordinates",
          "Tag":"Tag",
          "LocationCount1": "You currently have ",
          "LocationCount2": " locations stored in your POD",
          "Delete":"Delete",
          "Profile":"Profile",
          "FriendList":"Friend list ",
          "MapOfLocations":"Map of your locations: ",
          "LoggedInAs": "You are logged in as: ",
          "WebIdIs":"Your webID is: ",
          "Welcome":"Welcome!",
          "LogInPlaceholder":"Enter your POD username here",
          "LogIn": "Log In",
          "DefaultProfilePic": "Default profile pic for users",
          "MessageAdmin": "No users currently registered",
          "FindNearFriends": "Find near friends",
          "navBarService" : "Choose POD",
          "navBarSolid" :"Solid",
          "navBarInrupt" :"Inrupt",

          "helpLanguageTitle":"Language",
          "helpLanguage":"placeholder",
          "helpLogInTitle":"How to log in and out",
          "helpLogIn":"placeholder",
          "helpLocationSaveTitle":"How to save your location ",
          "helpLocationSave":"placeholder",
          "helpLocationCheckTitle":"How to see your locations",
          "helpLocationCheck":"placeholder",
          "helpFriendsTitle":"How to see your friends list",
          "helpFriends":"placeholder",
          "helpNotificationsTitle":"Notifications",
          "helpNotifications":"placeholder"
        }
    },
    es: {
      translation: {
        "navBarLanguageEn": "Inglés",
        "navBarLanguageEs": "Español",
        "navBarLanguage": "Idioma",
        "navBarSignUp": "Registrarse",
        "navBarLogIn": "Iniciar sesión",
        "navBarLogOut": "Desconectarse",
        "navBarProfile": "Perfil",
        "navBarAbout": "Acerca de nosotros",
        "navBarMap": "Mapa",
        "navBarPlaceHolder": "Introduzca su usuario del POD aquí",
          "navBarLocations": "Ubicaciones",
          "navBarFriends": "Amigos",
          "navBarHelp": "Ayuda",
        "InitialWelcomeMessage": "Te has desvinculado de tu POD.",
        "registerFormTitle": "Consigue SOLID pod",
        "InitSession": "Sesión iniciada como: ",
        "AdminDelete": "Borrar",
        "AdminList": "Lista de Usuarios",
          "LocationNotAvailable": "La localización no está disponible actualmente",
          "GetCurrentLocation": "Obtener ubicación actual",
          "AddCurrentLocation": "Añadir ubicación actual al POD",
          "lat": "Latitud",
          "long": "Longitud",
          "deg":"grados",
          "timestamp": "Fecha y hora:",
          "TagLocation": "Añadir etiqueta a tu ubicación",
          "YourLocations": "Tus ubicaciones",
          "CreatedAt": "Añadida en",
          "LocationCoordinates": "Coordenadas de la ubicación",
          "Tag":"Etiqueta",
          "LocationCount1": "Tienes ",
          "LocationCount2": " ubicaciones almacenadas en tu POD",
          "Delete":"Eliminar",
          "Profile":"Perfil",
          "FriendList":"Lista de amigos ",
          "MapOfLocations":"Mapa de tus ubicaciones: ",
          "LoggedInAs": "Iniciaste sesión como: ",
          "WebIdIs":"Tu webID es: ",
          "Welcome":"Bienvenido!",
          "LogInPlaceholder":"Introduce aquí el nombre de tu POD",
          "LogIn": "Iniciar sesión",
          "DefaultProfilePic": "Icono por defecto para usuarios",
          "MessageAdmin": "Ningún usuario registrado",
          "FindNearFriends": "Encuentra amigos cercanos",
          "navBarService" : "Elegir POD",
          "navBarSolid" :"Solid",
          "navBarInrupt" :"Inrupt",

          "helpLanguageTitle":"Lenguaje",
          "helpLanguage":"placeholder",
          "helpLogInTitle":"Cómo iniciar y salir de la sesión",
          "helpLogIn":"placeholder",
          "helpLocationSaveTitle":"Cómo guardar la localización",
          "helpLocationSave":"placeholder",
          "helpLocationCheckTitle":"Cómo ver las localizaciones guardadas",
          "helpLocationCheck":"placeholder",
          "helpFriendsTitle":"Cómo ver tu lista de amigos",
          "helpFriends":"placeholder",
          "helpNotificationsTitle":"Notificaciones",
          "helpNotifications":"placeholder"
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
