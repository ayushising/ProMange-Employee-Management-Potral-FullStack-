import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvxsRQK1XOrO5SacDeOC_aBC1LuH_dl-8",
  authDomain: "saral-b28f4.firebaseapp.com",
  projectId: "saral-b28f4",
  storageBucket: "saral-b28f4.appspot.com",
  messagingSenderId: "376368575296",
  appId: "1:376368575296:web:570a3a5836670d031500a5",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
