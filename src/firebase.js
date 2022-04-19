import firebase from 'firebase/app';

import 'firebase/auth';

const firebaseConfig = {
   apiKey: "AIzaSyDfDZ6Ekj7_dovkVlR6u3iv3DIJImT0Tsg",
   authDomain: "krypto-8e6ed.firebaseapp.com",
   projectId: "krypto-8e6ed",
   storageBucket: "krypto-8e6ed.appspot.com",
   messagingSenderId: "710537258495",
   appId: "1:710537258495:web:e04ddd7fbdf74165bab3ca",
   measurementId: "G-Y62L15DHTY"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
