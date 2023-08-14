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
    <img src="https://img.icons8.com/?size=512&id=1501&format=png" alt="add phone" class="w-48" id="add-phone">
    <h2 class="text-2xl">Add a new phone</h2>
    </div>
  `
  allPhones.appendChild(addImage)
  const addPhoneButton = document.getElementById("add-phone")
  addPhoneButton.addEventListener("click", addPhone)

})();


function addPhone(){
  console.log("hello")
  const addPhoneForm = document.createElement("form")
  addPhoneForm.classList.add("add-phone-form")
  addPhoneForm.innerHTML = `
    <div class="flex flex-col">
      <label for="name">Name</label>
      <input type="text" name="name" id="name">
    </div>
    <div class="flex flex-col">
      <label for="company">Company</label>
      <input type="text" name="company" id="company">
    </div>
    <div class="flex flex-col">
      <label for="price">Price</label>
      <input type="number" name="price" id="price">
    </div>
    <div class="flex flex-col">
      <label for="image">Image</label>
      <input type="text" name="image" id="image">
    </div>
    <div class="flex flex-col">
      <label for="url">URL</label>
      <input type="text" name="url" id="url">
    </div>
    <button type="submit">Add</button>
  `
  allPhones.appendChild(addPhoneForm)

  addPhoneForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const formData = new FormData(addPhoneForm)
    const entry = Object.fromEntries(formData.entries())

    await db.collection("phones").add(entry)
    addPhoneForm.remove()
    location.reload()
  })

};

