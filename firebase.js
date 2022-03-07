import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_-d-DDQq0V39sKLDRV49UiGaiFL96fTY",
  authDomain: "online-taxi-booking-a4831.firebaseapp.com",
  projectId: "online-taxi-booking-a4831",
  storageBucket: "online-taxi-booking-a4831.appspot.com",
  messagingSenderId: "40186686254",
  appId: "1:40186686254:web:215893a6bdb3a88ecae8bf",
  measurementId: "G-T4YJ9MHJZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }