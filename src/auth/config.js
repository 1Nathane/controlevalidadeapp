import * as firebase from 'firebase/app'
import 'firebase/auth'

export const authConfig = firebase.initializeApp({
    apiKey: "AIzaSyBo3PZmF8egjjFvRGfJ7GW9NIz3fv5wRes",
    authDomain: "apptcc-fb0f7.firebaseapp.com",
    projectId: "apptcc-fb0f7",
    storageBucket: "apptcc-fb0f7.appspot.com",
    messagingSenderId: "357763560241",
    appId: "1:357763560241:web:8b42b44c6f839b93213610"
})