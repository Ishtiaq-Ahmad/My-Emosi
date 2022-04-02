import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyByanGPc_ZnkVN8L2TlC03jLCyhGh_D_gY",
    authDomain: "refinedmh.firebaseapp.com",
    projectId: "refinedmh",
    storageBucket: "refinedmh.appspot.com",
    messagingSenderId: "110422148240",
    appId: "1:110422148240:web:f4c6926fbc9fd0ddc88415",
    measurementId: "G-C4TYK25M80"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);

export default Firebase
