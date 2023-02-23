const urlParams = new URLSearchParams(window.location.search);
const byNavn = urlParams.get("by");

const url = "json/byer.json";
async function hentData() {
  fetch(url)
    .then((ressponse) => ressponse.json())
    .then(visBy);
}
const main = document.querySelector("#forside_beskrivendetekst");
const template = document.querySelector(".template1").content;

function visBy(by) {
  by.forEach((by) => {
    console.log("function");
    if (by.Byer == byNavn) {
      const klon = template.cloneNode(true);
      klon.querySelector("#forside_h1").textContent = by.Byer;
      klon.querySelector(".single_kortforklaring").textContent = by.Generelt;
      main.appendChild(klon);
    }
  });
}

hentData();

// seværdigheder

async function hentOplevelse() {
  fetch("json/oplevelser.json")
    .then((ressponse) => ressponse.json())
    .then(visOplevelse);
}
const main2 = document.querySelector(".single_popular_tekst");
const template2 = document.querySelector(".template2").content;

function visOplevelse(oplevelse) {
  oplevelse.forEach((oplevelse) => {
    console.log("function");
    if (oplevelse.By == byNavn) {
      const klonOplevelse = template2.cloneNode(true);
      klonOplevelse.querySelector(".single_stortbillede").src =
        "images/" + oplevelse.Images;
      klonOplevelse.querySelector("p").textContent = oplevelse.Beskrivelse;
      klonOplevelse.querySelector("h2").textContent = oplevelse.Navn;
      main2.appendChild(klonOplevelse);
    }
  });
}

hentOplevelse();

// restauranter
async function hentRestaurant() {
  fetch("json/restauranter.json")
    .then((ressponse) => ressponse.json())
    .then(visRestaurant);
}
const main3 = document.querySelector(".single_rest");
const template3 = document.querySelector(".template3").content;

function visRestaurant(restaurant) {
  restaurant.forEach((restaurant) => {
    console.log("function");
    if (restaurant.By == byNavn) {
      const klonRestaurant = template3.cloneNode(true);
      klonRestaurant.querySelector(".single_stortbillede").src =
        "images/" + restaurant.Images;
      klonRestaurant.querySelector("p").textContent = restaurant.Beskrivelse;
      klonRestaurant.querySelector("h2").textContent = restaurant.Navn;
      main3.appendChild(klonRestaurant);
    }
  });
}

hentRestaurant();
