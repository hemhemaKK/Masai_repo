import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqfJUI0Orck3nDCB2Ulm-AgiZcWV92KcM",
  authDomain: "democheck-c2d99.firebaseapp.com",
  projectId: "democheck-c2d99",
  storageBucket: "democheck-c2d99.appspot.com",
  messagingSenderId: "870409634136",
  appId: "1:870409634136:web:68bad3814e92012d7ae52d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
