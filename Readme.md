# Whatsapp Workshop

## Get avatars from Random User API

https://randomuser.me/

## Setup firebase account or use existing

https://firebase.google.com/

Create real time database

## Create firebase service

`npm install firebase -- save`
 
 or
 
 `yarn add firebase`
 
 create `/src/services/firebase.js` file
 
 Add the following code to the file
 
 ```javascript
export const initialize = () => firebase.initializeApp({
  apiKey: "AIzaSyBtMmI7ORq_T7O-hH3KgNesG7OWautFAFA",
  authDomain: "whatsapp-99f23.firebaseapp.com",
  databaseURL: "https://whatsapp-99f23.firebaseio.com",
  projectId: "whatsapp-99f23",
  storageBucket: "whatsapp-99f23.appspot.com",
  messagingSenderId: "781231398986"
})

// helper function to set listeners
export const setListener = (endpoint, updaterFn) => {
    firebase.database().ref(endpoint).on('value', updaterFn);
    return () => firebase.database().ref(endpoint).off();
}

// push data to firebase endpoint
export const pushData = (endpoint, data) => {
  return firebase.database().ref(endpoint).push(data);
}
```

add the following code to `api.js`

```javascript
export const getMessages = (updaterFn) => setListener('messages', (snapshot) => {
  if (snapshot){
    updaterFn(snapshot);
  }
});


export const postMessage = (message) => {
    if (Boolean(message)) {
        return pushData('messages', {
            userId: USER_ID,
            message
        })
    }
}

```

Update your ChatView component to subscribe to messages