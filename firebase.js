import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBNcj6bQ4LK5JMfA2C9b8WQPSvvyxtGQHE",
  authDomain: "hrm-asthetic-haven.firebaseapp.com",
  databaseURL: "https://hrm-asthetic-haven-default-rtdb.firebaseio.com",
  projectId: "hrm-asthetic-haven",
  storageBucket: "hrm-asthetic-haven.appspot.com",
  messagingSenderId: "24286036238",
  appId: "1:24286036238:web:a81cf0469995d31b7e175f",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
