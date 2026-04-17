import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔥 seu config (já pronto)
const firebaseConfig = {
  apiKey: "AIzaSyBKxREJvFBAiopbACJjt7ydMDbKm5tQ-NU",
  authDomain: "provasophia.firebaseapp.com",
  projectId: "provasophia",
  storageBucket: "provasophia.firebasestorage.app",
  messagingSenderId: "797592991651",
  appId: "1:797592991651:web:43565b47c8d2ead82d8c16"
};

// inicializa
const app = initializeApp(firebaseConfig);

// exporta serviços
export const auth = getAuth(app);
export const db = getFirestore(app);