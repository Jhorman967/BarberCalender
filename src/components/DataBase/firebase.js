
import { initializeApp, registerVersion } from "firebase/app";
import {getAuth} from "firebase/auth";
import { Register } from "../register";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFo8RXvl20SNP_jS-2hmTTXWcyxQdXGyc",
  authDomain: "barbershop-ba951.firebaseapp.com",
  projectId: "barbershop-ba951",
  storageBucket: "barbershop-ba951.appspot.com",
  messagingSenderId: "275790715201",
  appId: "1:275790715201:web:c5047f72eb96657f3a29c0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
