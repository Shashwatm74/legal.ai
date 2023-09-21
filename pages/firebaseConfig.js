
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB_kygfeNS_DJP1QKiCpEypWnyWAPr5uOI",
  authDomain: "sih-legalai.firebaseapp.com",
  projectId: "sih-legalai",
  storageBucket: "sih-legalai.appspot.com",
  messagingSenderId: "744643027508",
  appId: "1:744643027508:web:7687641bf779d1e9d52061",
  measurementId: "G-20F21HN5Z4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
