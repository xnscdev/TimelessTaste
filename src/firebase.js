import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCWWDySA7h4p3e5PW5zs2dYeRiGzgKQ2I0",
    authDomain: "timelesstaste-902d7.firebaseapp.com",
    projectId: "timelesstaste-902d7",
    storageBucket: "timelesstaste-902d7.appspot.com",
    messagingSenderId: "875318760106",
    appId: "1:875318760106:web:d3dd8653fc905aec60f6d3",
    measurementId: "G-SVYVSJJCWZ",
};

let app;
export let auth;
export let db;
export let analytics;

export function initFirebase() {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    analytics = getAnalytics(app);
}
