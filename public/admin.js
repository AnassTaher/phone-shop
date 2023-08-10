
import { app, db } from './firebase.js';
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js'

const postForm = document.getElementById('post-form');
postForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(postForm);
  const vals = [];
  for (const value of formData.values()) vals.push(value);
  
  
  const isValid = vals.every((val) => val !== '');
  if (!isValid) {
    alert('Please fill in all fields');
    return;
  }
  

  const entries = Object.fromEntries(formData.entries());
  try {
    const docRef = await addDoc(collection(db, "phones"), entries);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
  postForm.reset();

});