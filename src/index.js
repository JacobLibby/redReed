import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { createRoot } from "react-dom/client";
import React from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";


import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./store/favorites-context";


import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
} from "firebase/auth";


// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyCK5-tL826__YhJP_el-7p1XIJUYZe1TEM",
//   authDomain: "react-getting-started-a9759.firebaseapp.com",
//   databaseURL:
//     "https://react-getting-started-a9759-default-rtdb.firebaseio.com",
//   projectId: "react-getting-started-a9759",
//   storageBucket: "react-getting-started-a9759.appspot.com",
//   messagingSenderId: "920227935530",
//   appId: "1:920227935530:web:478ac3e1d9c983565c9a53",
// });

// const auth = getAuth(firebaseApp);
// connectAuthEmulator(auth, "http://localhost:9099");

function signInWithEmailAndPasswordHelper(auth, loginEmail, loginPassword) {
  // const userCredential = signInWithEmailAndPassword(
  //   auth,
  //   loginEmail,
  //   loginPassword
  // );
  //console.log(userCredential.user);
  console.log("RAN signInWithEmailAndPasswordHelper");
}

const firebasedb_var = 0;

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );



const root = createRoot(document.getElementById("root"));
root.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>
);
