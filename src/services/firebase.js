import * as firebase from "firebase";

export const initialize = () => firebase.initializeApp({
  apiKey: "AIzaSyBtMmI7ORq_T7O-hH3KgNesG7OWautFAFA",
    authDomain: "whatsapp-99f23.firebaseapp.com",
    databaseURL: "https://whatsapp-99f23.firebaseio.com",
    projectId: "whatsapp-99f23",
    storageBucket: "",
    messagingSenderId: "781231398986"
})


export const setListener = (endpoint, updaterFn) => {
    firebase.database().ref(endpoint).on('value', updaterFn);
    return () => firebase.database().ref(endpoint).off();
}

export const pushData = (endpoint, data) => {
  return firebase.database().ref(endpoint).push(data);
}