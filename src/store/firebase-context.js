import { createContext, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  AuthErrorCodes,
  useEmulator,
} from "firebase/auth";

const FirebaseContext = createContext({
  firebaseAppInfo: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
  },
});

export function FirebaseContextProvider(props) {
//   async function setupEmulators(auth) {
//     const authUrl = "http://localhost:9099";
//     await fetch(authUrl);
//     connectAuthEmulator(auth, "http://localhost:9099", {
//       disableWarnings: true,
//     });
//     // why? to make sure that emulator are loaded
//   }

//   function initFirebaseApp(firebaseAppInfo) {
//     const firebaseApp = initializeApp(firebaseAppInfo);
//     return firebaseApp;
//   }

 
}

// const auth = getAuth(firebaseApp);

// setupEmulators(auth);
export default FirebaseContext;
