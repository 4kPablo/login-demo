import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJMqQuINcW0bWOe7Z29plRHqKPp762H70",
  authDomain: "login-test-9538b.firebaseapp.com",
  projectId: "login-test-9538b",
  storageBucket: "login-test-9538b.firebasestorage.app",
  messagingSenderId: "380423265364",
  appId: "1:380423265364:web:aae2807ed30d0ba161e1c1",
  measurementId: "G-JNS35EG8Q7",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
