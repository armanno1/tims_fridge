import firebase from 'firebase/app';
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyDnDl2o1rMCvvPXG2A9MCErJYtE_Fq0lxo",
    authDomain: "tims-fridge.firebaseapp.com",
    projectId: "tims-fridge",
    storageBucket: "tims-fridge.appspot.com",
    messagingSenderId: "499379704905",
    appId: "1:499379704905:web:aad285f368a83f4c0d9b98",
    measurementId: "G-6SG4VWFC7N"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [{
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID, 
        disableSignUp: {status: true}
    }
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  };

export { projectStorage, projectFirestore, timestamp, uiConfig }