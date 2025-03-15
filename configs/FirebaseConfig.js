// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwjPe3uLw8faXo9cEPHpsTiK9h0eGZ6hI",
  authDomain: "retink-922c0.firebaseapp.com",
  projectId: "retink-922c0",
  storageBucket: "retink-922c0.firebasestorage.app",
  messagingSenderId: "59378479286",
  appId: "1:59378479286:web:963b6fc204c444649db617",
  measurementId: "G-QPVH8Q7WCJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
