import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

import { getAuth } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js'
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js'

const appSettings = {
  databaseURL: 'https://phone-shop-3d5c4-default-rtdb.europe-west1.firebasedatabase.app'
}
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

// add data to firestore
// try {
//   const docRef = await addDoc(collection(db, "movies"), {
//     image: "temp",
//     title: "temp-description",
//     : "temp-image",
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }


// get data from firestore
// const querySnapshot = await getDocs(collection(db, "movies"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
//   // console.log(doc.data());
// });


