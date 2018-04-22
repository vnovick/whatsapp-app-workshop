import * as firebase from "firebase";

export const initialize = () => firebase.initializeApp({
  apiKey: "AIzaSyC7lVcKUG648uV2vJuSNdWT4QrLSMnXcS8",
  authDomain: "devexperienceworkshop.firebaseapp.com",
  databaseURL: "https://devexperienceworkshop.firebaseio.com",
  projectId: "devexperienceworkshop",
  storageBucket: "devexperienceworkshop.appspot.com",
  messagingSenderId: "379805428343"
})


export const setListener = (endpoint, updaterFn) => {
    firebase.database().ref(endpoint).on('value', updaterFn);
    return () => firebase.database().ref(endpoint).off();
}

export const pushData = (endpoint, data) => {
  return firebase.database().ref(endpoint).push(data);
}
