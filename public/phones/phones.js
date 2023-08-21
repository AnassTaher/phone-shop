import { db } from '/firebase.js';
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"


const allPhones = document.getElementById('all-phones');

function createPhone(phone) {
  const el = document.createElement("div")

  el.classList.add("phone")
  el.innerHTML = `
    <h2 class="m-4 text-xl">${phone.name}</h2>
    <div class="phone-image">
    <a href="${phone.url}">
      <img src="${phone.image}" alt="${phone.name}">
    </a>
    </div>
    <p>
      ${phone.company}
    </p>
    <a href="${phone.url}"><button>Buy: ${phone.price}</button></a>
  `
  return el
}


(async function renderallPhones() {
  const querySnapshot = await getDocs(collection(db, "phones"))

  const phones = []
  querySnapshot.forEach((doc) => {
    phones.push(doc.data())
  })
  
  for (let phone of phones) {
    const phoneElement = createPhone(phone)
    allPhones.appendChild(phoneElement)
  }

  // append div with a big "+" sign to add a new phone

  const addImage = document.createElement("div")
  addImage.classList.add("add-phone")
  addImage.innerHTML = `
    <div>
    <a href="/admin/admin.html"><img src="https://img.icons8.com/?size=512&id=1501&format=png" alt="add phone" class="w-48" id="add-phone"></a>
    <h2 class="text-2xl">Add a new phone</h2>
    </div>
  `
  allPhones.appendChild(addImage)
})();

