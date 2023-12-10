import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIsZott08dVOgcRpbgOIbgz4JK-wov3z4",
  authDomain: "todo-app-3838d.firebaseapp.com",
  projectId: "todo-app-3838d",
  storageBucket: "todo-app-3838d.appspot.com",
  messagingSenderId: "434005089633",
  appId: "1:434005089633:web:99dba0e68965860294b920",
  measurementId: "G-7TQNS9GRT4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
const analytics = getAnalytics(app);
