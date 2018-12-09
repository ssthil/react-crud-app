import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
/*
const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
};
*/
var config = {
  apiKey: 'AIzaSyB3Ia1r28X_zljNEpgnN7pWRttyboY3DuE',
  authDomain: 'react-crud-app-34314.firebaseapp.com',
  databaseURL: 'https://react-crud-app-34314.firebaseio.com',
  projectId: 'react-crud-app-34314',
  storageBucket: 'react-crud-app-34314.appspot.com',
  messagingSenderId: '637257725391'
};

var firebase = app.initializeApp(config);

export default firebase;
