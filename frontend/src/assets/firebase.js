// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNqOUoLBGlNbtJKvG2DS7rj5Zccyy7ZkQ",
    authDomain: "forkandflavor-d64e2.firebaseapp.com",
    projectId: "forkandflavor-d64e2",
    storageBucket: "forkandflavor-d64e2.appspot.com",
    messagingSenderId: "642576157499",
    appId: "1:642576157499:web:725e49e459b0aa7ece051e",
    measurementId: "G-8W1JSQW3LX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;