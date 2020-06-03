import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDbYdDah8T2eH1em1ZWKOtplXg-0EQPUdE",
    authDomain: "carsociate.firebaseapp.com",
    databaseURL: "https://carsociate.firebaseio.com",
    projectId: "carsociate",
    storageBucket: "carsociate.appspot.com",
    messagingSenderId: "404017767016",
    appId: "1:404017767016:web:26abf2941a28ca09c411dd"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;