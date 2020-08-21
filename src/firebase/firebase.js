import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCwdN5WoR6DFOZyK2saBXV0DxctmzBNWAE",
  authDomain: "teentin-209d4.firebaseapp.com",
  databaseURL: "https://teentin-209d4.firebaseio.com",
  projectId: "teentin-209d4",
  storageBucket: "teentin-209d4.appspot.com",
  messagingSenderId: "879504040797",
  appId: "1:879504040797:web:9768436eaf065bc6543eb4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const providerFb = new firebase.auth.FacebookAuthProvider();

export { auth, provider, providerFb };
export default db;
