import { db } from './firebase.js';
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js'

const topPhones = document.getElementById('top-phones');


function createPhone(phone){
  const el = document.createElement('div');
  
  el.classList.add('phone');
  el.innerHTML = `
    <h2>${phone.name}</h2>
    <div class="phone-image">
      <img src="${phone.image}" alt="${phone.name}">
    </div>
    <p class="phone-price">
      ${phone.price}
    </p>
    <p>
      ${phone.company}
    </p>
  `;
  return el;
}

async function renderTopPhones(){
  const querySnapshot = await getDocs(collection(db, "phones"));
  console.log(querySnapshot);

  // get 3 random phones from the database
  const phones = [];
  querySnapshot.forEach((doc) => {
    phones.push(doc.data());
  });
  const randomPhones = phones.sort(() => Math.random() - Math.random()).slice(0, 3);
  for(let phone of randomPhones){
    const phoneElement = createPhone(phone);
    topPhones.appendChild(phoneElement);
  }
};

renderTopPhones();