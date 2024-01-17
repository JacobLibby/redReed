import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "firebase/auth";


const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
});

export const auth = getAuth(app);
export default app;

/////MY VERSION IS BELOW//////////////

// function FirebaseDB() {
//   // Import the functions you need from the SDKs you need
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Initialize Firebase
//   const firebaseApp = initializeApp({
//     apiKey: "AIzaSyCK5-tL826__YhJP_el-7p1XIJUYZe1TEM",
//     authDomain: "react-getting-started-a9759.firebaseapp.com",
//     databaseURL:
//       "https://react-getting-started-a9759-default-rtdb.firebaseio.com",
//     projectId: "react-getting-started-a9759",
//     storageBucket: "react-getting-started-a9759.appspot.com",
//     messagingSenderId: "920227935530",
//     appId: "1:920227935530:web:478ac3e1d9c983565c9a53",
//   });

//   const auth = getAuth(firebaseApp);
//   connectAuthEmulator(auth, "http://localhost:9099");

//   function signInWithEmailAndPasswordHelper(auth, loginEmail, loginPassword) {
//     // const userCredential = signInWithEmailAndPassword(
//     //   auth,
//     //   loginEmail,
//     //   loginPassword
//     // );
//     //console.log(userCredential.user);
//     console.log("RAN signInWithEmailAndPasswordHelper");
//   }

//   const firebasedb_var = 0;
// }

// export default FirebaseDB;
