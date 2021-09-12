import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBPlOX2ypEClUQio0xV3Fqc8PfIfsObchI',
  authDomain: 'react-messenger-b2e6f.firebaseapp.com',
  projectId: 'react-messenger-b2e6f',
  storageBucket: 'react-messenger-b2e6f.appspot.com',
  messagingSenderId: '152213607737',
  appId: '1:152213607737:web:61bfdb9f3ae32a317184e8',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
export const firestore = firebaseApp.firestore();

export const messagesCollection = firestore.collection('messages');
export const messagesQuery = messagesCollection.orderBy('createdAt').limit(25);
