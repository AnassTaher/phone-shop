import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"
import { db } from "./firebase.js"

const topPhones = document.getElementById("top-phones")

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
    <a href="${phone.url}" class="buy-btn">Buy: ${phone.price}</a>
  `
  return el
}

(async function renderTopPhones() {
  const querySnapshot = await getDocs(collection(db, "phones"))

  const phones = []
  querySnapshot.forEach((doc) => {
    phones.push(doc.data())
  })
  const randomPhones = phones.sort(() => Math.random() - Math.random()).slice(0, 3);
  for (let phone of randomPhones) {
    const phoneElement = createPhone(phone)
    topPhones.appendChild(phoneElement)
  }
})()

const searchForm = document.getElementById("search-form")

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault()

  const querySnapshot = await getDocs(collection(db, "phones"))
  const formData = new FormData(searchForm)
  const entry = Object.fromEntries(formData.entries())

  var matchings = []
  const weights = {
    "name": 3,
    "price": 1,
    "company": 1,
  }
  querySnapshot.forEach((doc) => {
    const data = doc.data()
    let matches = 0
    for (var key in entry) {
      let same = 0;
      for (var i = 0; i < entry[key].length; i++) {
        if (data[key].includes(entry[key][i]) && entry[key][i] !== "") {
          same++;
        }
      }
      matches += same * weights[key];
    }
    matchings.push({ data, matches })
  })

  const bestMatch = matchings.sort((a, b) => b.matches - a.matches)[0]
  const phoneElement = createPhone(bestMatch.data)
  const resultContainer = document.getElementById('search-result');
  resultContainer.innerHTML = '';
  resultContainer.appendChild(phoneElement)
})


