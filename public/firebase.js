import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyDhu_s0PgyEtGvEsIPVsIhLk6PJToEQvuk",
  authDomain: "phone-shop-3d5c4.firebaseapp.com",
  projectId: "phone-shop-3d5c4",
  storageBucket: "phone-shop-3d5c4.appspot.com",
  messagingSenderId: "664646156210",
  appId: "1:664646156210:web:2cc048e8bf9138be5aeeab",
  measurementId: "G-Q2FH7M2DQ1"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
